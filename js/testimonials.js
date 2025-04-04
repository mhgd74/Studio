// البيانات الثابتة
const testimonialData = [
    {
        id: 1,
        name: "أحمد محمد",
        position: "مدير شركة تقنية",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23f0f0f0'/%3E%3Ccircle cx='75' cy='60' r='30' fill='%23ddd'/%3E%3Ccircle cx='75' cy='140' r='50' fill='%23ddd'/%3E%3C/svg%3E",
        content: "تجربتنا مع MH Studio كانت مميزة جداً. الفريق محترف ويقدم خدمة عالية الجودة. ساعدونا في تطوير هويتنا البصرية وموقعنا الإلكتروني بشكل احترافي.",
        rating: 5
    },
    {
        id: 2,
        name: "سارة أحمد",
        position: "صاحبة متجر إلكتروني",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23f0f0f0'/%3E%3Ccircle cx='75' cy='60' r='30' fill='%23ddd'/%3E%3Ccircle cx='75' cy='140' r='50' fill='%23ddd'/%3E%3C/svg%3E",
        content: "أشكر فريق MH Studio على تصميم متجري الإلكتروني. النتيجة كانت رائعة وتجاوزت توقعاتي. الموقع سهل الاستخدام وجذاب للعملاء.",
        rating: 5
    },
    {
        id: 3,
        name: "محمد علي",
        position: "مدير تسويق",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect width='150' height='150' fill='%23f0f0f0'/%3E%3Ccircle cx='75' cy='60' r='30' fill='%23ddd'/%3E%3Ccircle cx='75' cy='140' r='50' fill='%23ddd'/%3E%3C/svg%3E",
        content: "الحملة التسويقية التي نفذها فريق MH Studio حققت نتائج مذهلة. زاد عدد عملائنا بشكل ملحوظ وتحسنت صورة علامتنا التجارية.",
        rating: 5
    }
];

// إنشاء نجوم التقييم
function generateRatingStars(rating) {
    return Array(5).fill('').map((_, index) => `
        <i class="bi bi-star${index < rating ? '-fill' : ''}"></i>
    `).join('');
}

// عرض آراء العملاء
function renderTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonialData.map(testimonial => `
        <div class="testimonial-card" data-aos="fade-up">
            <div class="testimonial-quote">
                <i class="bi bi-quote"></i>
            </div>
            <div class="testimonial-content">
                ${testimonial.content}
            </div>
            <div class="testimonial-rating">
                ${generateRatingStars(testimonial.rating)}
            </div>
            <div class="testimonial-author">
                <div class="author-image">
                    <img src="${testimonial.image}" 
                         alt="${testimonial.name}"
                         width="60"
                         height="60"
                         loading="lazy">
                </div>
                <div class="author-info">
                    <h5>${testimonial.name}</h5>
                    <p>${testimonial.position}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// تهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderTestimonials);