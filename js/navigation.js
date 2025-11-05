// 导航辅助脚本
// 处理页面间导航和语言保持

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 高亮当前页面的导航项
    highlightCurrentPage();
});

// 高亮当前页面对应的导航菜单项
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'about.html';
    const navLinks = document.querySelectorAll('.nav-menu a[href]');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'about.html')) {
            link.style.color = '#8B2635';
            link.style.fontWeight = 'bold';
        }
    });
}
