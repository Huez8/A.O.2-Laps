// Utility function for throttling (giảm tần suất gọi hàm)
const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    if (!navbar) {
        console.error("Lỗi: Không tìm thấy phần tử #mainNavbar.");
        return;
    }

    // ===========================================
    // 1. XỬ LÝ CUỘN MƯỢT (SMOOTH SCROLL) VÀ ĐÓNG MENU
    // ===========================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Lấy chiều cao Navbar động
                    const navbarHeight = navbar.offsetHeight; 
                    // Tính toán vị trí cuộn: vị trí mục tiêu - chiều cao navbar
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cập nhật trạng thái Active khi click
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Đóng Navbar trên Mobile sau khi click (dành cho Bootstrap 5+)
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        // Kiểm tra sự tồn tại của Bootstrap JS
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
    // 2. XỬ LÝ SỰ KIỆN CUỘN (SCROLL) TỐI ƯU
    // Bao gồm: 
    // - Thay đổi style Navbar (Section 1 cũ)
    // - Đặt Active Link (ScrollSpy) (Section 3 cũ)
    // ===========================================
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const navbarHeight = navbar.offsetHeight;
        
        // ---- A. Xử lý thanh điều hướng (NAVBAR) khi cuộn ----
        if (scrollY > 100) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }

        // ---- B. Xử lý đặt Active Link (SCROLLSPY) ----
        let currentSectionId = '';
        
        sections.forEach(section => {
            // Định vị section, offset bằng chiều cao navbar + thêm 1 khoảng đệm (e.g., 50px)
            const sectionTop = section.offsetTop - navbarHeight - 50; 
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Lấy ID từ href (ví dụ: '#home' -> 'home')
            const linkHref = link.getAttribute('href').substring(1); 

            if (linkHref && linkHref === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    // Áp dụng throttle (giới hạn) cho sự kiện cuộn để tránh ảnh hưởng hiệu suất
    // Giới hạn chạy hàm handleScroll khoảng 10 lần mỗi giây (100ms)
    window.addEventListener('scroll', throttle(handleScroll, 100)); 

    // Gọi lần đầu để xử lý trạng thái ban đầu của navbar và active link
    handleScroll();

    // ===========================================
    // 3. KHỞI TẠO AOS (Animate On Scroll)
    // ===========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,    
            easing: 'ease-out-cubic',
            once: true,      
        });
    }
});
