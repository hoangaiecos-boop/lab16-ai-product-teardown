# Slide deck · ElevenLabs Product Teardown

> 8 slide · 6–7 phút · cập nhật 2026-08-14

## Slide 1 · Từ “giọng nói wow” đến hạ tầng tương tác

**ElevenLabs Product Teardown**
Nhóm: Chưa cập nhật · Thành viên: Chưa cập nhật

**Luận điểm:** ElevenLabs dùng TTS làm wedge, sau đó đi lên stack theo chuỗi **model → workflow → marketplace → enterprise platform**. Moat tương lai không chỉ là giọng hay, mà là trust và khả năng vận hành outcome ở quy mô lớn.

*Visual:* bốn khối nối tiếp Model → Workflow → Marketplace → Platform.

## Slide 2 · Timeline: tám quyết định, một quỹ đạo

| 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|
| **01:** TTS + cloning beta → safety friction | **02:** Voice payouts marketplace | **02:** Scribe sở hữu input loop | **05:** Dubbing v2 + Productions |
| **08:** Multilingual v2 | **11:** Conversational AI + Workspaces | **09–10:** Agents + Tests + Workflows | **07:** Spotlight đóng outcome loop |
| **10:** Dubbing + Studio | | | |

**Câu nói:** Nhìn riêng là feature; nhìn theo chuỗi là một chiến lược đi lên stack trước khi model bị commoditize.

Nguồn: ElevenLabs product blog 2023–2026; AP.

## Slide 3 · Ba nguyên lý có thể tái sử dụng

1. **Productize the workflow, not the model**
   Dubbing gom STT → dịch → clone → timing; Agents gom voice → tools → testing → monitoring.

2. **Turn a risk into a marketplace**
   Voice consent + control + payout tạo supply, trust và network effects; hơn **$22M payout** đến 5/2026.

3. **Cross the production chasm**
   Enterprise mua reliability và control, không mua demo. Tests, Workflows, handoff và Spotlight mới mở deployment lớn.

**Đánh đổi:** breadth tăng TAM/cross-sell nhưng reliability ở agent quan trọng hơn thêm một modality.

Nguồn: Voice Actor Payouts; Introducing Agents; Spotlight.

## Slide 4 · User đã phân tầng, không bị thay thế

### Early adopters

**Ai:** YouTuber, indie author, game dev, localization team nhỏ.
**JTBD:** “Khi không có studio/talent, tôi muốn tạo voiceover giống người trong vài phút để publish nhanh với ngân sách nhỏ.”
**Success:** quality, speed, cost.

### Tệp hiện tại

**Ai:** creative/marketing team và enterprise CX/product/ops.
**JTBD:** “Khi phải phục vụ hàng nghìn user đa channel/ngôn ngữ, tôi muốn deploy và kiểm soát voice workflow end-to-end để tăng resolution/conversion mà không tăng headcount tuyến tính.”
**Success:** task completion, latency, compliance, auditability.

### Supply side

Voice talent muốn cấp phép digital replica với terms và payout, không mất quyền identity.

## Slide 5 · Switching: pilot dễ, production khó

| Force | Cường độ | Ý nghĩa |
|---|---|---|
| **Push** | Mạnh | Recording/dubbing/support truyền thống đắt và chậm |
| **Pull** | Mạnh | Voice tự nhiên + multilingual + platform end-to-end |
| **Anxiety** | Rất mạnh | Deepfake, hallucination, PII, mistranslation, disclosure |
| **Habit** | Vừa–mạnh | DAW, talent, contact center, CRM, telephony đã cắm sâu |

**Insight:** demo quality mở cửa; trust + integration quyết định deployment. Sau khi deploy, evaluation sets, workflow, brand voice và conversation history tạo switching cost bền hơn model.

## Slide 6 · Ba dự đoán cho 8/2026–8/2027

1. **Vertical Agents:** ít nhất hai gói theo ngành, kèm workflow/evaluation/compliance và managed deployment; bán outcome thay vì phút gọi.
2. **Rights marketplace:** voice marketplace mở thành identity pack đa phương tiện; cumulative payout vượt **$40M**.
3. **Audio-native agent model:** preview/GA model audio-in/audio-out full-duplex, nhưng giữ custom LLM/STT để enterprise không bị lock-in.

**Logic chung:** timeline cho thấy ElevenLabs luôn đóng loop còn thiếu; user analysis cho thấy bottleneck tiếp theo là production trust và IP control.

## Slide 7 · Dự đoán đáng tranh luận nhất: rights marketplace

**Vì sao có thể đúng**

- Payout tăng từ $11M lên $22M trong sáu tháng.
- Creative đang gộp voice, music, image/video và managed Productions.
- Brand/talent cần identity nhất quán đa ngôn ngữ; creator cần consent và revenue share.

**Tín hiệu sớm:** unified rights dashboard, Music Marketplace mở rộng, provenance API, deal với estate/label, payout đạt ~$30M cuối 2026.

**Điều khiến nhóm đổi ý:** litigation khiến catalog co lại; payout growth chậm; buyer tiếp tục thích stock assets hơn licensed identity.

## Slide 8 · Kết luận và câu hỏi thảo luận

**Pattern mang đi:** AI model tạo wedge; workflow tạo retention; trust/data loop tạo moat.

**Kết luận:** ElevenLabs thắng vòng đầu bằng “nghe như người”. Vòng sau sẽ được quyết định bởi “hoạt động đáng tin như một hệ thống”.

**Câu hỏi:** Nếu model voice bị commoditize, ElevenLabs nên ưu tiên làm contact-center platform, creative suite hay neutral audio infrastructure—và lựa chọn nào giữ được lợi thế mạnh nhất?

Nguồn đầy đủ và AI log: `memo.md`.

