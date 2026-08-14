# Lab 16 · AI Product Teardown

**Case study đã chọn:** [ElevenLabs](https://elevenlabs.io/) · Bản phân tích cập nhật đến 2026-08-14 nằm trong [`memo.md`](memo.md).

> **120 phút · Trung cấp · Làm theo nhóm**

Trong lab này, nhóm chọn một sản phẩm có AI, dựng lại chuỗi quyết định sản phẩm, revert từng quyết định về nguyên lý, phân tích tệp user và JTBD, rồi đưa ra ba dự đoán cho 6–12 tháng tới.

Đây không phải bài kể lịch sử sản phẩm. Mục tiêu là luyện **product sense**: nhận ra pattern từ quá khứ và dùng pattern đó để đưa ra phán đoán có căn cứ.

## Sau 120 phút, nhóm cần nộp

- `memo.md`: memo teardown 3–5 trang, có tên nhóm và thành viên.
- `slides.pdf`: slide dùng để thuyết trình.

Repo đã có sẵn:

- [`memo.md`](memo.md): template bài nộp chính.
- [`slides.md`](slides.md): storyboard để làm slide và xuất PDF.
- [`sources/README.md`](sources/README.md): cách lưu và kiểm chứng nguồn.
- [`CHECKLIST.md`](CHECKLIST.md): rubric 100 điểm và checklist trước khi nộp.

## Bản đồ lab

| Thời gian | Hình thức | Việc cần hoàn thành | Output |
|---|---|---|---|
| 0:00–0:10 | Cả nhóm | Chọn sản phẩm, chốt phạm vi, chia nguồn | Tên sản phẩm + danh sách nguồn |
| 0:10–0:40 | Song song rồi hội ý | Dựng timeline 6–8 quyết định và revert nguyên lý | §1 trong `memo.md` |
| 0:40–0:55 | Cả nhóm | Early adopters, user hiện tại, JTBD, 4 forces | §2 trong `memo.md` |
| 0:55–1:15 | Cá nhân đề xuất, nhóm phản biện | Viết ba dự đoán 6–12 tháng | §3 trong `memo.md` |
| 1:15–1:30 | Một người biên tập, cả nhóm kiểm | Hoàn thiện memo và AI log | §4 + memo hoàn chỉnh |
| 1:30–2:00 | Chia vai | Làm slide, nộp, thuyết trình, thảo luận | `slides.pdf` |

## Tiêu chí chọn sản phẩm

Chọn một sản phẩm đáp ứng đủ ba điều kiện:

1. **AI là phần quan trọng của trải nghiệm**, không chỉ là một nhãn marketing.
2. **Có lịch sử quyết định đủ dày** để tìm được 6–8 cột mốc có nguồn kiểm chứng.
3. **Có user và use case quan sát được** qua review, cộng đồng, case study hoặc phỏng vấn.

Nếu sau 10 phút vẫn không tìm được ít nhất ba nguồn độc lập, đổi sản phẩm hoặc thu hẹp phạm vi.

## Sáu bước thực hiện

### 1. Chọn sản phẩm và khai phá nguồn — 10 phút

**Mục tiêu:** chốt một đối tượng có đủ bằng chứng để teardown.

**Việc cần làm:**

- Viết một câu mô tả sản phẩm và phạm vi phân tích.
- Chia người tìm changelog/blog chính thức, launch page/Product Hunt, review/community, podcast/phỏng vấn founder.
- Ghi nguồn ngay vào `sources/README.md`; không để cuối giờ truy lại link.

**Kết quả mong đợi:** có sản phẩm, phạm vi, bốn nhóm nguồn và owner cho từng nhóm.

**Dấu hiệu đi sai:** chọn sản phẩm vì nổi tiếng nhưng không tìm thấy chuỗi quyết định; dùng toàn nguồn do công ty tự công bố; coi mọi lần sửa UI là một cột mốc.

### 2. Dựng timeline và revert nguyên lý — 30 phút

**Mục tiêu:** chuyển dữ kiện thành pattern có thể tái sử dụng.

Với mỗi cột mốc, trả lời:

1. Sản phẩm đã thay đổi điều gì và khi nào?
2. Trước quyết định đó, user hoặc business gặp vấn đề gì?
3. Quyết định này thay đổi hành vi, giá trị hoặc economics nào?
4. Nguyên lý tổng quát phía sau là gì?
5. Nguyên lý đó đúng trong điều kiện nào, và có thể sai khi nào?

Một cột mốc tốt là **quyết định sản phẩm**, không chỉ là sự kiện. Ví dụ: “chuyển từ công cụ đơn lẻ sang workflow cộng tác” mạnh hơn “ra mắt phiên bản 2.0”.

**Kết quả mong đợi:** 6–8 cột mốc, mỗi mốc có thời điểm, cập nhật, context, nguyên lý và link nguồn.

### 3. Phân tích tệp user và JTBD — 15 phút

**Mục tiêu:** hiểu sản phẩm đã đi từ wedge ban đầu sang thị trường hiện tại như thế nào.

Phân biệt ít nhất hai tệp:

- **Early adopters:** ai chịu đựng sản phẩm chưa hoàn thiện để nhận giá trị sớm?
- **Tệp hiện tại:** ai đang mua, dùng hoặc ảnh hưởng tới quyết định mua bây giờ?

Viết JTBD theo khuôn:

> Khi [bối cảnh], tôi muốn [động lực/hành động], để [kết quả mong muốn].

Sau đó phân tích switching cost theo bốn lực:

- **Push:** điều gì khiến user chán giải pháp hiện tại?
- **Pull:** điều gì hấp dẫn ở sản phẩm mới?
- **Anxiety:** điều gì khiến user lo ngại khi chuyển?
- **Habit:** thói quen và chi phí nào giữ user ở cách cũ?

**Kết quả mong đợi:** hai tệp đủ cụ thể, JTBD riêng cho từng tệp, bằng chứng và 4 forces.

### 4. Đưa ra ba dự đoán — 20 phút

**Mục tiêu:** biến pattern lịch sử và hiểu biết user thành phán đoán có thể kiểm chứng.

Mỗi dự đoán cần:

- **Dự đoán cụ thể:** trong 6–12 tháng, sản phẩm sẽ làm gì, cho ai, ở phần nào của workflow.
- **Lập luận:** dẫn ngược tới ít nhất một pattern trong timeline và một insight từ user/JTBD.
- **Tín hiệu kiểm chứng:** dấu hiệu sớm nào sẽ làm dự đoán mạnh lên hoặc yếu đi.

Tránh các câu không thể sai như “sản phẩm sẽ tiếp tục cải thiện AI” hoặc “sẽ mở rộng thêm tính năng”.

### 5. Hoàn thiện memo và AI log — 15 phút

**Mục tiêu:** tạo một lập luận liền mạch, minh bạch ranh giới giữa AI và phán đoán của nhóm.

AI log không chấm việc dùng AI nhiều hay ít. Phần này chấm:

- Nhóm khai báo trung thực AI đã hỗ trợ việc gì.
- Phần nào là phán đoán và lựa chọn của con người.
- Nhóm đã kiểm chứng output của AI bằng nguồn hoặc phương pháp nào.

### 6. Làm slide, nộp và thuyết trình — 30 phút

**Mục tiêu:** kể lại logic, không đọc lại toàn bộ memo.

Dùng [`slides.md`](slides.md) làm storyboard 6–8 slide. Ưu tiên một biểu đồ timeline, một slide user/JTBD và một slide cho ba dự đoán. Xuất file cuối thành `slides.pdf`.

## Ba câu tự kiểm trước khi bắt đầu

1. **Teardown thuần khác teardown có revert thế nào?** Teardown thuần thu thập “đã xảy ra gì”; revert rút ra “nguyên lý nào đã dẫn tới quyết định, đúng trong điều kiện nào”, nhờ đó biến input thành pattern tái sử dụng.
2. **Vì sao dự đoán phải dẫn về timeline và user?** Vì một dự đoán chỉ có giá trị khi có cơ chế giải thích: lịch sử cho biết quỹ đạo và năng lực của sản phẩm; user/JTBD cho biết lực kéo, rào cản và nơi giá trị còn thiếu.
3. **AI log chấm gì?** Chấm tính minh bạch, ranh giới AI–con người và chất lượng kiểm chứng; không chấm số lượng công cụ hay mức độ dùng AI.

## Cách bắt đầu

1. Mở `memo.md`, điền tên nhóm, thành viên, sản phẩm và phạm vi.
2. Chia nguồn theo bốn nhóm trong `sources/README.md`.
3. Điền memo ngay trong lúc research; không đợi tới phút 75 mới ghép bài.
4. Sau mỗi phần, mở `CHECKLIST.md` và tự chấm nhanh.
