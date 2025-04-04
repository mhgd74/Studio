// تعريف المتغيرات العامة
window.portfolioConfig = {
    items: [
        {
            title: 'تطوير موقع شركة عقارات',
            category: 'web',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle"%3Eتطوير موقع%3C/text%3E%3C/svg%3E',
            description: 'تصميم وتطوير موقع إلكتروني متكامل لشركة عقارات رائدة، يتضمن نظام بحث متقدم وعرض ثلاثي الأبعاد للعقارات',
            client: 'دار العقارات المتحدة',
            tags: ['تطوير مواقع', 'تصميم UI/UX', 'نظام إدارة محتوى']
        },
        {
            title: 'تطبيق توصيل طلبات',
            category: 'app',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle"%3Eتطبيق جوال%3C/text%3E%3C/svg%3E',
            description: 'تطوير تطبيق جوال لخدمة توصيل الطلبات مع نظام تتبع مباشر ودعم الدفع الإلكتروني',
            client: 'سريع للتوصيل',
            tags: ['تطبيقات الجوال', 'خرائط', 'نظام دفع']
        },
        {
            title: 'هوية بصرية لمطعم',
            category: 'brand',
            image: null,
            description: 'تصميم هوية بصرية كاملة لسلسلة مطاعم تشمل الشعار والألوان والمطبوعات ومواد التسويق',
            client: 'لذيذ للمأكولات',
            tags: ['هوية بصرية', 'تصميم شعار', 'مواد تسويقية']
        },
        {
            title: 'منصة تعليم إلكتروني',
            category: 'web',
            image: null,
            description: 'تطوير منصة تعليمية متكاملة تدعم الدروس المباشرة والمسجلة مع نظام إدارة المحتوى التعليمي',
            client: 'أكاديمية التعلم الذكي',
            tags: ['منصات تعليمية', 'بث مباشر', 'إدارة محتوى']
        },
        {
            title: 'تطبيق إدارة العيادات',
            category: 'app',
            image: null,
            description: 'تطبيق متكامل لإدارة العيادات الطبية يشمل حجز المواعيد وإدارة الملفات الطبية والفواتير',
            client: 'مجمع العناية الطبي',
            tags: ['تطبيقات طبية', 'إدارة مواعيد', 'ملفات طبية']
        },
        {
            title: 'حملة تسويقية رقمية',
            category: 'marketing',
            image: null,
            description: 'تصميم وتنفيذ حملة تسويقية رقمية متكاملة شملت وسائل التواصل الاجتماعي والإعلانات المدفوعة',
            client: 'ماركة أزياء محلية',
            tags: ['تسويق رقمي', 'سوشيال ميديا', 'إعلانات']
        },
        {
            title: 'متجر إلكتروني',
            category: 'web',
            image: null,
            description: 'تصميم وتطوير متجر إلكتروني متكامل مع نظام إدارة المخزون والطلبات والدفع الإلكتروني',
            client: 'سوق الإلكترونيات',
            tags: ['متاجر إلكترونية', 'نظام دفع', 'إدارة مخزون']
        },
        {
            title: 'تصميم كتيبات وبروشورات',
            category: 'brand',
            image: null,
            description: 'تصميم مجموعة من المطبوعات التسويقية تشمل الكتيبات والبروشورات والعروض التقديمية',
            client: 'شركة استشارات',
            tags: ['تصميم مطبوعات', 'بروشورات', 'عروض تقديمية']
        },
        {
            title: 'تطبيق إدارة المشاريع',
            category: 'app',
            image: null,
            description: 'تطوير تطبيق لإدارة المشاريع والمهام مع ميزات التعاون وتتبع الوقت والتقارير',
            client: 'شركة برمجيات',
            tags: ['إدارة مشاريع', 'تطبيقات أعمال', 'تقارير']
        }
    ]
};

// تعيين الصور للمشاريع
if (window.portfolioConfig && window.portfolioConfig.items) {
    window.portfolioConfig.items.forEach(item => {
        if (!item.image) {
            const placeholderText = item.title || 'مشروع';
            item.image = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle"%3E${encodeURIComponent(placeholderText)}%3C/text%3E%3C/svg%3E`;
        }
    });
}

// دالة معالجة أخطاء الصور
function handleImageError(img) {
    if (!img) return;
    const placeholderText = img.alt || 'صورة';
    img.src = `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect width="300" height="200" fill="%23f0f0f0"/%3E%3Ctext x="150" y="100" font-family="Arial" font-size="14" fill="%23666" text-anchor="middle"%3E${encodeURIComponent(placeholderText)}%3C/text%3E%3C/svg%3E`;
}

