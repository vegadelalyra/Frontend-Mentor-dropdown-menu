const logo = document.querySelector('[alt="logo"]')

const confetti = new JSConfetti()
const yaySound = document.querySelector('#yay')
const confettiSound = document.querySelector('#confetti')

logo.onclick = () => {
    confetti.addConfetti()
    yaySound.play()
    confettiSound.play()
}