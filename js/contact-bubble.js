// Trong file: js/contact-bubble.js

document.addEventListener('DOMContentLoaded', function() {
    const bubble = document.getElementById('cuteBubble');
    const contactBtn = document.getElementById('contactBtn');
    
    // Thoát nếu các phần tử HTML cần thiết không được tìm thấy
    if (!bubble || !contactBtn) {
        return;
    }

    // ################ DANH SÁCH CÂU THOẠI (16 CÂU ĐA DẠNG) ################
    const messages = [
        // Kêu gọi hành động (CTA) & Tư vấn chuyên nghiệp
        'Bạn đang tìm kiếm ý tưởng đột phá? Nhấp vào đây để trò chuyện ngay!',
        'Cần báo giá nhanh? Bấm vào đây, tụi mình phản hồi chỉ trong 30 phút!',
        'Đừng ngần ngại! Bạn có câu hỏi? Nhấn vào đây để kết nối với A.O.2 LABS.',
        'Sẵn sàng để dự án của bạn "cất cánh"? Bấm ngay để gặp team Đà Điểu!',
        
        // Hài hước & Xàm xí (Tăng tính tự nhiên và thu hút)
        'Đà điểu đã sẵn sàng lắng nghe bạn! (Đừng lo, tụi mình không cắn đâu 😉)',
        'Ê ê, bạn ơi! Bấm vào đây nè, mình có chuyện muốn nói riêng với bạn!',
        'Alo, alo? Thấy cái nút tròn chưa? Bấm vào đi rồi nói chuyện tiếp!',
        'Hình như bạn đang tìm kiếm thứ gì đó? Nó nằm ngay dưới ngón tay bạn đó!',
        
        // Liên quan đến Design & Công nghệ
        'Thích giao diện trang web này không? Nhấp vào, tụi mình thiết kế cho bạn!',
        'Chúng ta nên nói về công nghệ. Bấm để bắt đầu cuộc phiêu lưu số!',
        'Tụi mình giỏi Design lắm! Bạn có muốn kiểm chứng không? (Bấm vào!)',
        'Cần một chút "phép thuật" cho thương hiệu? Bấm để khám phá A.O.2 LABS!',

        // Ngắn gọn & Thân thiện
        'Hello! Tụi mình ở đây để giúp bạn.',
        'Nhấp vào mình nè! Mình có quà tặng Free Ebook cho bạn!',
        'Thời tiết hôm nay đẹp nhỉ? Bấm vào để làm việc cùng nhau!',
        'Bấm vào đây để trở thành người bạn thân của Đà Điểu nhé! 🦢'
    ];

    // --- CẤU HÌNH THỜI GIAN ---
    const DISPLAY_DURATION = 4000; // 4 giây (Phải khớp với animation trong CSS)
    const REPEAT_CYCLE = 15000;    // Tổng chu kỳ lặp lại: 10 giây/lần

    let currentMessageIndex = -1; // Biến để theo dõi câu thoại cuối cùng

    // --- 1. HÀM CHỌN CÂU THOẠI NGẪU NHIÊN KHÔNG LẶP LẠI LIÊN TỤC ---
    function getRandomMessage() {
        let randomIndex;
        do {
            // Chọn số ngẫu nhiên từ 0 đến length-1
            randomIndex = Math.floor(Math.random() * messages.length);
        } while (randomIndex === currentMessageIndex); // Đảm bảo câu mới khác câu cũ

        currentMessageIndex = randomIndex;
        return messages[randomIndex];
    }

    // --- 2. HÀM HIỂN THỊ BUBBLE VÀ TỰ ẨN ---
    function showBubble() {
        // Lấy câu ngẫu nhiên mới và đặt nội dung
        bubble.textContent = getRandomMessage(); 
        
        // Kích hoạt animation CSS (thêm class 'show')
        bubble.classList.add('show');
        
        // Tự động ẩn bubble sau DISPLAY_DURATION
        setTimeout(() => {
             bubble.classList.remove('show');
        }, DISPLAY_DURATION); 
    }

    // --- 3. THIẾT LẬP LẶP LẠI (10 GIÂY/LẦN) ---
    // Lưu trữ interval để có thể xóa (clearInterval) khi người dùng tương tác
    window.bubbleInterval = setInterval(showBubble, REPEAT_CYCLE); 

    // Hiển thị lần đầu khi load trang (sau 3 giây)
    setTimeout(showBubble, 3000); 

    // --- 4. HIỆU ỨNG KHI CLICK (Dừng lặp và chuyển trang) ---
    contactBtn.addEventListener('click', function(e) {
        // Ngăn chặn chuyển trang ngay lập tức
        e.preventDefault(); 
        
        // Vô hiệu hóa interval để bubble text không đổi nữa
        clearInterval(window.bubbleInterval); 

        // Hiển thị thông báo chuyển trang
        bubble.classList.remove('show');
        bubble.textContent = 'Tuyệt vời! Đang chuyển đến trang Liên Hệ...';
        void bubble.offsetWidth; // Force reflow để animation reset
        bubble.classList.add('show');
        
        // Đợi 1.5 giây rồi mới chuyển trang
        setTimeout(() => {
            window.location.href = contactBtn.href;
        }, 1500); 
    });
});
