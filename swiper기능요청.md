
== swiper play/pause 토글버튼 js 작성 프롬프트 
---
[작업 목표]
Swiper 슬라이더에 재생/정지 토글 버튼 기능을 추가한다.

[대상 파일]
- 입력/수정: swiper-wconcept.html 내 인라인 스크립트

[조건]
1. .swiper-button-play-toggle 요소를 클릭하면 슬라이더가 멈추고,
   다시 클릭하면 슬라이더가 자동으로 재생된다.
2. 버튼은 현재 재생 중인지 정지 중인지 시각적으로 구분할 수 있어야 한다.
   (CSS로 스타일을 제어할 수 있도록 상태에 따라 버튼에 클래스를 추가해 달라)
3. 기존 CSS를 클래스명을 확인하고,
   해당 클래스명을 그대로 사용한다.

[환경 제약]
- jQuery에 의존하지 않는 순수 JavaScript(vanilla JS)로 작성한다.
- Swiper 인스턴스가 이미 초기화된 상태를 전제로 한다.
- 이 코드는 이후 별도 작업에서 myscript.js로 외부 분리할 예정이므로,
  분리하기 쉬운 구조로 작성한다.

[결과물 기준]
- 버튼 클릭 시 재생/정지가 정상적으로 토글되는 상태
- 버튼이 재생 중일 때와 정지 중일 때 다른 클래스가 적용되는 상태
---



== html파일에서 js 파일 분리 프롬프트
---
[작업 목표]
Swiper 슬라이더 HTML 파일의 인라인 JavaScript를 외부 파일로 분리한다.

[대상 파일]
- 입력: swiper연습2-wconcept.html
- 출력: myscript.js

[조건]
1. JS 코드를 myscript.js로 분리하고, HTML에서 <script src="myscript.js" defer></script>로 참조한다.
2. jQuery에 의존하지 않는 순수 JavaScript(vanilla JS)로 작성한다.
3. myscript.js 각 코드 블록에 목적과 동작을 설명하는 주석을 추가한다.
   HTML의 스크립트 참조 부분에도 간단한 주석을 단다.
4. Cafe24 환경에서는 <!--@js(url)--> 구문만 사용 가능하므로,
   defer 없이도 DOM 준비 후 실행되도록 document.readyState를 확인하여
   DOMContentLoaded 이벤트를 적절히 처리한다.

[환경 제약]
- Cafe24 쇼핑몰 Smart Design 환경
- jQuery가 전역으로 로드되어 있어 충돌 가능성 있음
- 전체 코드를 IIFE로 감싸 전역 오염을 방지할 것


[결과물 기준]
- HTML 파일에서 인라인 JS가 완전히 제거된 상태
- myscript.js가 외부 파일로 참조되는 상태
- Cafe24 환경에서도 안전하게 동작하는 상태