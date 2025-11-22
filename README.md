# A.O.2-LABS: BÁO CÁO NGHIÊN CỨU & TRIỂN KHAI HỆ THỐNG WEB TĨNH

## 1. TÓM TẮT NGHIÊN CỨU (Abstract)

Dự án này trình bày kết quả của việc chuyển đổi chuyên môn **Thiết kế Đồ họa** sang lĩnh vực **Phát triển Web Server** thông qua việc xây dựng một hệ thống Website Tĩnh **Responsive (đa nền tảng)**. Do hạn chế về nền tảng lập trình ban đầu, **Trí tuệ Nhân tạo (A.I)** đã được áp dụng như một công cụ hỗ trợ chính trong quá trình chuyển đổi mã nguồn và tối ưu hóa kỹ thuật. Mục tiêu là chứng minh tính khả thi của việc tích hợp **Thẩm mỹ Hình ảnh (Visual Aesthetics)** và **Chức năng Lập trình (Technical Functionality)** trong môi trường học thuật.

---

## 2. MỤC TIÊU VÀ PHƯƠNG PHÁP LUẬN

### 2.1. Mục tiêu Dự án (Hypothesis)

* Xây dựng một giao diện người dùng (UI) có **Độ Trung Thực Hình ảnh cao** (High Fidelity) so với thiết kế ban đầu.
* Thiết lập một quy trình **Triển khai Tự động (CI/CD)** ổn định để quản lý các phiên bản phát hành.
* **Đánh giá hiệu suất** của việc sử dụng công cụ A.I trong việc hỗ trợ chuyển đổi mã nguồn HTML/CSS/JS.

### 2.2. Phương pháp Luận (Methodology)

1.  **Giai đoạn Thiết kế (Design Phase):** Hoàn thành wireframe và mockup bằng công cụ thiết kế đồ họa.
2.  **Giai đoạn Phát triển (Development Phase):** Sử dụng HTML5, CSS3 (Bootstrap 5.3+), và JavaScript.
    * **Kỹ thuật Code:** Áp dụng phương pháp lập trình mô-đun hóa cho các thành phần UI.
    * **Hỗ trợ Tích hợp:** Sử dụng A.I để giải quyết các thách thức cú pháp (syntax) và cấu trúc.
3.  **Giai đoạn Kiểm soát:** Sử dụng **Git/GitHub** và **Branch Protection Rules** để thực hiện kiểm duyệt mã nguồn thông qua Pull Request (PR).

---

## 3. CẤU TRÚC KỸ THUẬT (Technical Architecture)

### 3.1. Stack Công nghệ

| Thành phần | Công nghệ/Thư viện | Mục đích |
| :--- | :--- | :--- |
| Markup | HTML5 | Cấu trúc ngữ nghĩa (Semantic Structure). |
| Styling | CSS3 & **Bootstrap 5.3+** | Thiết kế linh hoạt và Responsive. |
| Interactivity | **Vanilla JavaScript** | Logic lọc dự án và tương tác UI cơ bản. |
| Automation | **GitHub Actions / Netlify** | Triển khai liên tục (Continuous Deployment). |
| Support | **Trí tuệ Nhân tạo** | Hỗ trợ gỡ lỗi và tạo đoạn mã phức tạp. |

### 3.2. Phân cấp Tài nguyên (Resource Mapping)

| Thư mục | Nội dung | Chú thích |
| :--- | :--- | :--- |
| **`/css`** | Định kiểu và thư viện CSS. | File `styles.css` là file tùy chỉnh chính. |
| **`/js`** | Các script tương tác người dùng. | Logic cho các tính năng như Lọc (Filter). |
| **`/project-details`** | Các trang chi tiết dự án (Module). | Dùng đường dẫn tương đối để gọi tài nguyên. |
| **`index.html`** | Trang chủ. | Điểm truy cập chính của hệ thống. |

---

## 4. QUẢN LÝ DỰ ÁN & PHIÊN BẢN

### 4.1. Thông tin Phát triển

* **Repository:** `Huez8/A.O.2-Labs`
* **Trạng thái Triển khai:** **Đã hoàn thành Deployment (LIVE)**.
* **Phiên bản Hiện tại:** `v1.0.0` (Xem mục Releases để biết lịch sử cập nhật).
* **Leader:** Võ Đức Huy.

### 4.2. Khả năng Tiếp cận (Accessibility)

Hệ thống được thiết kế để hoạt động hiệu quả trên mọi trình duyệt hiện đại. Trang web đang hoạt động LIVE tại: **https://ao2-labs.netlify.app/**

---

**Ngày hoàn thành Báo cáo:** 22/11/2025.
