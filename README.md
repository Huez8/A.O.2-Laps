# A.O.2 LAPS: TÀI LIỆU KỸ THUẬT DỰ ÁN

## 1. MỤC TIÊU HƯỚNG TỚI ⭐

Tài liệu này xác định các thành phần và chức năng của Portfolio Web Tĩnh do nhóm **A.O.2 LAPS** phát triển.

### 1.1. Chức năng Xác nhận

* **Đầu ra:** Triển khai một giao diện người dùng dựa trên HTML5/CSS3.
* **Mục tiêu:** Chứng minh năng lực phát triển giao diện người dùng (Front-end) và tích hợp các nội dung kỹ thuật (Server, App Design).
* **Phương thức:** Cấu trúc đa trang (Multi-page structure).

---

## 2. KIẾN TRÚC VÀ CÔNG NGHỆ 💻

### 2.1. Công nghệ nền tảng

* **Markup:** HTML5.
* **Styling:** CSS3, Framework **Bootstrap 5.3+**.
* **Tương tác:** JavaScript (Vanilla JS).
* **Thư viện:** Font Awesome, Google Fonts.

### 2.2. Phân cấp Tài nguyên (Assets)

Các tài nguyên được tổ chức theo tiêu chuẩn như sau:

* **`/css`**: File định kiểu chính (`styles.css`).
* **`/js`**: Nơi lưu trữ các script tùy chỉnh (nếu có).
* **`/attached_assets`**: Tài nguyên hình ảnh, logo, và các yếu tố đồ họa.
* **`/project-details`**: Chứa các module trang chi tiết dự án (Ví dụ: `project-1.html`).

---

## 3. THÀNH PHẦN CHÍNH (MODULE) 🪨

Các module chính được đặt ở cấp thư mục gốc:

1.  **`index.html`**: Điểm khởi tạo hệ thống (Trang chủ).
2.  **`services.html`**: Module liệt kê các kỹ năng kỹ thuật/dịch vụ.
3.  **`projects.html`**: Module tổng hợp danh sách các dự án. Module này chứa logic **Lọc (Filter)** dựa trên class CSS.
4. **`projects.html`**: Module chưa các dự án mà các thành viên/nhóm đã hoàn thành trong quá trình học tập.
### 3.1. Các tài sản dự án (Ví dụ)

* **Dự án 1 (Kỹ thuật):** Triển khai FTP Server.
* **Dự án 2 (UI/UX):** Phát triển ứng dụng cơ bản (MIT App Inventor).

---

## 4. QUY TRÌNH VẬN HÀNH VÀ BẢO TRÌ 🛠️

### 4.1. Vận hành

Hệ thống hoạt động trên nền tảng trình duyệt web.
Yêu cầu: Mở file `index.html` hoặc `projects.html` trực tiếp.

### 4.2. Độ Tương thích

Hệ thống yêu cầu các đường dẫn tương đối (Relative Paths) phải được giữ nguyên.
Ví dụ: Các trang trong `/project-details` phải sử dụng đường dẫn `../css/styles.css` để truy cập CSS ở thư mục gốc.

---

## 5. THÔNG TIN PHÁT TRIỂN 🧑‍💻

* **Kiểm soát Phiên bản:** Git / GitHub.
* **Nhân sự:**
    * Võ Đức Huy (Leader)
    * Lê Thị Phương Linh
    * Lê Thị Thùy Hường
    * Bùi Đoàn Quốc Huy
    * Đoàn Phi Hồng

*Ngày tạo tài liệu: 22/11/2025.*
