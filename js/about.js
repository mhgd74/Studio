const aboutContent = {
    title: "من نحن",
    subtitle: "نقدم حلولاً إبداعية متكاملة لنجاح مشروعك",
    mainTitle: "استديو متخصص في التصميم والتطوير الرقمي",
    description: "نحن فريق متكامل من المصممين والمطورين المحترفين، نقدم باقة شاملة من الخدمات الإبداعية والتقنية. من التصميم الجرافيكي والمطبوعات إلى تطوير المواقع والتطبيقات، نضع خبرتنا بين يديك لتحقيق رؤيتك بأعلى معايير الجودة.",
    image: {
        src: "./images/me img/A slim young man with medium hair neatly styled... (7).png",
        alt: "MH Studio فريق"
    },
    features: [
        {
            icon: `<i class="bi bi-palette2 fs-2 text-accent"></i>`,
            title: "تصميم إبداعي",
            text: "خدمات تصميم جرافيك احترافية وهوية بصرية متكاملة للعلامات التجارية"
        },
        {
            icon: `<i class="bi bi-laptop fs-2 text-accent"></i>`,
            title: "حلول رقمية",
            text: "تصميم وتطوير مواقع وتطبيقات عصرية بأحدث التقنيات"
        },
        {
            icon: `<i class="bi bi-megaphone-fill fs-2 text-accent"></i>`,
            title: "تسويق متكامل",
            text: "إدارة احترافية للحملات الإعلانية ومنصات التواصل الاجتماعي"
        }
    ]
};

function renderAbout() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;

    aboutSection.innerHTML = `
        <div class="container">
            <div class="about-header" data-aos="fade-up">
                <h2 class="section-title">${aboutContent.title}</h2>
                <p class="section-subtitle">${aboutContent.subtitle}</p>
            </div>
            
            <div class="about-content">
                <div class="about-text-content" data-aos="fade-left">
                    <h3 class="about-main-title">${aboutContent.mainTitle}</h3>
                    <p class="about-main-desc">${aboutContent.description}</p>
                    
                    <div class="about-features">
                        ${aboutContent.features.map((feature, index) => `
                            <div class="feature-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                                <div class="feature-icon">
                                    ${feature.icon}
                                </div>
                                <div class="feature-content">
                                    <h4 class="feature-title">${feature.title}</h4>
                                    <p class="feature-text">${feature.text}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="about-image" data-aos="fade-right">
                    <img src="${aboutContent.image.src}" 
                         alt="${aboutContent.image.alt}"
                         loading="lazy">
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderAbout);