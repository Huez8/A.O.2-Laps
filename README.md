# A.O.2-LABS: BÁO CÁO NGHIÊN CỨU & TRIỂN KHAI HỆ THỐNG WEB TĨNH

## 1. TÓM TẮT NGHIÊN CỨU (Abstract)

Nghiên cứu này là một minh chứng về sự **chuyển đổi kỹ năng** từ chuyên môn **Thiết kế Đồ họa** sang lĩnh vực **Phát triển Web Tĩnh**.

### 1.1. Bối cảnh & Công cụ Hỗ trợ
* **Mục tiêu Chính:** Xây dựng một hệ thống Website Tĩnh **Responsive (đa nền tảng)** có độ trung thực cao về mặt thẩm mỹ.
* **Vai trò của A.I:** Do hạn chế về nền tảng lập trình ban đầu, **Trí tuệ Nhân tạo (A.I)** đã đóng vai trò là công cụ hỗ trợ cốt lõi. A.I được sử dụng để chuyển đổi mã nguồn, tối ưu hóa kỹ thuật, và triển khai các tính năng tương tác (ví dụ: Contact Bubble).

### 1.2. Kết quả Đạt được
Dự án đã chứng minh thành công tính khả thi của việc kết hợp giữa **Thẩm mỹ Hình ảnh (Visual Aesthetics)** và **Chức năng Lập trình (Technical Functionality)** trong môi trường học thuật, với hệ thống được **triển khai qua Netlify** (chi tiết tại Mục 4.2).

---

## 2. MỤC TIÊU VÀ PHƯƠNG PHÁP LUẬN

### 2.1. Mục tiêu Nghiên cứu (Hypothesis) 🎯

Các mục tiêu chính của dự án được xác định rõ ràng:
* **Độ Trung Thực (Fidelity):** Xây dựng một giao diện người dùng (UI) đạt **Độ Trung Thực Hình ảnh cao** so với thiết kế đồ họa ban đầu.
* **Tự động hóa (CI/CD):** Thiết lập một quy trình **Triển khai Tự động** ổn định để quản lý hiệu quả các phiên bản phát hành (sử dụng **Netlify**).
* **Tương tác (UX/UI):** Tích hợp các yếu tố tương tác độc đáo (ví dụ: Contact Bubble với logic thời gian hiển thị tùy chỉnh).
* **Đánh giá Công cụ A.I:** Đo lường và **đánh giá hiệu suất** của công cụ A.I trong việc hỗ trợ chuyển đổi mã nguồn HTML/CSS/JS.

### 2.2. Phương pháp Luận & Quy trình Phát triển (Methodology) 🛠️

Quy trình phát triển được chia thành ba giai đoạn chính, sử dụng phương pháp luận kết hợp:

1.  **Giai đoạn Thiết kế (Design Phase):** Hoàn thành wireframe và mockup bằng công cụ thiết kế đồ họa.
2.  **Giai đoạn Phát triển (Development Phase):**
    * **Ngăn xếp Công nghệ:** Sử dụng HTML5, CSS3 (Bootstrap 5.3+), và JavaScript.
    * **Kỹ thuật Code:** Áp dụng phương pháp lập trình mô-đun hóa cho các thành phần UI.
    * **Hỗ trợ A.I:** Tận dụng A.I để giải quyết các thách thức về cú pháp (syntax), cấu trúc và hỗ trợ xây dựng các logic tương tác phức tạp (ví dụ: điều chỉnh thời gian hiển thị trong JS).
3.  **Giai đoạn Kiểm soát (Review Phase):**
    * **Công cụ:** Sử dụng **Git/GitHub** và **Netlify**.
    * **Quy trình:** Áp dụng **Branch Protection Rules** để thực hiện kiểm duyệt mã nguồn chính thức thông qua Pull Request (PR) trước khi Deployment.

---

## 3. CẤU TRÚC KỸ THUẬT (Technical Architecture)

### 3.1. Stack Công nghệ

| Thành phần | Công nghệ/Thư viện | Mục đích |
| :--- | :--- | :--- |
| Markup | HTML5 | Cấu trúc ngữ nghĩa (Semantic Structure). |
| Styling | CSS3 & **Bootstrap 5.3+** | Thiết kế linh hoạt và Responsive. |
| Interactivity | **Vanilla JavaScript** | Logic lọc dự án và **quản lý tương tác Bubble Chat/UI**. |
| Automation | **GitHub Actions / Netlify** | Triển khai liên tục (Continuous Deployment) và Hosting. |
| Support | **Trí tuệ Nhân tạo** | Hỗ trợ gỡ lỗi, tạo đoạn mã phức tạp, và **tối ưu hóa văn phong**. |

### 3.2. Phân cấp Tài nguyên (Resource Mapping)

| Thư mục | Nội dung | Chú thích |
| :--- | :--- | :--- |
| **`/css`** | Định kiểu và thư viện CSS. | File `styles.css` và `cute-contact-button.css` là file tùy chỉnh chính. |
| **`/js`** | Các script tương tác người dùng. | Bao gồm logic Lọc (Filter) và **logic Bubble Chat (contact-bubble.js)**. |
| **`/project-details`** | Các trang chi tiết dự án (Module). | Dùng đường dẫn tương đối để gọi tài nguyên. |
| **`index.html`** | Trang chủ. | Điểm truy cập chính của hệ thống. |

---

## 4. QUẢN LÝ DỰ ÁN & PHIÊN BẢN

### 4.1. Thông tin Phát triển

* **Repository:** `Huez8/A.O.2-Labs`
* **Trạng thái Triển khai:** **Đã hoàn thành Deployment (LIVE)**.
* **Nền tảng Triển khai:** **Netlify**.
* **Phiên bản Hiện tại:** `v1.0.0` (Xem mục Releases để biết lịch sử cập nhật).
* **Leader:** Võ Đức Huy.

### 4.2. Khả năng Tiếp cận (Accessibility)

Hệ thống được thiết kế để hoạt động hiệu quả trên mọi trình duyệt hiện đại. Trang web đang hoạt động LIVE và được phục vụ bởi Netlify tại: **https://ao2-labs.netlify.app/**

---

**Ngày hoàn thành Báo cáo:** 22/11/2025.
