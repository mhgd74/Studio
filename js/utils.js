// Utility functions for the portfolio website
window.utils = {
    // Safe DOM element selection
    getElement(selector, context = document) {
        try {
            const element = context.querySelector(selector);
            if (!element) {
                console.warn(`Element not found: ${selector}`);
            }
            return element;
        } catch (error) {
            console.error(`Error finding element ${selector}:`, error);
            return null;
        }
    },

    // Safe function execution
    safeExecute(callback) {
        try {
            return callback();
        } catch (error) {
            console.error('Error executing callback:', error);
            return null;
        }
    },

    // Create SVG placeholder
    createSVGPlaceholder(width = 300, height = 200, text = '') {
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
                <rect width="100%" height="100%" fill="#f0f0f0"/>
                <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#666" 
                      text-anchor="middle" dominant-baseline="middle">${text}</text>
            </svg>`;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    },

    // Handle image loading errors
    handleImageError(img) {
        if (!img) return;
        const text = img.alt || 'صورة';
        const width = img.width || 300;
        const height = img.height || 200;
        img.src = this.createSVGPlaceholder(width, height, text);
    },

    // Lazy loading images
    initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('error', () => this.handleImageError(img));
        });
    },

    // Debounce function for performance optimization
    debounce(func, wait = 100) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Initialize tooltips
    initTooltips() {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        if (tooltipTriggerList.length > 0) {
            [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
        }
    },

    // Format date
    formatDate(date) {
        try {
            return new Intl.DateTimeFormat('ar-SA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(new Date(date));
        } catch (error) {
            console.error('Error formatting date:', error);
            return date;
        }
    }
};
