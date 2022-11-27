"use strict" 

const pianoKeys = document.querySelectorAll('.key')

// some of the notes don't sound the same so had to break the serial
const notes = ["e3","f3","f-3","g3","g-3","a4","a-4","b3","c4","c-4","d4","d-4","e4","f4","f-4","g4","g-4","a5","a-5","b5"]

/**
 * plays an audio file
 * @param {string} newUrl a urllink which will be played
 */
function playSound(newUrl) {
    // console.log(newUrl)
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const newUrl = '../sounds/piano_sounds/' + notes[i] + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})