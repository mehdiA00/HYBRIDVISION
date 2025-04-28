document.addEventListener('DOMContentLoaded', () => {
  const clap = document.querySelector('.clap');
  const loader = document.getElementById('clap-loader');
  const introText = document.getElementById('intro-text');
  const skipBtn = document.getElementById('skip');
  const introMusic = document.getElementById('intro-music');

  // Quand on clique sur le clap
  clap.addEventListener('click', () => {
    clap.style.display = 'none';
    introText.style.opacity = 1;
    introMusic.play();
    skipBtn.style.display = 'block';

    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.transition = 'opacity 2s ease';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 2000);
    }, 4000); // reste 4 secondes après le clic
  });

  // Skip bouton
  skipBtn.addEventListener('click', () => {
    introMusic.pause();
    loader.style.display = 'none';
  });
});
