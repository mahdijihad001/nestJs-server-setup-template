export const ERROR_MESSAGES = {
  // Authentication
  INVALID_CREDENTIALS: 'Invalid email or password',
  ACCOUNT_NOT_VERIFIED: 'Please verify your email address',
  ACCOUNT_SUSPENDED: 'Your account has been suspended',
  ACCOUNT_BANNED: 'Your account has been banned',
  ACCOUNT_LOCKED: 'Account locked due to too many failed attempts',
  INVALID_TOKEN: 'Invalid or expired token',
  INVALID_OTP: 'Invalid OTP code',
  OTP_EXPIRED: 'OTP has expired. Please request a new one',
  TOO_MANY_ATTEMPTS: 'Too many attempts. Please try again later',

  // User
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User with this email already exists',
  PHONE_ALREADY_EXISTS: 'Phone number already registered',

  // Authorization
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'Access forbidden',
  INSUFFICIENT_PERMISSIONS: 'You do not have sufficient permissions',

  // Validation
  VALIDATION_FAILED: 'Validation failed',
  INVALID_INPUT: 'Invalid input data',
  REQUIRED_FIELD: 'This field is required',

  // File Upload
  FILE_TOO_LARGE: 'File size exceeds the maximum allowed size',
  INVALID_FILE_TYPE: 'Invalid file type',
  UPLOAD_FAILED: 'File upload failed',

  // Database
  DATABASE_ERROR: 'Database error occurred',
  RECORD_NOT_FOUND: 'Record not found',
  DUPLICATE_ENTRY: 'This record already exists',

  // Payment
  PAYMENT_FAILED: 'Payment processing failed',
  INSUFFICIENT_BALANCE: 'Insufficient balance',
  INVALID_PAYMENT_METHOD: 'Invalid payment method',

  // Booking
  BOOKING_NOT_FOUND: 'Booking not found',
  BOOKING_ALREADY_ACCEPTED: 'Booking has already been accepted',
  BOOKING_CANNOT_BE_CANCELLED: 'Booking cannot be cancelled at this time',

  // General
  INTERNAL_SERVER_ERROR: 'Internal server error. Please try again later',
  SERVICE_UNAVAILABLE: 'Service temporarily unavailable',
  NOT_IMPLEMENTED: 'This feature is not yet implemented',
};