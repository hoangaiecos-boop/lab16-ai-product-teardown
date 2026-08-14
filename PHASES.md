# ElevenLabs · Hướng dẫn đầy đủ theo phase

> Phạm vi: ElevenLabs từ public beta tháng 1/2023 đến tháng 8/2026.  
> Output cuối: [`memo.md`](memo.md), [`slides.pdf`](slides.pdf) và [`slides.pptx`](slides.pptx).

## Phase 0 · Khởi động và phân vai — 10 phút

### Mục tiêu

Chốt một phạm vi đủ hẹp để lập luận sâu, chia research song song và tạo một luận điểm chung trước khi viết.

### Câu trả lời cần có

| Câu hỏi | Câu trả lời của nhóm |
|---|---|
| Sản phẩm là gì? | ElevenLabs: nền tảng AI audio gồm TTS, voice cloning, dubbing, speech-to-text, creative tools và voice agents. |
| Không phân tích gì? | Không teardown toàn bộ thị trường AI; không đánh giá chất lượng model thuần benchmark; không dự báo quá 12 tháng. |
| Luận điểm ban đầu | ElevenLabs bắt đầu bằng TTS cho creator, rồi đi lên stack thành workflow, marketplace và platform enterprise. |
| Mốc thời gian | 01/2023–08/2026; dự đoán 08/2026–08/2027. |

### Chia việc gợi ý

| Người | Việc | Nguồn ưu tiên |
|---|---|---|
| A | Timeline product 2023–2024 | ElevenLabs blog, changelog |
| B | Timeline product 2025–2026 | ElevenLabs blog, customer stories |
| C | User, JTBD và switching cost | Review, Reddit, Duke, TIME, AP |
| D | Tổng hợp, kiểm nguồn, viết prediction/AI log | `sources/README.md`, `memo.md` |

### Điều kiện qua phase

- [ ] Tất cả thống nhất phạm vi và luận điểm một câu.
- [ ] Mỗi người có owner/source rõ ràng.
- [ ] Có ít nhất một nguồn sơ cấp và một nguồn độc lập.

## Phase 1 · Dựng timeline và revert nguyên lý — 30 phút

### Mục tiêu

Không chỉ liệt kê feature. Với mỗi cột mốc, giải thích quyết định giải quyết vấn đề gì và rút ra nguyên lý dùng được ở sản phẩm khác.

### Tám mốc đã chọn

| # | Thời điểm | Quyết định | Revert nguyên lý |
|---|---|---|---|
| 1 | 01/2023 | Public beta TTS + cloning, rồi thêm safety friction sau misuse | Wow wedge trước, trust layer ngay sau |
| 2 | 08/2023 | Multilingual v2, ra khỏi beta | Mở rộng primitive theo mission |
| 3 | 10/2023 | AI Dubbing + Studio | Productize workflow, không chỉ model |
| 4 | 02/2024 | Voice Actor Payouts | Biến rủi ro IP thành marketplace |
| 5 | 11/2024 | Conversational AI + Workspaces | Từ artifact sang interaction |
| 6 | 02/2025 | Scribe speech-to-text | Sở hữu critical input loop |
| 7 | 09–10/2025 | Agents + testing + workflows | Vượt production chasm |
| 8 | 05–07/2026 | Dubbing v2 + Spotlight | Đóng outcome loop |

### Cách revert từng mốc

Áp dụng năm câu dưới đây, thay vì chỉ chép thông cáo báo chí:

1. Trước mốc này user/business bị kẹt ở đâu?
2. ElevenLabs thay đổi hành vi hay economics nào?
3. Cơ chế nào khiến thay đổi đó tạo giá trị?
4. Nguyên lý tổng quát là gì?
5. Khi nào nguyên lý không còn đúng?

### Ví dụ hoàn chỉnh

**Mốc:** Dubbing 10/2023.  
**Dữ kiện:** hệ thống dịch speech và giữ identity/intonation của speaker.  
**Context:** team phải ghép transcription, translation, TTS và chỉnh timing qua nhiều tool.  
**Nguyên lý:** *Productize workflow, không chỉ model.* Model tốt chỉ tạo value hoàn chỉnh khi sản phẩm giảm handoff và rework giữa các bước.  
**Điều kiện biên:** nguyên lý này đúng khi workflow lặp lại và output rõ; nó kém đúng khi creative judgment/human review mới là phần tốn công nhất.

### Điều kiện qua phase

