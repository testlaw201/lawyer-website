// 国际化翻译配置
const translations = {
    zh: {
        header: {
            firmName: '吕昕橦律师事务所'
        },
        nav: {
            home: '主页',
            services: '业务领域',
            appointment: '预约律师',
            contact: '联系方式'
        },
        home: {
            title: '专业法律服务 · 维护您的合法权益',
            subtitle: '吕昕橦律师事务所拥有资深华人律师团队，专注于为华人社区提供全方位法律服务。我们深谙中美法律体系，精通中英双语，为您提供最贴心、最专业的法律解决方案。',
            description: '我们的服务领域涵盖民事诉讼、刑事辩护、移民法律、商业纠纷等多个方面。无论您面临何种法律问题，我们都将竭诚为您服务。',
            consultation: '免费咨询'
        },
        services: {
            title: '业务领域',
            civil: '民事诉讼',
            immigration: '移民法律',
            familylaw: '婚姻家事',
            realproperty: '房地产法律',
            personalinjury: '人身伤害',
            criminal: '刑事辩护',
            business: '商业法律',
            ip: '知识产权'
        },
        appointment: {
            title: '预约律师咨询',
            heading: '免费案件评估',
            description: '请填写以下信息，我们的律师团队将在24小时内与您联系，为您提供免费的案件初步评估和法律咨询建议。',
            name: '姓名',
            phone: '联系电话',
            email: '电子邮箱',
            caseType: '案件类型',
            selectCase: '请选择案件类型',
            message: '案件简述',
            messagePlaceholder: '请简要描述您的法律问题或案件情况...',
            submit: '提交预约申请',
            other: '其他'
        },
        footer: {
            title: '联系我们',
            availability: '24/7',
            subtitle: '如果您有任何法律需求，请随时与我们联系',
            firmName: '吕昕橦律师事务所',
            phone: '电话',
            address: '地址',
            email: '邮箱',
            wechat: '微信',
            officeHours: '办公时间',
            officeHoursContent: '周一至周六 9:00 AM - 5:30 PM<br>周日（仅限预约）'
        }
    },
    en: {
        header: {
            firmName: 'The Law Office of X.Lyu,PLLC'
        },
        nav: {
            home: 'Home',
            services: 'Services',
            appointment: 'Appointment',
            contact: 'Contact'
        },
        home: {
            title: 'Professional Legal Services · Protecting Your Rights',
            subtitle: 'The Law Office of X.Lyu,PLLC has an experienced team of Chinese-speaking attorneys dedicated to providing comprehensive legal services to the Chinese community. We understand both Chinese and American legal systems, are fluent in both Chinese and English, and provide the most caring and professional legal solutions.',
            description: 'Our practice areas cover civil litigation, criminal defense, immigration law, business disputes, and more. Whatever legal issues you face, we are committed to serving you.',
            consultation: 'Free Consultation'
        },
        services: {
            title: 'Practice Areas',
            civil: 'civil litigation',
            immigration: 'Immigration Law',
            familylaw: 'Family Law',
            realproperty: 'Real Estate Law',
            personalinjury: 'Personal Injury',
            criminal: 'Criminal Defense',
            business: 'Business Law',
            ip: 'Intellectual Property'
        },
        appointment: {
            title: 'Schedule Consultation',
            heading: 'Free Case Evaluation',
            description: 'Please fill out the information below, and our legal team will contact you within 24 hours to provide a free preliminary case assessment and legal consultation.',
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            caseType: 'Case Type',
            selectCase: 'Please select case type',
            message: 'Case Description',
            messagePlaceholder: 'Please briefly describe your legal issue or case...',
            submit: 'Submit Appointment',
            other: 'Other'
        },
        footer: {
            title: 'Contact Us',
            availability: '24/7',
            subtitle: 'If you have any legal needs, please feel free to contact us',
            firmName: 'The Law Office of X.Lyu,PLLC',
            phone: 'Phone',
            address: 'Address',
            email: 'Email',
            wechat: 'WeChat',
            officeHours: 'Office Hours',
            officeHoursContent: 'Monday - Saturday: 9:00 AM - 5:30 PM<br>Sunday: By Appointment Only'
        }
    }
};

// 当前语言（默认中文）
let currentLang = localStorage.getItem('language') || 'zh';

// 获取翻译文本
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

// 切换语言
function switchLanguage(lang) {
    if (lang && (lang === 'zh' || lang === 'en')) {
        currentLang = lang;
        localStorage.setItem('language', currentLang);
        updatePageLanguage();
    }
}

// 更新页面语言
function updatePageLanguage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // 更新HTML内容（支持<br>等标签）
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        element.innerHTML = t(key);
    });

    // 更新placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    // 更新语言选择器
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // 触发自定义事件，让其他模块知道语言已切换
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();
});

// 导出到全局
window.t = t;
window.switchLanguage = switchLanguage;
window.currentLang = currentLang;
