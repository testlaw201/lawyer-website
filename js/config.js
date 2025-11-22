// 联系信息配置文件
// 可以快速切换测试模式和正式模式

const CONTACT_CONFIG = {
    // 当前模式：'test' 或 'production'
    mode: 'production',  // 改为 'production' 切换到正式模式

    // 测试联系信息（用于开发测试）
    test: {
        lawyerName: '测试律师',
        phone1: '(646)881-6912',
        phone2: '',
        email: 'qianhe.app@gmail.com',
        wechat: 'Z646886912',
        address: '测试地址',
        addressDetail: '测试详细地址',
        officeHours: '周一至周五 9:00 AM - 6:00 PM'
    },

    // 正式联系信息（律师真实信息）
    production: {
        lawyerName: '吕昕橦',
        phone1: '(212)812-8253',
        phone2: '(347)966-1978',
        email: 'catherine.lyu@lyulawpllc.com',
        wechat: 'lyulaw',
        address: '36-36 Prince St., #309A',
        addressDetail: 'Flushing, NY 11354',
        officeHours: '周一至周六 9:00 AM - 5:30 PM<br>周日 （仅限预约）'
    }
};

// 获取当前联系信息
function getContactInfo() {
    return CONTACT_CONFIG[CONTACT_CONFIG.mode];
}

// 切换模式
function switchMode(mode) {
    if (mode === 'test' || mode === 'production') {
        CONTACT_CONFIG.mode = mode;
        console.log(`✅ 已切换到 ${mode === 'test' ? '测试' : '正式'} 模式`);
        // 重新加载页面以应用新配置
        window.location.reload();
    } else {
        console.error('❌ 模式必须是 "test" 或 "production"');
    }
}

// 显示当前模式
function showCurrentMode() {
    const info = getContactInfo();
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`当前模式: ${CONTACT_CONFIG.mode === 'test' ? '🧪 测试模式' : '🏢 正式模式'}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('当前联系信息:');
    console.log(`律师: ${info.lawyerName}`);
    console.log(`电话: ${info.phone1}`);
    console.log(`邮箱: ${info.email}`);
    console.log(`微信: ${info.wechat}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('切换模式方法:');
    console.log('测试模式: switchMode("test")');
    console.log('正式模式: switchMode("production")');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

// 页面加载时显示当前模式
if (CONTACT_CONFIG.mode === 'test') {
    console.log('🧪 当前处于测试模式');
    console.log('切换到正式模式: switchMode("production")');
}

// 导出到全局作用域
window.getContactInfo = getContactInfo;
window.switchMode = switchMode;
window.showCurrentMode = showCurrentMode;
