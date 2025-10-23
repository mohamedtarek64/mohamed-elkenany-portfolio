// Form hooks
import { useState, useCallback, useEffect } from 'react';
import { validationService } from '../services';

// Hook for form state management
export const useForm = (initialValues = {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Update field value
  const setValue = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  // Update multiple values
  const updateValues = useCallback((newValues) => {
    setValues(prev => ({ ...prev, ...newValues }));
  }, [setValues]);

  // Handle input change
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setValue(name, newValue);
  }, [setValue]);

  // Handle blur event
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  // Validate single field
  const validateField = useCallback((name, value) => {
    const error = validationService.validateField(name, value, validationSchema);
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  }, [validationSchema]);

  // Validate all fields
  const validateForm = useCallback(() => {
    const { isValid: formIsValid, errors: formErrors } = validationService.validateForm(values, validationSchema);
    setErrors(formErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }, [values, validationSchema]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsValid(false);
  }, [initialValues]);

  // Submit form
  const handleSubmit = useCallback((onSubmit) => {
    return async (e) => {
      e.preventDefault();
      
      const formIsValid = validateForm();
      if (!formIsValid) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    };
  }, [values, validateForm]);

  // Auto-validate on change
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [values, touched, validateForm]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    setValue,
    updateValues,
    handleChange,
    handleBlur,
    validateField,
    validateForm,
    resetForm,
    handleSubmit
  };
};

// Hook for form validation
export const useFormValidation = (schema) => {
  const [errors, setErrors] = useState({});

  const validate = useCallback((values) => {
    const { isValid, errors: validationErrors } = validationService.validateForm(values, schema);
    setErrors(validationErrors);
    return { isValid, errors: validationErrors };
  }, [schema]);

  const validateField = useCallback((name, value) => {
    const error = validationService.validateField(name, value, schema);
    setErrors(prev => ({ ...prev, [name]: error }));
    return error;
  }, [schema]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const clearFieldError = useCallback((name) => {
    setErrors(prev => ({ ...prev, [name]: null }));
  }, []);

  return {
    errors,
    validate,
    validateField,
    clearErrors,
    clearFieldError
  };
};

// Hook for form submission
export const useFormSubmission = (submitFn, options = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submit = useCallback(async (values) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const result = await submitFn(values);
      setSubmitSuccess(true);
      
      if (options.onSuccess) {
        options.onSuccess(result);
      }
      
      return result;
    } catch (error) {
      setSubmitError(error.message);
      
      if (options.onError) {
        options.onError(error);
      }
      
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [submitFn, options]);

  const reset = useCallback(() => {
    setSubmitError(null);
    setSubmitSuccess(false);
  }, []);

  return {
    isSubmitting,
    submitError,
    submitSuccess,
    submit,
    reset
  };
};

// Hook for field validation
export const useFieldValidation = (name, value, rules) => {
  const [error, setError] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const validate = useCallback(async () => {
    if (!rules) return null;

    setIsValidating(true);
    try {
      const validationError = validationService.validateField(name, value, { [name]: rules });
      setError(validationError);
      return validationError;
    } finally {
      setIsValidating(false);
    }
  }, [name, value, rules]);

  useEffect(() => {
    if (value && rules) {
      const timeoutId = setTimeout(validate, 300); // Debounce validation
      return () => clearTimeout(timeoutId);
    }
  }, [value, validate]);

  return {
    error,
    isValidating,
    validate
  };
};

// Hook for form persistence
export const useFormPersistence = (formKey, values, options = {}) => {
  const { autoSave = true, debounceMs = 1000 } = options;

  // Save to localStorage
  const saveForm = useCallback((formValues) => {
    try {
      localStorage.setItem(formKey, JSON.stringify(formValues));
    } catch (error) {
      console.error('Failed to save form:', error);
    }
  }, [formKey]);

  // Load from localStorage
  const loadForm = useCallback(() => {
    try {
      const saved = localStorage.getItem(formKey);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.error('Failed to load form:', error);
      return null;
    }
  }, [formKey]);

  // Clear saved form
  const clearForm = useCallback(() => {
    try {
      localStorage.removeItem(formKey);
    } catch (error) {
      console.error('Failed to clear form:', error);
    }
  }, [formKey]);

  // Auto-save effect
  useEffect(() => {
    if (autoSave && values) {
      const timeoutId = setTimeout(() => {
        saveForm(values);
      }, debounceMs);

      return () => clearTimeout(timeoutId);
    }
  }, [values, autoSave, debounceMs, saveForm]);

  return {
    saveForm,
    loadForm,
    clearForm
  };
};

// Hook for multi-step forms
export const useMultiStepForm = (steps, initialStep = 0) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const nextStep = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, steps.length]);

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  }, [steps.length]);

  const isStepCompleted = useCallback((step) => {
    return completedSteps.has(step);
  }, [completedSteps]);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return {
    currentStep,
    completedSteps,
    nextStep,
    prevStep,
    goToStep,
    isStepCompleted,
    isFirstStep,
    isLastStep,
    progress,
    totalSteps: steps.length
  };
};
