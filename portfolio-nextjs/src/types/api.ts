// API Request/Response types
export interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  emailResult?: {
    success: boolean;
    messageId?: string;
    simulated?: boolean;
  };
}

export interface NewsletterRequest {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
}

export interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
}

// Email types
export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: EmailAttachment[];
}

export interface EmailAttachment {
  filename: string;
  content: string | Buffer;
  contentType?: string;
  encoding?: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
}

// Validation types
export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// Rate limiting types
export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

export interface RateLimitResponse {
  success: boolean;
  message: string;
  rateLimitInfo?: RateLimitInfo;
}

// Error types
export interface ApiError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
  path: string;
  method: string;
}

export interface ErrorResponse {
  success: false;
  error: ApiError;
  message: string;
}

// Success response type
export interface SuccessResponse<T = any> {
  success: true;
  data?: T;
  message: string;
  timestamp: string;
}

// Generic API response type
export type ApiResponse<T = any> = SuccessResponse<T> | ErrorResponse;

// Request configuration types
export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

// API endpoint configuration
export interface ApiEndpoint {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  timeout: number;
  retries: number;
  retryDelay: number;
  rateLimit?: {
    windowMs: number;
    max: number;
  };
}

// API client configuration
export interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  headers: Record<string, string>;
  interceptors?: {
    request?: (config: RequestConfig) => RequestConfig;
    response?: (response: any) => any;
    error?: (error: any) => any;
  };
}

// Caching types
export interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  key: string;
  tags?: string[];
}

export interface CacheItem<T = any> {
  key: string;
  value: T;
  expires: number;
  tags: string[];
}

// Webhook types
export interface WebhookPayload {
  event: string;
  data: any;
  timestamp: string;
  signature?: string;
}

export interface WebhookConfig {
  url: string;
  secret: string;
  events: string[];
  retries: number;
  timeout: number;
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsConfig {
  enabled: boolean;
  trackingId: string;
  endpoint: string;
  batchSize: number;
  flushInterval: number;
}

// Monitoring types
export interface HealthCheck {
  name: string;
  status: 'healthy' | 'unhealthy' | 'degraded';
  responseTime: number;
  lastChecked: string;
  error?: string;
}

export interface Metrics {
  requests: {
    total: number;
    successful: number;
    failed: number;
    averageResponseTime: number;
  };
  errors: {
    total: number;
    byType: Record<string, number>;
  };
  uptime: number;
  memory: {
    used: number;
    free: number;
    total: number;
  };
}

// Security types
export interface SecurityConfig {
  cors: {
    origin: string[];
    methods: string[];
    headers: string[];
    credentials: boolean;
  };
  rateLimit: {
    windowMs: number;
    max: number;
    message: string;
  };
  helmet: {
    contentSecurityPolicy: boolean;
    hsts: boolean;
    noSniff: boolean;
    xssFilter: boolean;
  };
}

// Database types
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
  pool: {
    min: number;
    max: number;
    idle: number;
  };
}

// Logging types
export interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

export interface LogEntry {
  level: keyof LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, any>;
  error?: Error;
}

export interface LoggerConfig {
  level: keyof LogLevel;
  format: 'json' | 'text';
  transports: string[];
  context: Record<string, any>;
}
