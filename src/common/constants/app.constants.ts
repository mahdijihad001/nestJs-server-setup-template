export const APP_CONSTANTS = {
  // Pagination
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,

  // File Upload
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],

  // Authentication
  OTP_LENGTH: 6,
  OTP_EXPIRY_MINUTES: 10,
  MAX_LOGIN_ATTEMPTS: 5,
  ACCOUNT_LOCK_DURATION_MINUTES: 30,
  JWT_EXPIRY: '15m',
  REFRESH_TOKEN_EXPIRY: '7d',

  // Rate Limiting
  RATE_LIMIT_WINDOW: 60, // seconds
  RATE_LIMIT_MAX: 100, // requests

  // Caching
  CACHE_TTL_SHORT: 300, // 5 minutes
  CACHE_TTL_MEDIUM: 3600, // 1 hour
  CACHE_TTL_LONG: 86400, // 24 hours

  // Platform Fees
  PLATFORM_FEE_PERCENTAGE: 10,
  PLATFORM_TAX_PERCENTAGE: 5,
  MIN_WITHDRAWAL_AMOUNT: 500,
  WITHDRAWAL_FEE_PERCENTAGE: 2,

  // Subscription Plans
  FREE_PLAN_MAX_JOBS: 3,
  BASIC_PLAN_MAX_JOBS: 10,
  STANDARD_PLAN_MAX_JOBS: 50,
  PREMIUM_PLAN_MAX_JOBS: -1, // unlimited

  // Search
  SEARCH_MIN_QUERY_LENGTH: 3,
  SEARCH_MAX_RESULTS: 50,

  // Review
  MIN_REVIEW_RATING: 1,
  MAX_REVIEW_RATING: 5,
  REVIEW_EDIT_WINDOW_HOURS: 24,

  // Booking
  BOOKING_CANCELLATION_HOURS: 24,
  BOOKING_REMINDER_HOURS: 24,
};

/**
 * Cache Keys
 */
export const CACHE_KEYS = {
  USER: (id: string) => `user:${id}`,
  PROVIDER: (id: string) => `provider:${id}`,
  JOB: (id: string) => `job:${id}`,
  CATEGORY: (id: string) => `category:${id}`,
  CATEGORIES_ALL: 'categories:all',
  SEARCH: (query: string, filters: string) => `search:${query}:${filters}`,
  BOOKING: (id: string) => `booking:${id}`,
  REVIEW: (id: string) => `review:${id}`,
};

/**
 * Queue Names
 */
export const QUEUE_NAMES = {
  EMAIL: 'email',
  SMS: 'sms',
  NOTIFICATION: 'notification',
  PAYMENT: 'payment',
};

/**
 * Event Names
 */
export const EVENTS = {
  USER_REGISTERED: 'user.registered',
  USER_VERIFIED: 'user.verified',
  BOOKING_CREATED: 'booking.created',
  BOOKING_ACCEPTED: 'booking.accepted',
  BOOKING_COMPLETED: 'booking.completed',
  PAYMENT_RECEIVED: 'payment.received',
  REVIEW_CREATED: 'review.created',
  MESSAGE_SENT: 'message.sent',
};