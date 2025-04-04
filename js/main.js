// المكونات الأساسية
const utils = {
    safeExecute: function(callback) {
        try {
            callback();
        } catch (error) {
            console.error('Error executing callback:', error);
        }
    },
    getElement: function(selector) {
        return document.querySelector(selector);
    },
    getAllElements: function(selector) {
        return document.querySelectorAll(selector);
    }
};

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    utils.safeExecute(() => {
        // تهيئة المكونات
        initNavbar();
        initPortfolio();
        initSmoothScroll();
        initImageOptimizations();
        initCounters();
        
        // إخفاء شاشة التحميل
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 300);
            }, 500);
        }
    });
});

// تهيئة الهيدر والقائمة المتنقلة
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const backToTopButton = document.getElementById('backToTop');

    // إضافة خلفية عند التمرير
    window.addEventListener('scroll', () => {
        // تحديث الهيدر
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        
        // تحديث زر العودة للأعلى
        if (backToTopButton) {
            backToTopButton.classList.toggle('visible', window.scrollY > 300);
        }
    }, { passive: true });

    // تحديث القائمة النشطة عند التمرير
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
        });
    }

    // تحديث القائمة النشطة عند التمرير والتحميل
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('load', updateActiveLink);

    // التمرير السلس عند النقر على الروابط
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // إغلاق القائمة في الشاشات الصغيرة
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // تحسين تجربة القائمة المتنقلة
    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            navbarCollapse.classList.toggle('show');
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && document.body.classList.contains('nav-open')) {
                navbarToggler.click();
            }
        });
    }

    // تهيئة زر العودة للأعلى
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// تهيئة معرض الأعمال
function initPortfolio() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioFilters = document.querySelectorAll('.portfolio-filter');
    
    if (!portfolioContainer || !portfolioFilters.length) return;
    
    // تحديث الفلتر النشط
    portfolioFilters.forEach(filter => {
        filter.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة الفلتر النشط السابق
            portfolioFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // تحديث المشاريع المعروضة
            const category = this.getAttribute('data-filter');
            filterProjects(category);
        });
    });
    
    // فلترة المشاريع
    function filterProjects(category) {
        const projects = portfolioContainer.querySelectorAll('.portfolio-item');
        
        projects.forEach(project => {
            const shouldShow = category === 'all' || project.getAttribute('data-category') === category;
            project.style.display = shouldShow ? 'block' : 'none';
            setTimeout(() => project.classList.toggle('show', shouldShow), shouldShow ? 0 : 300);
        });
    }
}

// التمرير السلس
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// تحسين تحميل الصور
function initImageOptimizations() {
    // منع السحب والإفلات للصور
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // تحسين تحميل الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\'%3E%3Crect width=\'200\' height=\'200\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'100\' y=\'100\' font-family=\'Arial\' font-size=\'14\' fill=\'%23999\' text-anchor=\'middle\' dy=\'.3em\'%3Eالصورة غير متوفرة%3C/text%3E%3C/svg%3E';
        });
    });
}

// تهيئة العدادات
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const startCounting = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        const decimals = parseInt(counter.getAttribute('data-decimals')) || 0;
        
        let startTime = null;
        let currentNumber = 0;

        const easeOutQuad = t => t * (2 - t);

        const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress = easeOutQuad(progress);
            
            currentNumber = Math.min(easedProgress * target, target);
            
            counter.textContent = `${prefix}${currentNumber.toFixed(decimals)}${suffix}`;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    // استخدام Intersection Observer لبدء العد عندما يصبح العنصر مرئياً
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px'
    });

    counters.forEach(counter => observer.observe(counter));
}

// تحسين تسجيل Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registration successful'))
            .catch(err => console.log('ServiceWorker registration failed: ', err));
    });
}

// معالجة الأخطاء غير المتوقعة
window.addEventListener('error', event => {
    console.error('Uncaught error:', event.error);
    event.preventDefault();
});

window.addEventListener('unhandledrejection', event => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});