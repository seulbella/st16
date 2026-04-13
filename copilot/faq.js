// FAQ 아코디언 UI
// 기본은 아코디언 콘텐츠는 숨김
// 클릭 시 해당 콘텐츠만 표시하고 나머지는 숨김
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isActive = content.style.display === 'block';
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    content.style.display = isActive ? 'none' : 'block';
  });
});