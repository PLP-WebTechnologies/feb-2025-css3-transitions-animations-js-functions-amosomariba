// Run when page loads
window.onload = function () {
    const savedColor = localStorage.getItem('favoriteColor');
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      document.getElementById('colorInput').value = savedColor;
    }
  };
  
  // Save color to localStorage and apply it
  function saveColor() {
    const color = document.getElementById('colorInput').value;
    localStorage.setItem('favoriteColor', color);
    document.body.style.backgroundColor = color;
  }
  
  // Animate the box using CSS animation
  function startAnimation() {
    const box = document.getElementById('animatedBox');
    box.classList.remove('animate'); // remove first
    void box.offsetWidth; // reflow to re-trigger animation
    box.classList.add('animate'); // add again to animate
  }
  