// Trong file: js/contact-bubble.js (Xử lý hiệu ứng nút liên hệ)

document.addEventListener('DOMContentLoaded', function() {
    const bubble = document.getElementById('cuteBubble');
    const contactBtn = document.getElementById('contactBtn');
    
    if (!bubble || !contactBtn) {
        return;
    }

    // --- 1. HÀM HIỂN THỊ BUBBLE VÀ TỰ ẨN ---
    function showBubble() {
        // Đảm bảo nội dung là câu hài hước ban đầu
        bubble.textContent = 'Ê ê, bạn ơi! Bấm vào đây nè 😉';
        
        // Kích hoạt animation CSS
        bubble.classList.add('show');
        
        // Tự động ẩn bubble sau 5 giây 
        setTimeout(() => {
             bubble.classList.remove('show');
        }, 5000); 
    }

    // --- 2. LẶP LẠI SAU MỖI 15 GIÂY ---
    // Hiển thị cứ mỗi 15 giây
    setInterval(showBubble, 15000); 

    // Hiển thị ngay lần đầu khi load trang (sau 3 giây)
    setTimeout(showBubble, 3000); 

    // --- 3. HIỆU ỨNG CÚC CU KHI CLICK ---
    contactBtn.addEventListener('click', function(e) {
        // Ngăn chặn chuyển trang ngay lập tức
        e.preventDefault(); 
        
        // Hiển thị "Cúc Cu!" và chuyển trang sau 1.5 giây
        bubble.classList.remove('show');
        bubble.textContent = 'Cúc Cu! Đang chuyển đến trang Liên Hệ...';
        void bubble.offsetWidth; // Force reflow
        bubble.classList.add('show');
        
        // Đợi 1.5 giây rồi mới chuyển trang
        setTimeout(() => {
            window.location.href = contactBtn.href;
        }, 1500); 
    });
});
