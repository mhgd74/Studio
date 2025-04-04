// تعريف الخدمات
const services = [
    {
        title: "تصميم جرافيك",
        icon: "bi bi-palette2",
        description: "تصميم هوية بصرية متكاملة، شعارات، مطبوعات، وتغليف منتجات احترافي"
    },
    {
        title: "المطبوعات المتكاملة",
        icon: "bi bi-printer-fill",
        description: "تصميم وطباعة البروشورات، الكتالوجات، الكروت، واللوحات الإعلانية"
    },
    {
        title: "حملات إعلانية",
        icon: "bi bi-megaphone-fill",
        description: "تخطيط وإدارة الحملات الإعلانية الرقمية والتقليدية بكفاءة عالية"
    },
    {
        title: "إدارة منصات التواصل",
        icon: "bi bi-share-fill",
        description: "إدارة احترافية لحسابات التواصل الاجتماعي مع محتوى إبداعي مميز"
    },
    {
        title: "تصميم مواقع الويب",
        icon: "bi bi-laptop",
        description: "تصميم وتطوير مواقع عصرية احترافية متجاوبة مع جميع الأجهزة"
    },
    {
        title: "تطبيقات الموبايل",
        icon: "bi bi-phone-fill",
        description: "تطوير تطبيقات جوال عصرية لأنظمة iOS وAndroid بأحدث التقنيات"
    }
];

// دالة تهيئة قسم الخدمات
function initServices() {
    const servicesContainer = document.querySelector('.row.g-4');
    if (!servicesContainer) {
        console.warn('لم يتم العثور على حاوية الخدمات');
        return;
    }

    const servicesHTML = services.map(service => `
        <div class="col-md-4">
            <div class="service-card">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        </div>
    `).join('');

    servicesContainer.innerHTML = servicesHTML;
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    utils.safeExecute(initServices);
});