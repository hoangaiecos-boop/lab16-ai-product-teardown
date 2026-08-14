# AI Product Teardown · ElevenLabs

**Nhóm:** Chưa cập nhật
**Thành viên:** Chưa cập nhật
**Ngày:** 2026-08-14
**Phạm vi phân tích:** ElevenLabs toàn cầu, từ public beta tháng 1/2023 đến tháng 8/2026
**Luận điểm chính:** ElevenLabs dùng chất lượng TTS như một wedge để thu hút creator, rồi tuần tự đóng gói model thành workflow, marketplace và cuối cùng là hạ tầng agent cho enterprise; 6–12 tháng tới, lợi thế của công ty sẽ dịch từ “giọng hay nhất” sang khả năng vận hành hội thoại và IP âm thanh có kiểm soát ở quy mô lớn.

## Executive summary

ElevenLabs ban đầu thắng bằng một demo rất dễ cảm nhận: nhập text và nghe một giọng nói có nhịp điệu, cảm xúc gần người thật. Nhưng chuỗi quyết định sau đó cho thấy công ty không định dừng ở API text-to-speech. Multilingual mở rộng TAM; Dubbing và Studio gom nhiều model thành một công việc hoàn chỉnh; Voice Library biến consent và bản quyền giọng nói thành supply-side marketplace; Conversational AI rồi ElevenAgents đưa công ty vào workflow customer support, sales và gaming có tần suất cao hơn nhiều so với tạo voiceover.

Đến tháng 5/2026, ElevenLabs công bố vượt $500M ARR, với tăng trưởng được thúc đẩy bởi enterprise voice agents. Vì vậy, câu hỏi chiến lược không còn là “AI có nói giống người không?” mà là “doanh nghiệp có tin nó để xử lý hàng triệu tương tác, và creator có tin nền tảng để giao IP giọng nói/âm nhạc không?”. Ba dự đoán của memo tập trung vào hai trust loop này.

## §1 · Timeline các quyết định sản phẩm lớn

