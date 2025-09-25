export declare function sharedUtils(): string;
/**
 * Format a date to a readable string
 */
export declare function formatDate(date: Date | string): string;
/**
 * Format a number as currency
 */
export declare function formatCurrency(amount: number, currency?: string): string;
/**
 * Generate a random ID
 */
export declare function generateId(): string;
/**
 * Debounce function
 */
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Validate email format
 */
export declare function isValidEmail(email: string): boolean;
/**
 * Capitalize first letter of a string
 */
export declare function capitalize(str: string): string;
/**
 * Truncate text to specified length
 */
export declare function truncateText(text: string, maxLength: number): string;
