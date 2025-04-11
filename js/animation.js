document.addEventListener('DOMContentLoaded', function() {
  // Stem animation
  const stem = document.getElementById('stem');
  setTimeout(() => {
    stem.style.transition = 'stroke-dashoffset 2s ease-in-out';
    stem.style.strokeDashoffset = '0';
  }, 500);
  
  // Leaves animation
  const leaf1 = document.getElementById('leaf1');
  const leaf2 = document.getElementById('leaf2');
  setTimeout(() => {
    leaf1.style.transition = 'opacity 1s ease-in-out';
    leaf1.style.opacity = '1';
  }, 1500);
  setTimeout(() => {
    leaf2.style.transition = 'opacity 1s ease-in-out';
    leaf2.style.opacity = '1';
  }, 1800);
  
  // Stamen animation
  const stamen = document.querySelector('.stamen');
  const anther = document.querySelector('.anther');
  setTimeout(() => {
    stamen.style.transition = 'opacity 0.8s ease-in-out';
    stamen.style.opacity = '1';
    anther.style.transition = 'opacity 0.8s ease-in-out';
    anther.style.opacity = '1';
  }, 2000);
  
  // Petal animations
  const petals = document.querySelectorAll('.petal');
  petals.forEach((petal, index) => {
    setTimeout(() => {
      petal.style.transition = 'opacity 0.8s ease-in-out';
      petal.style.opacity = '1';
    }, 2200 + (index * 150));
  });
  
  // Detail animations
  const details = document.querySelectorAll('.detail');
  details.forEach((detail, index) => {
    setTimeout(() => {
      detail.style.transition = 'opacity 0.8s ease-in-out';
      detail.style.opacity = '1';
    }, 3000 + (index * 150));
  });
  
  // Create floating hearts
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
  
  // Set interval to create hearts
  setInterval(createHeart, 2000);
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 10 + 5) + 's';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  document.body.appendChild(heart);
  
  // Clean up hearts after animation
  setTimeout(() => {
    heart.remove();
  }, 15000);
}
