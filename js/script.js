document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ===========================================
    // HÀM XỬ LÝ CHUYỂN ĐỔI NAVBAR (ĐƯỢC GỌI KHI SCROLL VÀ KHI LOAD)
    // ===========================================
    function handleNavbarScroll() {
        if (window.scrollY > 100) {
            // Khi cuộn xuống
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('navbar-solid');
        } else {
            // Khi ở top
            navbar.classList.remove('navbar-solid');
            navbar.classList.add('navbar-transparent');
        }
    }
    
    // ===========================================
    // 1. XỬ LÝ THANH ĐIỀU HƯỚNG (NAVBAR) KHI CUỘN
    // ===========================================
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ** KHẮC PHỤC LỖI TRẠNG THÁI KHỞI TẠO (INITIAL STATE) **
    // Gọi hàm một lần ngay sau khi load để đặt trạng thái ban đầu
    handleNavbarScroll();

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
                        // Tên biến 'bootstrap' có thể khác tùy thuộc vào cách bạn load thư viện
                        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                            // Tạo instance Bootstrap Collapse và gọi hide()
                            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                            bsCollapse.hide();
                        } else {
                            // Xử lý thủ công nếu Bootstrap không có sẵn (ví dụ: dùng jQuery hoặc thuần JS)
                            navbarCollapse.classList.remove('show');
                        }
                    }
                }
            }
        });
    });
    
    // ===========================================
    // 3. XỬ LÝ ĐẶT ACTIVE LINK KHI CUỘN
    // ===========================================
    // Logic này vẫn giữ nguyên và hoạt động tốt
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
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,   
            easing: 'ease-out-cubic',
            once: true,     
        });
    }

    // ===========================================
    // 5. CHUYỂN HƯỚNG KHI NHẤN VÀO THẺ THÀNH VIÊN (TEAM CARD)
    // ===========================================
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        // Thêm con trỏ để báo hiệu đây là phần tử có thể tương tác
        card.style.cursor = 'pointer'; 
        
        // Gắn sự kiện click
        card.addEventListener('click', function() {
            // Chuyển hướng tới trang chi tiết đội ngũ
            window.location.href = 'meet_the_team.html';
        });
    });
});
