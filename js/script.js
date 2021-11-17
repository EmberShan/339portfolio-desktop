const toggleButton = document.getElementsByClassName("hamburger-menu")[0]
const Links = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
    Links.classList.toggle('active')
})
