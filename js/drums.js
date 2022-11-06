removeTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll('.key')
Array.from(keys).forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



keys.forEach(key => key.addEventListener('click', () => {
  console.log(key)

  const dataKey = key.className.split(" ")[1]
  // better

  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}));