- [ ] Có 6–8 mốc, không phải 6–8 lần release nhỏ.
- [ ] Mỗi mốc có link nguồn trong [`sources/README.md`](sources/README.md).
- [ ] Mỗi nguyên lý có cơ chế và điều kiện biên.
- [ ] Có 2–3 pattern lặp lại xuyên timeline.

**Output:** §1 trong [`memo.md`](memo.md#1--timeline-các-quyết-định-sản-phẩm-lớn).

## Phase 2 · Tệp user, JTBD và switching cost — 15 phút

### Mục tiêu

Hiểu vì sao product bắt đầu ở creator nhưng tăng trưởng ngày càng dựa vào enterprise agents, đồng thời không bỏ qua supply side là voice talent.

### Ba tệp cần phân biệt

| Tệp | Họ là ai? | JTBD |
|---|---|---|
| Early adopters | YouTuber, indie author, game dev, đội localization nhỏ | Khi không có studio/talent, tôi muốn tạo voiceover giống người trong vài phút để publish nhanh với ngân sách nhỏ. |
| Tệp hiện tại | Creative/marketing team; enterprise CX, product, ops; developers | Khi cần phục vụ hàng nghìn user đa channel/ngôn ngữ, tôi muốn deploy và kiểm soát voice workflow end-to-end để tăng resolution/conversion mà không tăng headcount tuyến tính. |
| Supply side | Voice actor/chủ sở hữu IP | Khi AI voice tăng nhu cầu, tôi muốn cấp phép replica của mình với terms và payout do mình kiểm soát để mở rộng thu nhập mà vẫn giữ quyền identity. |

### Four Forces

| Force | Câu hỏi để thảo luận | ElevenLabs |
|---|---|---|
| Push | Điều gì làm user rời giải pháp cũ? | Thu voice/dubbing/support truyền thống đắt, chậm và khó mở rộng ngôn ngữ. |
| Pull | Điều gì hấp dẫn ở giải pháp mới? | Voice quality, multilingual, instant pilot và stack end-to-end. |
| Anxiety | Điều gì làm họ lo khi chuyển? | Deepfake, PII, hallucination, mistranslation, brand/disclosure risk. |
| Habit | Cái gì giữ họ ở cách cũ? | DAW, talent, CRM, contact center, telephony, QA và contract đã có sẵn. |

### Kết luận cần nói được

Pilot dễ vì Push/Pull mạnh. Production khó vì Anxiety/Habit mạnh. Vì vậy, trust, integration, human handoff, observability và deployment control quan trọng hơn việc ElevenLabs chỉ ra thêm một giọng mới.

### Điều kiện qua phase

- [ ] Không mô tả user là “mọi người cần text-to-speech”.
- [ ] JTBD có bối cảnh, động lực và outcome.
- [ ] Có bằng chứng cho ít nhất một friction của creator và một friction của enterprise.
- [ ] Four Forces dẫn tới một kết luận strategy rõ.

**Output:** §2 trong [`memo.md`](memo.md#2--tệp-user-và-jobs-to-be-done).

## Phase 3 · Ba dự đoán — 20 phút

### Mục tiêu

Đưa ra phán đoán có thể sai và có cơ chế giải thích, thay vì những lời hứa chung chung như “ElevenLabs sẽ cải thiện AI”.

### Khuôn bắt buộc

> Trong **[thời hạn]**, ElevenLabs sẽ **[hành động cụ thể]** cho **[tệp/workflow]**, thể hiện qua **[evidence có thể quan sát]**.  
> Vì **[mốc/pattern timeline]** + **[JTBD/Four Force]**, nên **[cơ chế]**.  
> Dự đoán mạnh/yếu đi nếu **[leading indicator]** xuất hiện/không xuất hiện.

### Ba dự đoán của nhóm

| # | Dự đoán | Cơ chế từ Phase 1–2 | Leading indicator |
|---|---|---|---|
| 1 | Có ≥2 package ElevenAgents theo ngành, kèm managed reliability | Agents đã có testing/workflows/Spotlight; enterprise bị chặn bởi anxiety và integration | Pricing theo outcome, FDE, partnership CRM/contact-center |
| 2 | Rights marketplace mở thành identity pack đa phương tiện; payout >$40M | Marketplace giải consent/IP anxiety và Creative mở sang media đa modality | Unified rights dashboard, provenance API, estate/label deals |
| 3 | Có audio-native full-duplex agent model nhưng giữ custom LLM/STT | TTS + Scribe + Agents đã tạo loop; enterprise vẫn cần control/không lock-in | Streaming audio API, benchmark turn-taking, unified pricing |

### Cách phản biện dự đoán

Mỗi dự đoán cần một người đóng vai “bear case” và trả lời:

- Đối thủ hoặc market change nào khiến dự đoán thất bại?
- Có công bố nào đã chứng minh điều ngược lại chưa?
- Nếu dự đoán sai, signal nào sẽ xuất hiện sớm nhất?

### Điều kiện qua phase

- [ ] Mỗi dự đoán có thời hạn trước 08/2027.
- [ ] Không có dự đoán nào chỉ là “mở rộng AI/thêm tính năng”.
- [ ] Mỗi dự đoán dẫn đến ít nhất một timeline pattern và một user insight.
- [ ] Có signal làm nhóm đổi ý.

**Output:** §3 trong [`memo.md`](memo.md#3--ba-dự-đoán-cho-612-tháng-tới).

## Phase 4 · AI log và kiểm chứng — 15 phút

### Mục tiêu

Khai báo trung thực quá trình dùng AI. AI log được chấm ở ranh giới AI–nhóm và cách nhóm kiểm chứng, không chấm “dùng AI ít hay nhiều”.

### Cách điền

| Việc | AI làm | Nhóm phải làm | Kiểm chứng |
|---|---|---|---|
| Research | Tìm link, tóm tắt, nhóm mốc | Chọn mốc nào là product decision | Đọc nguồn gốc, đối chiếu nguồn độc lập |
| Revert principle | Đề xuất pattern | Chọn tên/cơ chế/điều kiện biên | Thử áp nguyên lý sang product khác |
| User/JTBD | Tổng hợp review và use case | Xác định segment và outcome | Phân biệt claim marketing với feedback user |
| Prediction | Brainstorm hypothesis | Chọn prediction và bear case | Ghi leading indicator rõ |
| Viết/slide | Draft và tổ chức nội dung | Chịu trách nhiệm lập luận cuối | So rubric và render file cuối |

### Điều kiện qua phase

- [ ] AI log có mọi công cụ/model đã dùng.
- [ ] Không ghi “AI viết toàn bộ” mà thiếu phần nhóm quyết định.
- [ ] Mọi claim quan trọng đều có nguồn hoặc nêu rõ là inference.
- [ ] Có 2–3 limitations của bài.

**Output:** §4 và references trong [`memo.md`](memo.md#4--ai-log).

## Phase 5 · Slide, rehearsal và nộp bài — 30 phút

### Cấu trúc deck 8 slide

1. Luận điểm: ElevenLabs đã đi lên stack thế nào.
2. Timeline tám quyết định.
3. Ba nguyên lý.
4. User đã phân tầng thế nào.
5. Four Forces: pilot vs production.
6. Ba dự đoán.
7. Deep dive dự đoán marketplace.
8. Kết luận + câu hỏi thảo luận.

### Chia vai trình bày

| Người | Slide | Nhiệm vụ |
|---|---|---|
| A | 1–2 | Đặt luận điểm, kể quỹ đạo timeline |
| B | 3–4 | Revert nguyên lý, giải thích user shift |
| C | 5–6 | Switching cost và ba prediction |
| D | 7–8 | Bear case, kết luận, điều phối thảo luận |

### Checklist nộp

- [ ] Điền tên nhóm/thành viên trong `memo.md` và slide 1.
- [ ] Mở link nguồn ngẫu nhiên tối thiểu 5 link.
- [ ] Đọc to mỗi prediction trong hai câu; nếu không rõ, viết lại.
- [ ] Mở [`slides.pdf`](slides.pdf) và kiểm tra 8 trang.
- [ ] Nộp `memo.md` và `slides.pdf`.

## Bản đồ file

| File | Dùng khi nào? |
|---|---|
| [`memo.md`](memo.md) | Bài nộp chính, đã điền nội dung ElevenLabs |
| [`slides.pdf`](slides.pdf) | Bản nộp/trình chiếu PDF |
| [`slides.pptx`](slides.pptx) | Chỉnh thiết kế hoặc thay tên nhóm |
| [`slides.md`](slides.md) | Nội dung/talk track từng slide |
| [`sources/README.md`](sources/README.md) | Kiểm nguồn và phân biệt claim/observation |
| [`CHECKLIST.md`](CHECKLIST.md) | Tự chấm trước khi nộp |

