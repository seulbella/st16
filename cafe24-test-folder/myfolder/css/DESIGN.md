---
# DESIGN.md
# CSS 변수 파일(ub-variables.css) + 프로젝트 톤앤매너를 합쳐
# AI 에이전트와 팀원 모두가 참조하는 디자인 규칙 파일입니다.
# Cursor, Claude Code, GitHub Copilot 등에 디자인 컨텍스트를 전달합니다.

name: Aura Silver
description: >
  Aura Silver는 30대 여성을 주 타깃으로 한 Silver 주얼리 쇼핑몰입니다.
  심플한 디자인속에서 포인트로 일상 생활을 클래식하면서 우아한 리더의 모습을 보여주는  Silver 주얼리로 여유있는 중년의 라이프스타일을 제공합니다.
  Cafe24 기반 커스텀 스킨으로 제작됩니다.

# ──────────────────────────────────────
# 톤앤매너 (Tone & Manner)
# 퍼블리셔가 컴포넌트를 만들 때 기준이 되는 감성 방향
# ──────────────────────────────────────
tone:
  keywords:
    - "미니멀 (Minimal)"       # 덜어내는 것이 디자인
    - "클린 (Clean)"           # 여백이 콘텐츠다
    - "모던 (Modern)"          # 트렌디하되 유행을 타지 않음
    - "신뢰감 (Trustworthy)"   # 차갑지 않고 단단한 느낌
  mood: >
    무신사, 29CM처럼 제품 중심의 편집숍 느낌.
    실버·오프화이트 계열의 차분한 색감과 여백으로 브랜드를 표현합니다.
    화려한 배너보다 타이포그래피와 레이아웃으로 고급감을 연출합니다.
  voice: >
    카피는 짧고 명확하게. 설명은 간결하게.
    감탄사나 이모지 사용 최소화.
    영문 브랜드명 "Aura Silver"는 항상 대소문자 유지.

# ──────────────────────────────────────
# 색상 토큰 (Color Tokens)
# ──────────────────────────────────────
colors:
  # 브랜드 메인
  primary: "#1f1f1f"          # 주요 버튼, 링크, 강조 요소 — 거의 검정에 가까운 다크 그레이
  primary-light: "#555555"    # hover 상태
  primary-dark: "#000000"     # active / pressed 상태

  # 텍스트
  text-base: "#000000"        # 본문 기본 텍스트
  text-title: "#000000"       # 제목 텍스트
  text-subtitle: "#999999"    # 보조 제목, 부가 설명
  text-disabled: "#9CA3AF"    # 비활성 상태 텍스트
  text-inverse: "#FFFFFF"     # 어두운 배경 위 텍스트

  # 탭 버튼
  tab-default: "#999999"      # 비선택 탭
  tab-active: "#000000"       # 선택된 탭

  # 배경 / 서피스
  bg-primary: "#FFFFFF"       # 페이지 기본 배경 — 항상 흰색
  bg-section: "#efefef"       # 섹션 구분 배경 (포인트 섹션에만 사용)
  bg-card: "#F3F4F6"          # 카드 컴포넌트 배경

  # 테두리
  border-light: "#E5E7EB"
  border-default: "#D1D5DB"

  # 상태 색상
  success: "#10B981"
  warning: "#F59E0B"
  error: "#EF4444"
  info: "#3B82F6"

# ──────────────────────────────────────
# 타이포그래피 (Typography)
# ──────────────────────────────────────
typography:
  fontFamily:
    korean: '"Pretendard", "Noto Sans KR", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif'
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
  # 기본 폰트는 반드시 한국어 폰트 패밀리를 사용할 것

  fontSize:
    xs: "0.75rem"     # 12px — 작은 주석, 태그
    sm: "0.875rem"    # 14px — 부가 정보, 캡션
    base: "1rem"      # 16px — 기본 본문 ★기준값
    lg: "1.125rem"    # 18px — 강조 본문
    xl: "1.25rem"     # 20px — 서브 타이틀
    2xl: "1.5rem"     # 24px — 섹션 제목
    3xl: "1.875rem"   # 30px — 페이지 제목
    4xl: "2.25rem"    # 36px — 메인 제목
    5xl: "3rem"       # 48px — 히어로 제목

  fontWeight:
    normal: 400
    medium: 500
    semibold: 600
    bold: 700
  # 미니멀 톤 — 400 / 600만 주로 사용. 800은 지양.

  lineHeight:
    tight: 1.25
    normal: 1.5       # 본문 기본값
    relaxed: 1.625    # 긴 본문 가독성용

# ──────────────────────────────────────
# 간격 시스템 (Spacing)
# ──────────────────────────────────────
spacing:
  xs: "8px"    # 아이콘~텍스트, 배지 내부 등 작은 간격
  sm: "10px"   # 인라인 요소 간 간격
  md: "16px"   # 기본 패딩, 카드 내부 간격 ★가장 많이 씀
  lg: "30px"   # 섹션 내 컴포넌트 간 간격
  xl: "40px"   # 섹션 간 간격
  xxl: "120px" # 히어로/랜딩 대형 섹션 상하 여백
  # 여백을 충분히 쓸 것. 좁은 여백은 저렴해 보임.

# ──────────────────────────────────────
# 레이아웃 (Layout)
# ──────────────────────────────────────
layout:
  maxWidth: "1230px"   # 전체 컨테이너 최대 너비
  sectionWidth: "92%"  # 섹션 콘텐츠 너비 (양쪽 여백 확보)
  columnGap: "15px"    # 그리드 컬럼 사이 간격

  breakpoints:
    sm: "480px"
    md: "767px"
    lg: "1024px"
    xl: "1300px"
    xxl: "1533px"

# ──────────────────────────────────────
# 둥근 모서리 (Border Radius)
# ──────────────────────────────────────
radius:
  none: "0"
  sm: "2px"
  default: "4px"   # 기본 버튼, 인풋 — 미니멀 톤에 맞게 각진 느낌 유지
  md: "6px"
  lg: "8px"        # 카드
  xl: "12px"
  full: "9999px"   # 뱃지, 태그, 원형 버튼
  # 과도한 둥글기(2xl 이상) 지양

# ──────────────────────────────────────
# 그림자 (Shadow)
# ──────────────────────────────────────
shadows:
  xs: "0 1px 2px 0 rgba(0,0,0,0.05)"
  sm: "0 1px 3px 0 rgba(0,0,0,0.1)"
  default: "0 4px 6px -1px rgba(0,0,0,0.1)"
  md: "0 10px 15px -3px rgba(0,0,0,0.1)"
  # 미니멀 톤 — 주로 xs, sm만 사용. 강한 그림자 지양.

# ──────────────────────────────────────
# 애니메이션 (Animation)
# ──────────────────────────────────────
animation:
  transition:
    fast: "all 150ms ease-in-out"
    base: "all 200ms ease-in-out"   # ★버튼 hover 등 기본값
    slow: "all 300ms ease-in-out"
  # 쇼핑몰 특성상 반응은 빠르게. 500ms 초과 금지.

# ──────────────────────────────────────
# Z-index (레이어 순서)
# ──────────────────────────────────────
zIndex:
  dropdown: 1000
  sticky: 1020
  fixed: 1030
  modal-backdrop: 1040
  modal: 1050
  tooltip: 1070

---

## Overview

**Aura Silver**는 30대 여성 타깃의 미니멀 패션·라이프스타일 쇼핑몰입니다.

브랜드 핵심 가치: **"덜어낼수록 더 보인다"**
제품이 주인공이 되도록 UI는 조용하게, 여백은 넉넉하게 설계합니다.

---

## 컴포넌트 규칙 (Component Rules)

### 버튼 (Button)
- primary 버튼: 배경 `#1f1f1f`, 텍스트 흰색, radius `4px`
- **한 화면에 primary 버튼은 1개만** (CTA 집중 원칙)
- hover 시 `transition-base(200ms)` 적용, 배경 `#555555`로 전환
- 아웃라인 버튼: 테두리 `#1f1f1f`, 배경 투명, 텍스트 `#1f1f1f`

### 카드 (Card)
- 배경 흰색 + `shadow-xs` 또는 `shadow-sm`
- 내부 패딩 `space-md(16px)`
- 모서리 `radius-lg(8px)`
- hover 시 `shadow-default`로 전환 + `transition-base`

### 섹션 배경 (Section)
- 기본 섹션: 흰색 배경
- 포인트 섹션만 `bg-section(#efefef)` 사용 — 연속 사용 금지
- 상하 패딩 기본 `space-xl(40px)`

### 탭 (Tab)
- 기본: `#999999`, 활성: `#000000` + 하단 2px 보더 강조
- 전환: `transition-base`

### 타이포그래피 사용 원칙
- 본문: `1rem / line-height 1.5`, Pretendard 400
- 섹션 제목: `1.5rem~1.875rem`, Pretendard 600
- 보조 텍스트: `#999999`, `0.875rem`
- **font-weight 800 사용 금지** — 미니멀 톤 유지

---

## 레이아웃 규칙 (Layout Rules)

- 컨테이너: `max-width 1230px`, `margin: 0 auto`
- 섹션 콘텐츠: `width 92%` — 양쪽 여백으로 숨통 확보
- 그리드: 12컬럼, 컬럼 간격 `15px`
- 반응형: **데스크톱 우선** (Cafe24 스킨 특성 — `max-width` 기준 미디어 쿼리)

---

## Don'ts (하지 말아야 할 것)

- ❌ 그라디언트 배경 사용 금지 — 미니멀 톤과 맞지 않음
- ❌ 인라인 스타일 사용 금지 — 반드시 변수로 관리
- ❌ primary 버튼 2개 이상 병렬 배치 금지
- ❌ `bg-section(#efefef)` 연속 사용 금지
- ❌ 임의 z-index 숫자 사용 금지 — 반드시 토큰 사용
- ❌ 애니메이션 500ms 초과 금지
- ❌ font-weight 800 사용 금지

---

## 파일 구조 참고

```
project/
├── DESIGN.md              ← 이 파일: 톤앤매너 + 디자인 규칙 (AI & 팀원용)
├── css/
│   ├── ub-variables.css   ← CSS 변수 선언 (브라우저가 읽는 토큰 원본)
│   └── ub-grid-system.css ← 그리드 & 유틸리티 클래스
└── ...
```

> 💡 **세 파일의 관계**
>
> | 파일 | 누가 읽나 | 담긴 것 |
> |---|---|---|
> | `ub-variables.css` | 브라우저 | 값(value)만 |
> | `DESIGN.md` | AI / 팀원 | 값 + 언제/왜 쓰는지 + 톤앤매너 |
> | 기획서 / 스타일가이드 | 디자이너 / 기획자 | 전체 브랜드 정책 |
