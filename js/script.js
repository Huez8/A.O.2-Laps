document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // --- Logic Thay đổi thanh Navigation (Navbar) khi cuộn ---
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    });
    
    // --- Logic Xử lý cuộn mượt (Smooth Scroll) và Active Link ---
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
                    
                    // Đánh dấu link active
                    navLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Đóng Navbar trên Mobile sau khi click
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        // Cần đảm bảo thư viện Bootstrap đã được load để dùng new bootstrap.Collapse
                        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                            bsCollapse.hide();
                        }
                    }
                }
            }
        });
    });
    
    // --- Logic Theo dõi vị trí cuộn để đặt Active Link ---
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Thêm logic kiểm tra cho link Trang Chủ, do có thể có "index.html#home" hoặc chỉ "#home"
            const linkHref = link.getAttribute('href').split('#').pop(); 
            if (linkHref === current) {
                link.classList.add('active');
            }
        });
    });

    // --- KHỞI TẠO AOS (ĐỂ KHẮC PHỤC LỖI MOBILE DISPLAY) ---
    // Loại bỏ 'disable: mobile' để đảm bảo không xung đột với Chatbot trên điện thoại.
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,    
            easing: 'ease-out-cubic',
            once: true,      
            // Đảm bảo không có 'disable: "mobile"' ở đây.
        });
    }
});