| # | Thời điểm | Quyết định/cập nhật | Context & vấn đề trước đó | Nguyên lý được revert | Khi nào nguyên lý đúng/sai? | Nguồn |
|---|---|---|---|---|---|---|
| 1 | 01/2023 | Mở public beta với browser TTS và voice cloning; sau các ca lạm dụng, tăng friction bằng payment identity, truy vết generation và safety controls | TTS cũ nghe máy móc; creator cần voiceover nhanh. Chất lượng clone cao đồng thời tạo deepfake risk ngay khi launch | **Wow wedge trước, trust layer ngay sau:** hạ ma sát để chứng minh giá trị, rồi thêm identity và traceability khi abuse xuất hiện | Đúng khi wow moment tạo learning nhanh và hành vi xấu có thể truy vết; sai nếu harm không thể đảo ngược hoặc trust mất trước khi control kịp theo | [ElevenLabs retrospective](https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages), [AP về misuse](https://apnews.com/article/26cabd20dcacbd68c8f38610fec39f5b) |
| 2 | 08/2023 | Ra Eleven Multilingual v2 cho 28 ngôn ngữ và đưa platform ra khỏi beta | English-only giới hạn creator, dubbing và accessibility; voice identity bị mất khi đổi ngôn ngữ | **Mở rộng primitive theo mission:** một năng lực lõi có thể nhân TAM mạnh hơn việc thêm nhiều feature rời rạc | Đúng khi cùng model/voice asset tái dùng xuyên thị trường; sai khi coverage rộng làm giảm chất lượng ở accent/ngôn ngữ biên | [Multilingual v2](https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages) |
| 3 | 10/2023 | Ra AI Dubbing và Studio: transcript → translate → giữ voice → edit/timing | User phải tự ghép STT, dịch, TTS và audio editor; model tốt nhưng workflow vẫn tốn công | **Productize the workflow, not the model:** giá trị tăng khi sản phẩm sở hữu job end-to-end và giảm coordination cost | Đúng với job lặp lại, input/output rõ; sai khi edge case sáng tạo vẫn cần nhiều human judgment hơn UI cho phép | [AI Dubbing](https://elevenlabs.io/blog/elevenlabs-launches-voice-translation-tool-to-break-down-language-barriers-for-content) |
| 4 | 02/2024 | Cho voice actor đưa Professional Voice Clone đã xác minh vào Voice Library và nhận payout theo usage | Catalog giọng đa dạng cần supply thật; voice actor lo bị thay thế và mất quyền kiểm soát IP | **Biến rủi ro IP thành marketplace:** trả tiền và trao control cho bên cung giúp mở rộng supply, tăng trust và tạo network effects | Đúng khi consent, revocation, pricing minh bạch; sai nếu platform capture phần lớn giá trị hoặc enforcement không đủ mạnh | [Voice Actor Payouts](https://elevenlabs.io/blog/introducing-voice-actor-payouts), [payout $22M](https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs) |
| 5 | 11/2024 | Mở Conversational AI, Workspaces và nâng ElevenReader/GenFM | TTS là output một chiều và creator tool chủ yếu single-player; team/enterprise cần realtime, tools, knowledge base và collaboration | **Từ artifact sang interaction:** khi primitive đủ nhanh, chuyển từ tạo file sang loop hội thoại làm tăng tần suất và switching cost | Đúng khi latency, turn-taking và reliability đạt ngưỡng; sai nếu user thích channel bất đồng bộ hoặc agent không giải quyết được việc | [11/11 launches](https://elevenlabs.io/blog/introducing-conversational-ai-genfm-market-expansion-and-more) |
| 6 | 02/2025 | Ra Scribe, model speech-to-text 99 ngôn ngữ, qua API và dashboard | Voice stack còn phụ thuộc STT bên thứ ba; chất lượng đầu vào quyết định toàn bộ agent/dubbing loop | **Own the critical loop:** sở hữu cả nghe và nói giúp tối ưu latency, chất lượng, economics và feedback data end-to-end | Đúng khi tích hợp dọc cải thiện outcome rõ; sai nếu model chuyên biệt bên ngoài tốt/rẻ hơn và khách muốn modular stack | [Meet Scribe](https://elevenlabs.io/blog/meet-scribe) |
| 7 | 09–10/2025 | Đổi Conversational AI thành ElevenLabs Agents; thêm build–launch–monitor, testing, visual Workflows, subagents và human handoff | Demo voice agent dễ làm nhưng production agent cần logic có thể audit, test regression, tool access và escalation | **Cross the production chasm:** enterprise mua reliability và control, không mua demo; platform phải bao phủ lifecycle sau launch | Đúng với process volume cao và lỗi có chi phí; sai nếu platform đóng làm giảm composability hoặc professional services không scale | [Introducing Agents](https://elevenlabs.io/blog/introducing-elevenlabs-agents), [Agent Workflows](https://elevenlabs.io/blog/introducing-agent-workflows), [Agent Testing](https://elevenlabs.io/blog/tests-for-elevenlabs-agents) |
| 8 | 05–07/2026 | Dubbing v2 đi vào ElevenCreative/ElevenProductions; Agents có Spotlight để quan sát và cải thiện mọi conversation | Creator vẫn phải sửa translation/sync; enterprise nhận ra go-live chỉ là điểm bắt đầu, cần optimization liên tục | **Close the outcome loop:** kết hợp automation với human service/observability để bán outcome thay vì chỉ bán generation | Đúng khi platform học từ usage và human correction; sai nếu dịch vụ người làm biên lợi nhuận thấp hoặc telemetry tạo lo ngại riêng tư | [Dubbing v2](https://elevenlabs.io/blog/introducing-dubbing-v2), [Spotlight](https://elevenlabs.io/blog/introducing-elevenagents-spotlight) |

### Các pattern rút ra

1. **Primitive → workflow → platform:** TTS/voice cloning tạo wedge (mốc 1–2), Dubbing/Studio đóng gói job (mốc 3), Agents và Creative/Productions bao phủ lifecycle (mốc 7–8). ElevenLabs liên tục đi lên stack trước khi model nền bị commoditize.
2. **Mở rộng hai vòng lặp bổ trợ:** creator/self-serve tạo volume, use case và supply giọng; enterprise tạo doanh thu, yêu cầu reliability và dữ liệu production. CEO cho biết mix đã đi từ khoảng 90/10 nghiêng về self-serve đầu 2024 sang gần 60/40 hoặc 50/50 vào cuối 2025 ([TIME](https://time.com/7325957/mati-staniszewski-elevenlabs-interview/)).
3. **Trust vừa là constraint vừa là moat:** cùng chất lượng khiến voice cloning hấp dẫn cũng khiến misuse đáng sợ. Payment identity, voice captcha, marketplace terms, no-go voices, testing và monitoring không phải phụ kiện compliance; chúng là điều kiện để chuyển từ novelty sang infrastructure.
4. **Đánh đổi chính — breadth vs reliability:** ElevenLabs mở từ speech sang STT, agents, music, image/video và services. Breadth tăng cross-sell nhưng có nguy cơ làm loãng lợi thế âm thanh và khiến workflow phức tạp hơn. Với enterprise, một lỗi tool call hay policy nghiêm trọng hơn một giọng nói chưa đủ biểu cảm.

## §2 · Tệp user và Jobs to Be Done

### 2.1 Early adopters và tệp hiện tại

| | Early adopters (2023–đầu 2024) | Tệp hiện tại (2025–2026) |
|---|---|---|
| Ai? | YouTuber/podcaster nhỏ, indie author, game developer, đội localization ít ngân sách; technical creator sẵn sàng chỉnh từng đoạn | Hai nhánh: (1) creative/marketing team sản xuất đa định dạng, đa ngôn ngữ; (2) enterprise CX/product/ops và developer triển khai agents qua phone, web, app |
| Trigger sử dụng | Chi phí/lead time voice actor và studio quá cao; cần publish nhiều hơn hoặc dịch sang thị trường mới | Call volume tăng, support 24/7, nhu cầu cá nhân hóa và localization toàn cầu; leadership cần giảm cost-to-serve nhưng vẫn giữ brand voice |
| JTBD chính | **Khi** cần biến script thành audio nhưng không có studio/talent, **tôi muốn** tạo và sửa voiceover giống người thật trong vài phút, **để** phát hành nội dung nhanh với ngân sách nhỏ | **Khi** phải phục vụ hoặc tạo nội dung cho hàng nghìn user ở nhiều channel/ngôn ngữ, **tôi muốn** deploy, kiểm soát và cải thiện voice workflow end-to-end, **để** tăng resolution/conversion/output mà không tăng headcount tuyến tính |
| Tiêu chí thành công | Giọng tự nhiên, đúng accent/emotion; thời gian và chi phí thấp hơn recording; sửa được segment | Latency thấp; task completion/CSAT/conversion; human handoff đúng; compliance, uptime, auditability và predictable unit economics |
| Rào cản | Credit bị tiêu khi regenerate; pronunciation/emotion không ổn định; workflow dài vẫn phải chỉnh tay | Hallucination/tool-call failure; PII và data residency; procurement/integration; customer rejection khi không disclosure AI |
| Bằng chứng | User đánh giá chất lượng cao hơn TTS thường nhưng phàn nàn việc sửa và credit ([Reddit](https://www.reddit.com/r/ElevenLabs/comments/1abi4m0)); thử nghiệm Duke cho thấy dubbing đúng nhưng workflow/pricing có thể khiến re-record nhanh hơn ([Duke](https://sites.duke.edu/ddmc/2024/10/23/eleven-labs-falls-short/) | Hơn 2 triệu agents và 33 triệu conversations được công bố 9/2025; $500M ARR 5/2026 được công ty quy cho enterprise agents ([Agents](https://elevenlabs.io/blog/introducing-elevenlabs-agents), [ARR](https://elevenlabs.io/blog/500m-arr-and-new-investors)) |

Một tệp phụ quan trọng là **voice actor/chủ sở hữu IP**. JTBD của họ không phải “tạo audio” mà là: *Khi nhu cầu synthetic voice tăng, tôi muốn cấp phép digital replica với terms, moderation và payout do mình kiểm soát, để mở rộng thu nhập mà không mất quyền với danh tính giọng nói.* Đây là supply side giúp creative users có catalog tốt và giúp ElevenLabs khác các model chỉ cung cấp vài preset voices.

### 2.2 Sự dịch chuyển tệp user

ElevenLabs không thay thế early adopter mà **phân tầng** họ. Self-serve creator vẫn là acquisition và experimentation engine; Workspaces, Creative và Productions nâng creator/team lớn lên workflow trả phí cao hơn. Song song, Conversational AI → Agents tạo một business line mới có frequency và ACV cao: thay vì tạo vài giờ audio mỗi tháng, một agent có thể xử lý hàng nghìn cuộc gọi liên tục.

Sự dịch chuyển này được hỗ trợ bởi ba quyết định trong timeline: multilingual/dubbing biến chất lượng voice thành market expansion; Scribe và low-latency models đóng loop realtime; testing/workflows/Spotlight biến một demo thành hệ thống có thể vận hành. Tuy vậy, feedback cộng đồng cho thấy “best voice layer” chưa tự động thành “best agent platform”: logic hội thoại, telephony, integrations và monitoring mới là bottleneck. Đây là lý do moat tương lai nằm ở orchestration và outcome data, không chỉ fidelity.

### 2.3 Switching cost theo Four Forces

| Lực | Bằng chứng/quan sát | Tác động tới việc chuyển đổi |
|---|---|---|
| **Push of the situation** | Recording/dubbing truyền thống cần talent, studio, translation và lịch phối hợp; support phone cần headcount theo volume và khó phủ 24/7 | **Mạnh:** cost và lead time hiện tại tạo trigger rõ, nhất là long-tail content và câu hỏi support lặp lại |
| **Pull of the new solution** | Voice tự nhiên, clone giữ identity qua nhiều ngôn ngữ; một platform có TTS, STT, dubbing, agents, testing và monitoring | **Mạnh:** demo value xuất hiện trong vài phút; API/self-serve cho phép pilot trước procurement lớn |
| **Anxiety of the new solution** | Deepfake/consent, brand risk, mistranslation, hallucination, PII và cuộc gọi AI không được disclosure; AP ghi nhận safeguards vẫn có thể bị vượt qua dù ElevenLabs tốt nhất trong nhóm test 2024 | **Rất mạnh ở enterprise:** một incident có thể xóa toàn bộ ROI; đòi human handoff, audit, no-go voices, VPC/on-prem và insurance |
| **Habit of the present** | Creator quen DAW/video editor và voice actor; enterprise có contact center, CRM, telephony, vendor contract và QA process sẵn có | **Vừa–mạnh:** thắng bằng integration/gradual rollout, không chỉ benchmark model; exportability và compatibility làm giảm nỗi sợ lock-in |

**Kết luận chuyển đổi:** Push và Pull đủ mạnh để tạo pilot; Anxiety quyết định pilot có lên production hay không. ElevenLabs cần tiếp tục bán “controlled outcome”: consent/provenance cho creative IP; testing, observability, human escalation và deployment flexibility cho agents. Khi đã tích hợp knowledge base, workflow, evaluation set, brand voice và lịch sử conversation, switching cost chuyển từ model quality sang dữ liệu vận hành và process—bền hơn nhưng cũng đòi trust cao hơn.

## §3 · Ba dự đoán cho 6–12 tháng tới

### Dự đoán 1 · ElevenAgents sẽ đóng gói theo vertical và bán “managed reliability”

**Dự đoán:** Trước tháng 8/2027, ElevenLabs sẽ ra ít nhất hai gói/solution rõ theo ngành (khả năng cao telco/contact center, financial services hoặc healthcare), kèm template workflow, evaluation, compliance/deployment controls và hỗ trợ Forward Deployed Engineer; pricing/marketing sẽ nhấn vào outcome như resolution hoặc conversion thay vì chỉ phút gọi.

**Lập luận:** Mốc 7–8 cho thấy roadmap đã chuyển từ tạo agent sang test, audit, handoff và continuous improvement. Tệp enterprise bị chặn bởi Anxiety và integration, không phải thiếu giọng. Khi $500M ARR được công ty quy cho enterprise deployments, verticalization là cách rút ngắn sales cycle và tái sử dụng playbook, trong khi Spotlight tạo telemetry để chứng minh ROI.

**Tín hiệu cần theo dõi:** landing page/pricing theo ngành; tuyển Forward Deployed Engineer và solution architect; partnership với contact-center/CRM; case study công bố task completion/CSAT thay vì chỉ số cuộc gọi. Dự đoán yếu đi nếu doanh thu agents chậm lại hoặc khách tiếp tục dùng ElevenLabs chủ yếu như TTS component.

### Dự đoán 2 · Voice Marketplace trở thành rights marketplace đa phương tiện

**Dự đoán:** Trước tháng 8/2027, ElevenCreative sẽ cho talent/chủ IP cấp phép một “identity pack” gồm voice và ít nhất một tài sản âm thanh/hình ảnh khác, với usage terms, provenance, pricing và revenue share dùng xuyên voice, dubbing, music/video workflows; payout marketplace sẽ vượt $40M tích lũy.

**Lập luận:** Mốc 4 chứng minh consent + payout có thể biến IP anxiety thành supply network: payout voice tăng từ $11M lên $22M trong sáu tháng đến 5/2026. Mốc 8 và định hướng công bố tháng 5/2026 cho thấy Creative đang gộp image, video và audio. User team muốn một brand/talent identity nhất quán đa ngôn ngữ, trong khi talent muốn kiểm soát và kiếm tiền thay vì bị scrape.

**Tín hiệu cần theo dõi:** unified rights dashboard; Music Marketplace mở rộng; deal với estate/actor/label; watermark/provenance API; payout tiến gần $30M cuối 2026. Dự đoán yếu đi nếu tranh chấp bản quyền buộc catalog co lại hoặc payout growth giảm mạnh.

### Dự đoán 3 · Ra audio-native/full-duplex agent model nhưng giữ kiến trúc mở

**Dự đoán:** Trong 6–12 tháng, ElevenLabs sẽ đưa vào preview hoặc GA một model agent audio-in/audio-out tích hợp hiểu lời nói, turn-taking và speech generation để giảm latency/tăng cảm xúc, đồng thời vẫn cho enterprise cắm LLM/STT riêng trong orchestration layer.

**Lập luận:** Mốc 5–7 lần lượt đưa realtime interaction, Scribe và agent platform vào cùng loop. CEO đã nói mục tiêu là một “omni-model” cho hội thoại tự nhiên ([TIME](https://time.com/7325957/mati-staniszewski-elevenlabs-interview/)). Tuy nhiên, JTBD enterprise cần control và tránh lock-in; vì thế ElevenLabs không thể ép một end-to-end model duy nhất. Chiến lược hợp lý là model tích hợp làm default cho quality/latency, kiến trúc modular làm escape hatch.

**Tín hiệu cần theo dõi:** benchmark full-duplex/interruptions; API streaming audio-to-audio; một model ID dùng trực tiếp trong Agents; pricing hội thoại hợp nhất; tiếp tục hỗ trợ custom LLM/external agent. Dự đoán yếu đi nếu roadmap chỉ tối ưu chuỗi Scribe + LLM + Eleven v3 hoặc công ty ưu tiên Creative hơn Agents.

## §4 · AI Log

| Công việc | Công cụ/model | AI đã làm gì? | Nhóm đã phán đoán/quyết định gì? | Cách kiểm chứng | Kết quả kiểm chứng |
|---|---|---|---|---|---|
| Tìm timeline | Codex + web search | Tìm blog/changelog, ngày launch, adoption và nguồn độc lập | Chọn 8 mốc là thay đổi strategy/workflow, loại funding-only và feature nhỏ | Mỗi mốc có nguồn chính thức; mốc safety đối chiếu AP | Giữ 8 mốc; tách claim công ty khỏi quan sát độc lập |
| Revert nguyên lý | Codex | Đề xuất tên pattern và điều kiện biên | Chọn nguyên lý giải thích cơ chế, không lặp lại tên feature | Kiểm tra mỗi nguyên lý có thể áp dụng sang sản phẩm khác và có trường hợp sai | Sửa thành 8 nguyên lý có “đúng khi/sai khi” |
| Phân tích user/JTBD | Codex | Tổng hợp use case, complaint và enterprise adoption | Phân tầng creator, enterprise và supply-side voice talent | Đối chiếu launch pages, TIME, Duke và community feedback | Giữ ba tệp; không coi số liệu marketing là bằng chứng duy nhất về outcome |
| Đề xuất dự đoán | Codex | Sinh nhiều hướng: vertical agents, rights marketplace, omni-model, pricing | Chọn ba dự đoán cụ thể, falsifiable và dẫn được về §1–§2 | Tìm leading indicators trong roadmap 2025–2026; thêm điều kiện làm yếu dự đoán | Ba dự đoán có deadline, mechanism và signal |
| Biên tập memo/slide | Codex | Viết bản nháp tiếng Việt, cấu trúc bảng và storyboard | Nhóm cần cập nhật tên/thành viên và phản biện lập luận trước khi nộp | So với rubric 100 điểm và checklist repo | Đủ bốn phần bắt buộc; slide bám cùng luận điểm |

### Giới hạn và mức độ tin cậy

- Phần lớn số liệu adoption/ARR do ElevenLabs tự công bố vì công ty tư nhân; không có báo cáo tài chính đã kiểm toán công khai. Memo ghi rõ nguồn và không suy ra profitability.
- Review cộng đồng và thử nghiệm Duke là bằng chứng định tính, không đại diện toàn bộ customer base. Chúng được dùng để tìm friction, không để ước lượng prevalence.
- Product surface thay đổi nhanh. Dự đoán dùng trạng thái đến 2026-08-14 và nên được chấm theo chất lượng cơ chế, không chỉ kết quả cuối.
- Tên nhóm/thành viên chưa được cung cấp và cần điền trước khi nộp.

## Tài liệu tham khảo

1. ElevenLabs, [“ElevenLabs Comes Out of Beta and Releases Eleven Multilingual v2”](https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages), 2023-08-22 — nguồn sơ cấp cho launch ban đầu và mốc 2.
2. Associated Press, [“New AI voice-cloning tools add fuel to misinformation fire”](https://apnews.com/article/26cabd20dcacbd68c8f38610fec39f5b), 2023-02 — nguồn độc lập cho misuse sau beta.
3. ElevenLabs, [“AI Dubbing”](https://elevenlabs.io/blog/elevenlabs-launches-voice-translation-tool-to-break-down-language-barriers-for-content), 2023-10-10 — mốc 3.
4. ElevenLabs, [“Introducing Voice Actor Payouts”](https://elevenlabs.io/blog/introducing-voice-actor-payouts), 2024-02-13 — mốc 4.
5. ElevenLabs, [“Introducing Conversational AI, GenFM, market expansion, and more”](https://elevenlabs.io/blog/introducing-conversational-ai-genfm-market-expansion-and-more), 2024-11-11 — mốc 5.
6. ElevenLabs, [“Meet Scribe”](https://elevenlabs.io/blog/meet-scribe), 2025-02-26 — mốc 6.
7. ElevenLabs, [“Introducing ElevenLabs Agents”](https://elevenlabs.io/blog/introducing-elevenlabs-agents), 2025-09-03 — mốc 7 và usage.
8. ElevenLabs, [“Introducing Agent Workflows”](https://elevenlabs.io/blog/introducing-agent-workflows), 2025-10-06 — production control.
9. ElevenLabs, [“Introducing Dubbing v2”](https://elevenlabs.io/blog/introducing-dubbing-v2), 2026-05-28 — mốc 8.
10. ElevenLabs, [“ElevenAgents Spotlight”](https://elevenlabs.io/blog/introducing-elevenagents-spotlight), 2026-07-09 — observability loop.
11. ElevenLabs, [“$22 million earned by voice creators”](https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs), 2026-05-22, cập nhật 2026-07-16 — marketplace traction.
12. ElevenLabs, [“Crosses $500M ARR”](https://elevenlabs.io/blog/500m-arr-and-new-investors), 2026-05-05 — company-reported business mix và strategy.
13. TIME, [“ElevenLabs CEO Mati Staniszewski on Darth Vader, Competition and Preventing Misuse”](https://time.com/7325957/mati-staniszewski-elevenlabs-interview/), 2025-10-15 — user mix, agents và omni-model direction.
14. Associated Press, [“Tests find AI tools readily create election lies”](https://apnews.com/article/2500813b642169478c27c168aab1b3e3), 2024 — independent safeguard comparison.
15. Duke Digital Media Community, [“ElevenLabs Falls Short”](https://sites.duke.edu/ddmc/2024/10/23/eleven-labs-falls-short/), 2024-10-23 — workflow/pricing friction.

