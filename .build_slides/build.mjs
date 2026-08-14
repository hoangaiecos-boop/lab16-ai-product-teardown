import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = fileURLToPath(new URL("../slides.pptx", import.meta.url));
const RENDER = fileURLToPath(new URL("./rendered/", import.meta.url));
const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });

const C = { ink: "#111111", muted: "#63666A", panel: "#F1F1F1", rule: "#C4C7CA", blue: "#3D8DFF", pale: "#DCEEFF", white: "#FFFFFF", dark: "#17243A" };
const FONT = "Arial";

function rect(slide, x, y, w, h, fill = C.panel, line = "none") {
  return slide.shapes.add({ geometry: "rect", position: { left:x, top:y, width:w, height:h }, fill, line: { style:"solid", fill:line, width: line === "none" ? 0 : 1 } });
}
function text(slide, str, x, y, w, h, size=22, color=C.ink, bold=false, align="left") {
  const s = slide.shapes.add({ geometry:"textbox", position:{left:x,top:y,width:w,height:h}, fill:"none", line:{style:"solid",fill:"none",width:0} });
  s.text = str;
  s.text.style = { fontFamily:FONT, fontSize:size, color, bold, alignment:align, verticalAlignment:"middle" };
  return s;
}
function line(slide, x, y, w, h=1, fill=C.rule) { return rect(slide,x,y,w,h,fill); }
function title(slide, n, t, sub="") {
  text(slide, `0${n}`, 72, 38, 45, 26, 14, C.blue, true);
  text(slide, t, 72, 70, 1136, 58, 38, C.ink, true);
  if (sub) text(slide, sub, 72, 128, 1136, 32, 17, C.muted);
  line(slide,72,174,1136,1);
}
function footer(slide, n, src) {
  text(slide, src, 72, 679, 1050, 18, 10, C.muted);
  text(slide, String(n), 1160, 679, 48, 18, 11, C.muted, false, "right");
}
function notes(slide, urls) {
  slide.speakerNotes.textFrame.setText(`[Sources]\n${urls.map(u=>`- ${u}`).join("\n")}`);
  slide.speakerNotes.setVisible(true);
}

// 1 — cover
{
  const s=p.slides.add(); s.background.fill=C.white;
  text(s,"AI PRODUCT TEARDOWN",72,52,400,30,15,C.blue,true);
  text(s,"ElevenLabs",72,180,720,90,64,C.ink,true);
  text(s,"Từ mô hình giọng nói gây “wow”\nđến hạ tầng tương tác",72,280,650,108,34,C.dark,false);
  rect(s,860,72,348,500,C.dark);
  text(s,"MODEL",900,125,250,40,17,C.pale,true);
  line(s,900,178,220,3,C.blue);
  text(s,"WORKFLOW",900,210,250,40,24,C.white,true);
  text(s,"MARKETPLACE",900,290,250,40,24,C.white,true);
  text(s,"PLATFORM",900,370,250,40,24,C.white,true);
  text(s,"Moat tương lai = trust + outcome ở quy mô lớn",900,460,250,65,18,C.pale,true);
  text(s,"Cập nhật 14.08.2026  ·  Nhóm: Chưa cập nhật",72,634,650,28,16,C.muted);
  notes(s,["https://elevenlabs.io/blog/500m-arr-and-new-investors"]);
}

// 2 — timeline
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,2,"Tám quyết định cho thấy một chiến lược đi lên stack","Model → workflow → marketplace → enterprise platform");
  line(s,100,390,1080,4,C.dark);
  const years=[{x:120,y:"2023"},{x:440,y:"2024"},{x:700,y:"2025"},{x:1010,y:"2026"}];
  years.forEach(a=>{rect(s,a.x,376,16,32,C.blue); text(s,a.y,a.x-20,420,90,30,18,C.blue,true);});
  const items=[
    [90,205,180,"TTS + cloning","Wow wedge → safety"],[260,490,180,"Multilingual + Dubbing","Mở TAM, sở hữu workflow"],
    [430,205,180,"Voice payouts","Trust thành marketplace"],[610,490,180,"Conversational AI","Artifact → interaction"],
    [700,205,180,"Scribe","Sở hữu input loop"],[860,490,180,"Agents + Workflows","Vượt production chasm"],
    [990,205,190,"Dubbing v2","Human + automation"],[990,490,190,"Spotlight","Đóng outcome loop"]
  ];
  items.forEach(([x,y,w,a,b],i)=>{ rect(s,x,y,w,96,i%2?C.panel:C.pale); text(s,a,x+14,y+10,w-28,28,17,C.ink,true); text(s,b,x+14,y+42,w-28,40,14,C.muted); line(s,x+w/2,y<390?y+96:390,2,Math.abs(390-(y<390?y+96:y)),C.rule); });
  footer(s,2,"Nguồn: ElevenLabs product blog 2023–2026; Associated Press");
  notes(s,["https://elevenlabs.io/blog/elevenlabs-comes-out-of-beta-and-releases-eleven-multilingual-v2-a-foundational-ai-speech-model-for-nearly-30-languages","https://elevenlabs.io/blog/introducing-elevenlabs-agents","https://elevenlabs.io/blog/introducing-elevenagents-spotlight"]);
}

// 3 — principles
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,3,"Ba nguyên lý giải thích phần lớn roadmap");
  const xs=[72,448,824];
  const data=[
    ["01","Bán workflow,\nkhông chỉ bán model","Dubbing gom STT → dịch → clone → timing. Agents gom voice → tools → test → monitor."],
    ["02","Biến rủi ro IP\nthành marketplace","Consent + control + payout mở supply và tạo network effects. Payout vượt $22M."],
    ["03","Enterprise mua\nreliability, không mua demo","Tests, Workflows, handoff và Spotlight mới mở deployment có giá trị cao."]
  ];
  data.forEach((d,i)=>{ text(s,d[0],xs[i],210,80,50,32,C.blue,true); line(s,xs[i],273,304,3,C.ink); text(s,d[1],xs[i],292,304,88,27,C.ink,true); text(s,d[2],xs[i],400,304,110,18,C.muted); });
  rect(s,72,560,1056,64,C.dark); text(s,"Đánh đổi: breadth tăng TAM, nhưng reliability của agent quan trọng hơn thêm một modality.",96,572,1008,40,20,C.white,true);
  footer(s,3,"Nguồn: Voice Actor Payouts; Introducing Agents; Spotlight");
  notes(s,["https://elevenlabs.io/blog/introducing-voice-actor-payouts","https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs","https://elevenlabs.io/blog/introducing-elevenlabs-agents"]);
}

// 4 — users
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,4,"ElevenLabs phân tầng user thay vì bỏ tệp ban đầu");
  rect(s,72,206,500,354,C.panel); rect(s,708,206,500,354,C.pale);
  text(s,"EARLY ADOPTERS",98,230,420,28,15,C.blue,true); text(s,"Creator tự phục vụ",98,272,420,44,29,C.ink,true);
  text(s,"YouTuber · indie author · game dev\nlocalization team nhỏ",98,326,420,60,18,C.muted);
  text(s,"Khi không có studio/talent, tôi muốn tạo voiceover giống người trong vài phút để publish nhanh với ngân sách nhỏ.",98,410,420,112,20,C.ink);
  text(s,"TỆP HIỆN TẠI",734,230,420,28,15,C.blue,true); text(s,"Team + enterprise",734,272,420,44,29,C.ink,true);
  text(s,"Creative/marketing · CX · product · ops",734,326,420,60,18,C.muted);
  text(s,"Khi phục vụ hàng nghìn user đa channel/ngôn ngữ, tôi muốn deploy và kiểm soát workflow end-to-end để tăng resolution mà không tăng headcount tuyến tính.",734,402,420,128,20,C.ink);
  text(s,"→",596,338,88,70,46,C.blue,true,"center");
  text(s,"Supply side: voice talent cấp phép digital replica với terms + payout",210,594,860,36,19,C.dark,true,"center");
  footer(s,4,"Nguồn: TIME; ElevenLabs Agents; Duke Digital Media Community");
  notes(s,["https://time.com/7325957/mati-staniszewski-elevenlabs-interview/","https://elevenlabs.io/blog/introducing-elevenlabs-agents","https://sites.duke.edu/ddmc/2024/10/23/eleven-labs-falls-short/"]);
}

// 5 — forces
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,5,"Pilot dễ; trust và integration quyết định production");
  const rows=[
    ["PUSH","MẠNH",0.78,"Recording, dubbing và support truyền thống đắt, chậm"],
    ["PULL","MẠNH",0.84,"Voice tự nhiên + multilingual + workflow end-to-end"],
    ["ANXIETY","RẤT MẠNH",0.95,"Deepfake · hallucination · PII · mistranslation"],
    ["HABIT","VỪA–MẠNH",0.68,"DAW · talent · contact center · CRM · telephony"]
  ];
  rows.forEach((r,i)=>{const y=218+i*92; text(s,r[0],72,y,150,28,17,C.ink,true); text(s,r[1],232,y,150,28,15,C.blue,true); rect(s,400,y+6,390,18,C.panel); rect(s,400,y+6,390*r[2],18,i===2?C.dark:C.blue); text(s,r[3],830,y-2,378,46,17,C.muted);});
  rect(s,72,604,1136,48,C.dark); text(s,"Demo quality mở cửa. Trust + integration quyết định deployment. Dữ liệu vận hành tạo switching cost.",92,612,1096,32,18,C.white,true,"center");
  footer(s,5,"Nguồn: AP safeguard test 2024; Duke; community feedback");
  notes(s,["https://apnews.com/article/2500813b642169478c27c168aab1b3e3","https://sites.duke.edu/ddmc/2024/10/23/eleven-labs-falls-short/"]);
}

