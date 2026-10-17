# VS Code Claude에 붙여넣을 지시문 — 페이지 제목 수정 (A안 확정)

아래 회색 상자 안의 내용을 **전부 복사**해서 VS Code의 Claude 대화창에 붙여넣으세요.
(홈페이지 폴더를 VS Code로 열어 둔 상태여야 합니다.)

````text
홈페이지 SEO 개선 작업이야. 각 HTML 페이지의 제목을 아래 목록대로 바꿔줘.

[바꿀 곳 — 페이지마다 아래 3곳을 같은 문구로]
1. <head> 안의 <title>…</title>
2. <meta property="og:title" content="…">
3. 그 페이지의 JSON-LD 구조화 데이터 중 "@type": "WebPage" 또는 "MedicalWebPage" 블록의 "name" 값 (있는 경우만)

[절대 바꾸지 말 것]
- 화면에 보이는 <h1>, <h2> 등 본문 제목과 본문 내용
- Dentist 스키마의 "name"(병원 공식 명칭 "경주 프라임치과의원")
- WebSite 블록의 "name"
- 러시아어 페이지(ru/ 폴더)
- 목록에 없는 페이지

[주의]
- 제목 안의 "|"는 HTML에 그대로 써도 돼. "&"가 생기면 &amp; 로 써줘.
- 문구는 한 글자도 바꾸지 말고 그대로 넣어줘.
- 작업 전에 바꿀 파일 목록과 현재 제목 → 새 제목을 표로 먼저 보여주고, 내가 확인하면 수정해줘.
- 수정 후 모든 페이지에서 <title>과 og:title이 같은지 검사해서 결과를 알려줘.

[페이지 → 새 제목]
index.html → 경주 치과 | 통합치의학과 전문의 원장 부부·토일 진료 - 경주프라임치과
implant.html → 경주 임플란트 | 통합치의학과 전문의 직접 진료 - 경주프라임치과
implant-navigation.html → 경주 네비게이션 임플란트 | 3D 모의수술·최소 절개 - 경주프라임치과
implant-bonegraft.html → 경주 뼈이식 임플란트 | 잇몸뼈가 부족할 때 - 경주프라임치과
implant-sinus.html → 경주 상악동 임플란트 | 위턱 어금니 뼈 부족 시 - 경주프라임치과
implant-fullarch.html → 경주 전악 임플란트 | 치아를 모두 잃었을 때 - 경주프라임치과
implant-hybrid.html → 경주 하이브리드 임플란트 | 4~6개로 전체 회복 - 경주프라임치과
implant-extraction.html → 경주 발치즉시 임플란트 | 뽑은 날 바로 식립 - 경주프라임치과
implant-loading.html → 경주 즉시로딩 임플란트 | 수술 당일 임시치아 - 경주프라임치과
implant-revision.html → 경주 임플란트 재수술 | 주위염·흔들림 원인 진단 - 경주프라임치과
implant-systemic.html → 경주 당뇨·고혈압 임플란트 | 전신질환 맞춤 계획 - 경주프라임치과
implant-denture.html → 경주 임플란트 틀니 | 덜 빠지고 편한 틀니 - 경주프라임치과
general.html → 경주 일반진료 | 충치·신경치료·잇몸·틀니 - 경주프라임치과
general-root.html → 경주 신경치료 | 자연치아를 살리는 근관치료 - 경주프라임치과
general-gum.html → 경주 잇몸치료 | 잇몸 출혈·치아 흔들림 - 경주프라임치과
general-scaling.html → 경주 스케일링 | 연 1회 건강보험 적용 - 경주프라임치과
general-resin.html → 경주 레진치료 | 작은 충치·깨진 앞니 - 경주프라임치과
general-inlay.html → 경주 세라믹 인레이 | 자체 기공소 맞춤 제작 - 경주프라임치과
general-crown.html → 경주 지르코니아 크라운 | 자체 기공소 제작 - 경주프라임치과
general-denture.html → 경주 틀니 | 65세 이상 보험 틀니·자체 기공소 - 경주프라임치과
general-wisdom.html → 경주 사랑니 발치 | 매복 사랑니 3D CT 진단 - 경주프라임치과
general-tmj.html → 경주 턱관절 치료 | 턱 소리·통증·이갈이 - 경주프라임치과
general-prevent.html → 경주 실란트·불소도포 | 충치 예방치료 - 경주프라임치과
general-whitening.html → 경주 치아미백 | 치아를 깎지 않는 미백 - 경주프라임치과
general-laminate.html → 경주 라미네이트 | 앞니 모양·색 개선 - 경주프라임치과
about.html → 치과 소개 | 통합치의학과 전문의 원장 부부 - 경주프라임치과
about-prime.html → 경주프라임치과 이야기 | 진료 철학과 6가지 약속
about-doctors.html → 의료진 소개 | 통합치의학과 전문의 류성현·정인영 - 경주프라임치과
about-tour.html → 병원 둘러보기 | 진료실·대기실 사진 - 경주프라임치과
about-location.html → 진료시간·오시는 길 | 경주 원화로·전용 주차장 - 경주프라임치과
special.html → 프라임치과가 다른 점 | 진료 원칙과 시스템 - 경주프라임치과
special-honest.html → 정직한 진료 | 꼭 필요한 치료만 권합니다 - 경주프라임치과
special-cost.html → 비급여 비용 공개 | 치료 전 미리 확인 - 경주프라임치과
special-natural.html → 자연치아 보존 | 살릴 수 있는 치아는 먼저 - 경주프라임치과
special-anesthesia.html → 3단계 마취 | 주사 따끔함을 줄이는 방법 - 경주프라임치과
special-aftercare.html → 사후관리 | 정기검진·임플란트 보증서 - 경주프라임치과
special-checkup.html → 정밀검진 | 3D CT·구강스캐너 진단 - 경주프라임치과
special-equipment.html → 진료 장비 | 3D CT·구강스캐너·밀링기 - 경주프라임치과
special-hygienist.html → 진료실 전원 치과위생사 | 국가면허 진료팀 - 경주프라임치과
special-lab.html → 자체 기공소 | 보철물을 병원에서 직접 제작 - 경주프라임치과
community.html → 커뮤니티 | 블로그·자주 묻는 질문·진료비 - 경주프라임치과
community-blog.html → 블로그 | 치료 정보와 진료실 이야기 - 경주프라임치과
community-faq.html → 자주 묻는 질문 | 임플란트 기간·통증·보험 - 경주프라임치과
community-price.html → 비급여 진료비용 | 임플란트·틀니·크라운 비용 안내 - 경주프라임치과
````

## 붙여넣은 뒤 순서

1. Claude가 **현재 제목 → 새 제목 표**를 먼저 보여줍니다. 훑어보고 "좋아, 진행해"라고 답하세요.
2. 수정이 끝나면 Claude가 검사 결과를 알려줍니다. 브라우저로 메인 페이지를 열어 탭 제목이 "경주 치과 | …"로 바뀌었는지 확인하세요.
3. 평소처럼 홈페이지를 배포(업로드)합니다. 현재 홈페이지는 Netlify로 운영 중입니다.
4. 배포 후 할 일:
   - 구글 서치콘솔에서 메인·임플란트 페이지 **"URL 검사 → 색인 생성 요청"**
   - 네이버 서치어드바이저에서 **"웹페이지 수집 요청"**
   - 카카오톡 공유 미리보기는 캐시 때문에 늦게 바뀝니다. 바로 바꾸려면 카카오 디벨로퍼스의 "공유 디버거"에서 주소를 넣고 초기화하세요.
