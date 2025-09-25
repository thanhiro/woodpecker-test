"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedUtils = sharedUtils;
exports.formatDate = formatDate;
exports.formatCurrency = formatCurrency;
exports.generateId = generateId;
exports.debounce = debounce;
exports.isValidEmail = isValidEmail;
exports.capitalize = capitalize;
exports.truncateText = truncateText;
function sharedUtils() {
    return 'shared-utils';
}
/**
 * Format a date to a readable string
 */
function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
/**
 * Format a number as currency
 */
function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}
/**
 * Generate a random ID
 */
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
/**
 * Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
/**
 * Capitalize first letter of a string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Truncate text to specified length
 */
function truncateText(text, maxLength) {
    if (text.length <= maxLength)
        return text;
    return text.substr(0, maxLength) + '...';
}
//# sourceMappingURL=shared-utils.js.map