// دالة تهيئة المحفظة
function initPortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (!portfolioGrid) return;

    // دالة عرض المشاريع
    const renderProjects = (category = 'all') => {
        console.log('جاري عرض المشاريع...', category); // للتأكد من تنفيذ الدالة
        portfolioGrid.innerHTML = '';
        const filteredItems = category === 'all' 
            ? window.portfolioConfig.items 
            : window.portfolioConfig.items.filter(item => item.category === category);

        if (filteredItems.length === 0) {
            portfolioGrid.innerHTML = '<div class="col-12 text-center">لا توجد مشاريع في هذه الفئة</div>';
            return;
        }

        filteredItems.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4 mb-4';
            col.style.animationDelay = `${index * 0.1}s`;
            
            col.innerHTML = `
                <div class="portfolio-item" data-category="${item.category}">
                    <div class="portfolio-image">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                        <div class="portfolio-overlay">
                            <div class="portfolio-info">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="portfolio-tags">
                                    ${item.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
                                </div>
                                <button class="btn btn-project mt-3">عرض التفاصيل</button>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-content">
                        <h4>${item.title}</h4>
                        <p class="client">العميل: ${item.client}</p>
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(col);
        });

        // تفعيل التحميل الكسول للصور
        const images = portfolioGrid.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('error', () => handleImageError(img));
        });
    };

    // معالجة أزرار التصفية
    const filterBtns = document.querySelectorAll('.portfolio-filter [data-filter]');
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = btn.getAttribute('data-filter');
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(filter);
            });
        });
    }

    // العرض الأولي للمشاريع
    console.log('بدء تهيئة المحفظة'); // للتأكد من تنفيذ الدالة
    renderProjects('all');
}

// تهيئة المحفظة عند تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    console.log('تم تحميل المستند'); // للتأكد من تحميل المستند
    initPortfolio();
});

// إضافة معالجة الأخطاء
window.addEventListener('error', (e) => {
    console.error('خطأ في تنفيذ الكود:', e);
});

// دالة عرض تفاصيل المشروع
function showProjectModal(project) {
    console.log('عرض تفاصيل المشروع:', project);
}

// في بداية الملف
if (typeof utils === 'undefined') {
    window.utils = {
        safeExecute(callback) {
            try {
                return callback();
            } catch (error) {
                console.error('Error executing callback:', error);
                return null;
            }
        }
    };
}

// ثم نغلف استدعاء initPortfolio في نهاية الملف
document.addEventListener('DOMContentLoaded', () => {
    utils.safeExecute(initPortfolio);
});

const portfolioItems = [
    {
        id: 1,
        title: "تصميم موقع شركة تقنية",
        category: "تصميم مواقع",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='24'%3Eتصميم موقع%3C/text%3E%3C/svg%3E",
        description: "تصميم وتطوير موقع متجاوب لشركة تقنية"
    },
    {
        id: 2,
        title: "هوية بصرية لمطعم",
        category: "هوية بصرية",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='24'%3Eهوية بصرية%3C/text%3E%3C/svg%3E",
        description: "تصميم هوية بصرية متكاملة لمطعم عصري"
    },
    {
        id: 3,
        title: "تطبيق جوال",
        category: "تطبيقات",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f0f0'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23999' font-family='Arial' font-size='24'%3Eتطبيق جوال%3C/text%3E%3C/svg%3E",
        description: "تصميم وتطوير تطبيق جوال سهل الاستخدام"
    }
];

const categories = ['الكل', 'تصميم مواقع', 'هوية بصرية', 'تطبيقات'];

function renderPortfolio() {
    const portfolioSection = document.querySelector('#portfolio');
    if (!portfolioSection) return;

    // إنشاء أزرار التصفية
    const filterButtons = `
        <div class="portfolio-filters">
            ${categories.map(category => `
                <button class="filter-btn ${category === 'الكل' ? 'active' : ''}" 
                        data-category="${category}">
                    ${category}
                </button>
            `).join('')}
        </div>
    `;

    // إنشاء معرض الأعمال
    const portfolioGrid = `
        <div class="portfolio-grid">
            ${portfolioItems.map(item => `
                <div class="portfolio-item" data-category="${item.category}" data-aos="fade-up">
                    <div class="portfolio-image">
                        <img src="${item.image}" 
                             alt="${item.title}"
                             loading="lazy"
                             width="400"
                             height="300">
                        <div class="portfolio-overlay">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <button class="view-project" data-id="${item.id}">
                                عرض المشروع
                                <i class="bi bi-arrow-left"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // إضافة المحتوى للقسم
    portfolioSection.innerHTML = `
        <div class="container">
            <h2 class="section-title">معرض أعمالنا</h2>
            <p class="section-subtitle">نماذج من مشاريعنا السابقة</p>
            ${filterButtons}
            ${portfolioGrid}
        </div>
    `;

    // إضافة التفاعلات
    initPortfolioFilters();
}

function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            // تصفية العناصر
            portfolioItems.forEach(item => {
                if (category === 'الكل' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// تنفيذ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderPortfolio);