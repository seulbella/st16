// (function () { --> 다른 자바 스크립트의 메인 스페이스에서 다른 변수와 충돌하지 않도록 하는 구문인 '전역 스코프 오염 방지를 위해 IIFE로 감싸짐' 조건을 받아들인 기능임
(function () {
  'use strict';

  // DOM이 준비된 후에만 초기화 함수를 실행합니다.
  // Cafe24 환경에서 defer가 없을 때도 안전하게 동작하도록 document.readyState를 확인합니다.
  function onDocumentReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // Swiper 인스턴스를 생성하고 자동 재생 및 네비게이션을 설정합니다.
  function initSwiper() {
    var swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
    });

    initPlayToggle(swiper);
  }

  // .swiper-button-play-toggle 클릭 시 재생/정지 상태를 토글합니다.
  // 기존 CSS에서 사용 중인 is-play / is-pause 클래스명을 그대로 사용하여 시각적 상태를 제어합니다.
  function initPlayToggle(swiperInstance) {
    var playToggle = document.querySelector('.swiper-button-play-toggle');
    if (!playToggle || !swiperInstance || !swiperInstance.autoplay) {
      return;
    }

    playToggle.addEventListener('click', function () {
      var isPlaying = playToggle.classList.contains('is-play');

      if (isPlaying) {
        swiperInstance.autoplay.stop();
        playToggle.classList.remove('is-play');
        playToggle.classList.add('is-pause');
      } else {
        swiperInstance.autoplay.start();
        playToggle.classList.remove('is-pause');
        playToggle.classList.add('is-play');
      }
    });
  }

  onDocumentReady(initSwiper);
})();
