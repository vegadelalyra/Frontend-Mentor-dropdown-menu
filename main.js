import './src/logoConfeti.js'

const desktopNavLinks = document.querySelectorAll(".nav-links li")
const hamburguerMenuButton = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const overflow = document.querySelector(".overflow")
const mobileNavLinks = document.querySelectorAll(".mobile-links li")

hamburguerMenuButton.addEventListener("click", () => {
    const icon = document.querySelector(".mobile-menu-btn img")
    
    hamburguerMenuButton.classList.toggle("active-btn")
    mobileMenu.classList.toggle("active-menu")
    overflow.classList.toggle("active-menu")

    const hamburguerMenuClicked = hamburguerMenuButton.classList.contains("active-btn")

    if (hamburguerMenuClicked) return icon.src = "./images/icon-close-menu.svg"
    return icon.src = "./images/icon-menu.svg"
})


desktopNavLinks.forEach(link => toggleNavSubMenusDisplay(link, '.sub-menu'))
mobileNavLinks.forEach(link => toggleNavSubMenusDisplay(link, '.mobile-sub'))

function toggleNavSubMenusDisplay(link, subMenuSelector) {
    const linkSubMenu = link.querySelector('.dropDownNavLink')
    const subMenu = link.querySelector(subMenuSelector)

    link.onclick = () => {
        if (link.innerText == 'Careers' || link.innerText == 'About') return

        linkSubMenu.classList.toggle("active")
        linkSubMenu.classList.toggle("dropDownNavLink")
        subMenu.classList.toggle("active-menu")
    }
}  