// 6 — predictions
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,6,"Ba dự đoán có thể kiểm chứng trước tháng 8/2027");
  const data=[
    ["01","VERTICAL AGENTS","≥2 gói theo ngành, kèm workflow, evaluation, compliance và managed deployment.","Tín hiệu: pricing theo outcome; FDE; partnership contact-center."],
    ["02","RIGHTS MARKETPLACE","Identity pack đa phương tiện; cumulative creator payout vượt $40M.","Tín hiệu: unified rights dashboard; provenance API; label/estate deals."],
    ["03","AUDIO-NATIVE MODEL","Preview/GA full-duplex audio-in/audio-out nhưng vẫn hỗ trợ custom LLM/STT.","Tín hiệu: streaming API; unified conversation pricing; benchmark interruption."]
  ];
  data.forEach((d,i)=>{const y=205+i*142; text(s,d[0],72,y,70,38,28,C.blue,true); text(s,d[1],160,y,300,32,18,C.ink,true); text(s,d[2],470,y-4,420,58,20,C.ink); text(s,d[3],920,y-4,288,64,15,C.muted); if(i<2) line(s,72,y+96,1136,1);});
  text(s,"Logic: ElevenLabs luôn đóng loop còn thiếu; bottleneck kế tiếp là production trust và IP control.",72,630,1136,34,19,C.dark,true);
  footer(s,6,"Khung dự đoán: 14.08.2026–14.08.2027");
  notes(s,["https://elevenlabs.io/blog/500m-arr-and-new-investors","https://time.com/7325957/mati-staniszewski-elevenlabs-interview/"]);
}

// 7 — deep dive
{
  const s=p.slides.add(); s.background.fill=C.white; title(s,7,"Dự đoán khó nhất: marketplace sẽ mở rộng từ giọng sang identity");
  text(s,"$11M",72,215,220,70,48,C.ink,true); text(s,"11/2025",72,280,220,28,15,C.muted);
  text(s,"→",310,225,70,50,34,C.blue,true,"center");
  text(s,"$22M",400,215,220,70,48,C.blue,true); text(s,"05/2026",400,280,220,28,15,C.muted);
  text(s,"→",638,225,70,50,34,C.blue,true,"center");
  rect(s,730,200,390,112,C.dark); text(s,"> $40M",758,216,330,50,38,C.white,true); text(s,"dự đoán trước 08/2027",758,268,330,28,16,C.pale);
  line(s,72,350,1056,2,C.rule);
  text(s,"VÌ SAO CÓ THỂ ĐÚNG",72,382,310,28,17,C.blue,true); text(s,"Payout tăng gấp đôi trong 6 tháng\nCreative đang gộp voice, music, image/video\nBrand cần identity nhất quán đa ngôn ngữ",72,420,460,112,19,C.ink);
  text(s,"ĐIỀU KHIẾN NHÓM ĐỔI Ý",650,382,360,28,17,C.blue,true); text(s,"Litigation làm catalog co lại\nPayout growth chậm\nBuyer tiếp tục chuộng stock assets",650,420,460,112,19,C.ink);
  rect(s,72,576,1056,54,C.pale); text(s,"Tín hiệu sớm: unified rights dashboard · Music Marketplace · provenance API · estate/label deals",92,585,1016,36,18,C.dark,true,"center");
  footer(s,7,"Nguồn: ElevenLabs, $22M earned by voice creators, 22.05.2026");
  notes(s,["https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs","https://elevenlabs.io/blog/500m-arr-and-new-investors"]);
}

// 8 — close
{
  const s=p.slides.add(); s.background.fill=C.dark;
  text(s,"KẾT LUẬN",72,60,300,28,15,C.pale,true);
  text(s,"AI model tạo wedge.\nWorkflow tạo retention.\nTrust + data loop tạo moat.",72,145,920,210,48,C.white,true);
  line(s,72,400,1136,2,C.blue);
  text(s,"ElevenLabs thắng vòng đầu bằng “nghe như người”.\nVòng sau được quyết định bởi “hoạt động đáng tin như một hệ thống”.",72,430,830,100,24,C.pale);
  rect(s,930,430,278,150,C.white); text(s,"CÂU HỎI",954,448,230,26,15,C.blue,true); text(s,"Creative suite, contact-center platform hay neutral audio infrastructure?",954,482,230,78,18,C.ink,true);
  text(s,"Nguồn đầy đủ & AI log: memo.md",72,650,500,24,14,C.pale);
  text(s,"08",1160,650,48,24,12,C.pale,false,"right");
  notes(s,["https://elevenlabs.io/blog/500m-arr-and-new-investors"]);
}

await fs.mkdir(RENDER,{recursive:true});
for (const [i,s] of p.slides.items.entries()) {
  const blob=await p.export({slide:s,format:"png",scale:1});
  await fs.writeFile(`${RENDER}/slide-${i+1}.png`,new Uint8Array(await blob.arrayBuffer()));
}
const montage=await p.export({format:"webp",montage:true,scale:1});
await fs.writeFile(fileURLToPath(new URL("./montage.webp",import.meta.url)),new Uint8Array(await montage.arrayBuffer()));
const pptx=await PresentationFile.exportPptx(p); await pptx.save(OUT);
