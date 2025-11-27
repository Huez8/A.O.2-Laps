document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Kiểm tra xem các phần tử cần thiết có tồn tại không
    if (!navbar || navLinks.length === 0) {
        console.warn('Navbar element or navigation links not found. Script might not function correctly.');
        return;
    }

    /**
     * Hàm xử lý thay đổi giao diện Navbar khi cuộn trang
     * - Thêm/Xóa class 'navbar-solid'/'navbar-transparent' dựa trên vị trí cuộn.
     * @param {number} scrollY - Vị trí cuộn hiện tại của cửa sổ.
     */
    const handleNavbarOnScroll = () => {
        const isScrolled = window.scrollY > 100;
        navbar.classList.toggle('navbar-solid', isScrolled);
        navbar.classList.toggle('navbar-transparent', !isScrolled);
    };

    /**
     * Hàm cập nhật trạng thái Active của NavLink dựa trên vị trí cuộn trang
     */
    const updateNavLinkActiveState = () => {
        let currentSectionId = '';
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY;

        // Tìm section hiện tại
        sections.forEach(section => {
            // Định vị section: top của section trừ đi chiều cao navbar và thêm 50px offset
            const sectionTop = section.offsetTop - navbarHeight - 50;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Cập nhật class 'active' cho NavLink tương ứng
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').split('#').pop(); // Lấy ID từ href
            
            if (linkHref === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    // ===========================================
    // 1 & 3. XỬ LÝ THANH ĐIỀU HƯỚNG & CẬP NHẬT ACTIVE KHI CUỘN
    // ===========================================
    window.addEventListener('scroll', () => {
        handleNavbarOnScroll();
        updateNavLinkActiveState();
    });

    // Khởi chạy lần đầu để thiết lập trạng thái ban đầu
    handleNavbarOnScroll();
    updateNavLinkActiveState();

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
                    // Vị trí cuộn: top của section trừ đi chiều cao navbar
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cập nhật trạng thái Active sau khi click
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Đóng Navbar trên Mobile (Bootstrap)
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                         // Sử dụng check 'bootstrap' và 'bootstrap.Collapse'
                         if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                            // Tận dụng lớp Bootstrap.Collapse để ẩn menu
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                            bsCollapse.hide();
                        }
                    }
                }
            }
        });
    });

    // ===========================================
    // 4. KHỞI TẠO AOS (Animation On Scroll)
    // ===========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,      
            easing: 'ease-out-cubic',
            once: true,          
            // Đảm bảo không có 'disable: "mobile"'
        });
    }
});
