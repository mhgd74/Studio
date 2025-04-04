// المساعد الذكي
class SmartAssistant {
    constructor() {
        this.assistant = document.querySelector('.smart-assistant');
        this.openBtn = document.getElementById('openAssistant');
        this.closeBtn = document.getElementById('closeAssistant');
        this.messagesContainer = document.getElementById('assistantMessages');
        this.input = document.getElementById('assistantInput');
        this.sendBtn = document.getElementById('sendMessage');
        
        this.isOpen = false;
        this.messageHistory = [];
        
        this.initializeEventListeners();
        this.loadMessageHistory();
        this.welcomeMessage();
    }
    
    initializeEventListeners() {
        // فتح/إغلاق المساعد
        this.openBtn.addEventListener('click', () => {
            if (this.isOpen) {
                this.toggleAssistant(false);
            } else {
                this.toggleAssistant(true);
            }
        });
        
        // إغلاق المساعد
        this.closeBtn.addEventListener('click', () => this.toggleAssistant(false));
        
        // إرسال الرسالة
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        
        // إرسال بالضغط على Enter
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // حفظ المحادثة عند إغلاق النافذة
        window.addEventListener('beforeunload', () => this.saveMessageHistory());
        
        // تحريك المساعد
        this.makeDraggable();
    }
    
    toggleAssistant(show) {
        if (show) {
            this.assistant.classList.add('show');
            this.input.focus();
            this.isOpen = true;
            this.scrollToBottom();
        } else {
            this.assistant.classList.remove('show');
            this.isOpen = false;
        }
    }
    
    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;
        
        // إضافة رسالة المستخدم
        this.addMessage(message, 'user');
        this.input.value = '';
        
        // معالجة الرسالة والرد
        this.processMessage(message);
    }
    
    addMessage(content, type) {
        const bubble = document.createElement('div');
        bubble.className = `message-bubble ${type}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        const time = document.createElement('div');
        time.className = 'message-time';
        time.textContent = new Date().toLocaleTimeString('ar-EG', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        bubble.appendChild(messageContent);
        bubble.appendChild(time);
        
        this.messagesContainer.appendChild(bubble);
        this.scrollToBottom();
        
        // حفظ الرسالة في السجل
        this.messageHistory.push({
            content,
            type,
            timestamp: new Date().toISOString()
        });
    }
    
    processMessage(message) {
        // تأخير بسيط لمحاكاة المعالجة
        setTimeout(() => {
            let response;
            
            // قائمة بسيطة من الردود
            const keywords = {
                'مرحبا': 'مرحباً بك! كيف يمكنني مساعدتك؟',
                'شكرا': 'العفو! هل هناك شيء آخر تحتاج إليه؟',
                'من انت': 'أنا المساعد الذكي، هنا لمساعدتك في أي استفسار!',
                'وداعا': 'مع السلامة! أتمنى أن أكون قد ساعدتك.'
            };
            
            // البحث عن كلمات مفتاحية في الرسالة
            response = 'عذراً، لم أفهم رسالتك. هل يمكنك إعادة صياغتها بطريقة أخرى؟';
            for (let key in keywords) {
                if (message.toLowerCase().includes(key)) {
                    response = keywords[key];
                    break;
                }
            }
            
            this.addMessage(response, 'assistant');
        }, 500);
    }
    
    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    saveMessageHistory() {
        localStorage.setItem('assistantMessages', JSON.stringify(this.messageHistory));
    }
    
    loadMessageHistory() {
        const savedMessages = localStorage.getItem('assistantMessages');
        if (savedMessages) {
            this.messageHistory = JSON.parse(savedMessages);
            this.messageHistory.forEach(msg => this.addMessage(msg.content, msg.type));
        }
    }
    
    welcomeMessage() {
        if (this.messageHistory.length === 0) {
            this.addMessage('مرحباً! كيف يمكنني مساعدتك اليوم؟', 'assistant');
        }
    }
    
    makeDraggable() {
        const header = this.assistant.querySelector('.assistant-header');
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        header.addEventListener('mousedown', (e) => {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            
            if (e.target === header) {
                isDragging = true;
            }
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                xOffset = currentX;
                yOffset = currentY;
                
                this.assistant.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
}

// تهيئة المساعد عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    window.smartAssistant = new SmartAssistant();
});
