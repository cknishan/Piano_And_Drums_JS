"use strict"

// removes the class of playing from the drum element
// this function is called on the 'transitionend' eventListener
removeTransition = (e) => {
  // if there's no 'transform' property return
  if (e.propertyName !== 'transform') return;
  // else remove the class from the element to return to previous state of the drum button
  e.target.classList.remove('playing');
}

// this function plays the audio audio play function plays the corresponding drum sound
playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0; // resets the time
  audio.play();
}

// following three lines pretty self-explanatory after reading teh above lines of codes
const keys = document.querySelectorAll('.key')
// Array.from(keys) is important 
Array.from(keys).forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// plays the sound by clicking
keys.forEach(key => key.addEventListener('click', () => {
  // console.log(key)

  // recieves the dataKey-number from the class of the element
  // see the html tag to understand properly
  const dataKey = key.className.split(" ")[1]

  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}));
