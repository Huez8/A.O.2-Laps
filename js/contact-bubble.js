// Trong file: js/contact-bubble.js

document.addEventListener('DOMContentLoaded', function() {
    const bubble = document.getElementById('cuteBubble');
    const contactBtn = document.getElementById('contactBtn');
    
    if (!bubble || !contactBtn) {
        return;
    }

    // ################ DANH SÁCH CÂU THOẠI (16 CÂU) ################
    const messages = [
        // Kêu gọi hành động (CTA) & Tư vấn chuyên nghiệp
        'Bạn đang tìm kiếm ý tưởng đột phá? Nhấp vào đây để trò chuyện ngay!',
        'Cần báo giá nhanh? Bấm vào đây, tụi mình phản hồi chỉ trong 30 phút!',
        'Đừng ngần ngại! Bạn có câu hỏi? Nhấn vào đây để kết nối với A.O.2 LABS.',
        'Sẵn sàng để dự án của bạn "cất cánh"? Bấm ngay để gặp team Đà Điểu!',
        
        // Hài hước & Xàm xí (Tăng tính tự nhiên)
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
    const DISPLAY_DURATION = 4000; // 4 giây hiển thị (giảm để chu kỳ lặp nhanh hơn)
    const REPEAT_CYCLE = 10000;    // Tổng chu kỳ 10 giây/lần

    let currentMessageIndex = -1; // Biến để theo dõi câu thoại cuối cùng

    // --- 1. HÀM CHỌN CÂU THOẠI NGẪU NHIÊN KHÔNG LẶP LẠI LIÊN TỤC ---
    function getRandomMessage() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * messages.length);
        } while (randomIndex === currentMessageIndex); // Đảm bảo câu mới khác câu cũ

        currentMessageIndex = randomIndex;
        return messages[randomIndex];
    }

    // --- 2. HÀM HIỂN THỊ BUBBLE VÀ TỰ ẨN ---
    function showBubble() {
        bubble.textContent = getRandomMessage(); // Lấy câu ngẫu nhiên mới
        
        // Kích hoạt animation CSS
        bubble.classList.add('show');
        
        // Tự động ẩn bubble sau DISPLAY_DURATION
        setTimeout(() => {
             bubble.classList.remove('show');
        }, DISPLAY_DURATION); 
    }

    // --- 3. THIẾT LẬP LẶP LẠI (10 GIÂY/LẦN) ---
    setInterval(showBubble, REPEAT_CYCLE); 

    // Hiển thị lần đầu khi load trang (sau 3 giây)
    setTimeout(showBubble, 3000); 

    // --- 4. HIỆU ỨNG KHI CLICK (Gây chú ý và chuyển trang) ---
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        // Hiển thị thông báo "Tuyệt vời!" và chuyển trang sau 1.5 giây
        bubble.classList.remove('show');
        // Vô hiệu hóa interval tạm thời khi người dùng tương tác
        clearInterval(window.bubbleInterval); 

        bubble.textContent = 'Tuyệt vời! Đang chuyển đến trang Liên Hệ...';
        void bubble.offsetWidth; 
        bubble.classList.add('show');
        
        // Đợi 1.5 giây rồi mới chuyển trang
        setTimeout(() => {
            window.location.href = contactBtn.href;
        }, 1500); 
    });

    // Lưu trữ interval để có thể xóa khi cần (ví dụ: khi người dùng click)
    window.bubbleInterval = setInterval(showBubble, REPEAT_CYCLE); 
});
