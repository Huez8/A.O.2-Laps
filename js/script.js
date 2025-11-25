document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ===========================================
    // 1. XỬ LÝ THANH ĐIỀU HƯỚNG (NAVBAR) KHI CUỘN
    // ===========================================
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    });
    
    // ===========================================
    // 2. XỬ LÝ CUỘN MƯỢT (SMOOTH SCROLL) VÀ ĐÓNG MENU
    // ===========================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cập nhật trạng thái Active (chỉ khi click)
                    navLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Đóng Navbar trên Mobile sau khi click (Chỉ chạy nếu 'bootstrap' đã được load)
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                            bsCollapse.hide();
                        }
                    }
                }
            }
        });
    });
    
    // ===========================================
    // 3. XỬ LÝ ĐẶT ACTIVE LINK KHI CUỘN
    // ===========================================
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            // Định vị section, offset thêm 50px
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').split('#').pop(); 
            if (linkHref === current) {
                link.classList.add('active');
            }
        });
    });

    // ===========================================
    // 4. KHỞI TẠO AOS (ĐỂ KHẮC PHỤC LỖI MOBILE)
    // ===========================================
    // Đảm bảo thư viện AOS được khởi tạo, không có 'disable: "mobile"'
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,    
            easing: 'ease-out-cubic',
            once: true,      
            // Không thêm thuộc tính 'disable: "mobile"'
        });
    }
});
