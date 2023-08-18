const logo = document.querySelector('[alt="logo"]')

const confetti = new JSConfetti()
const yaySound = document.querySelector('#yay')
const confettiSound = document.querySelector('#confetti')

logo.onclick = async () => await Promise.all([
        confetti.addConfetti(),
        yaySound.play(),
        confettiSound.play()
])



const memeSound = document.querySelector('#meme')
const hypeSound = document.querySelector('#hype')
const xdSound = document.querySelector('#xd')

export async function playConfetti (github = false) {
    const yay = github ? memeSound : hypeSound

    if (github) setTimeout(() => xdSound.play(), 1_100)

    await Promise.all([
        confetti.addConfetti(),
        yay.play(),
        confettiSound.play()
    ])
}