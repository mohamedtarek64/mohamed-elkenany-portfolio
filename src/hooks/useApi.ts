// API hook for data fetching
'use client';

// @ts-ignore
import { useState, useEffect, useCallback } from 'react';

interface ApiOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  immediate?: boolean;
}

export const useApi = (url: string, options: ApiOptions = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
        ...options
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData, options.immediate]);

  return { data, loading, error, refetch: fetchData };
};

// Hook for form submission
export const useFormSubmit = (submitFn, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await submitFn(data);
      setSuccess(true);
      
      if (typeof (options as any).onSuccess === 'function') {
        (options as any).onSuccess(result);
      }
      
      return result;
    } catch (err: any) {
      setError(err.message);
      
      if (typeof (options as any).onError === 'function') {
        (options as any).onError(err);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [submitFn, options]);

  return { submit, loading, error, success };
};

// Hook for pagination
export const usePagination = (data = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    setCurrentPage(1);
  }, [data.length, itemsPerPage]);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
};

// Hook for infinite scroll
export const useInfiniteScroll = (fetchMore, hasMore) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        setLoading(true);
        fetchMore().finally(() => setLoading(false));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMore, hasMore, loading]);

  return { loading };
};
