const brandLogos = document.querySelectorAll('[alt="brand-logo"]')

const URLS = [
    'https://heroku-g17j.onrender.com/',
    'https://three00-k3uu.onrender.com/',
    'https://www.npmjs.com/package/cambricheame',
    'https://vegadelalyra.github.io/TODO_LIST_TypeScript_Vite/'
]

brandLogos.forEach(brandLogo => brandLogo.onclick = () => {
    Swal.fire({
        title: 'BE WARE!',
        text: 'You will be redirected to other projects of mine!',
        icon: 'warning',
        confirmButtonText: 'Proceed',
      })
})