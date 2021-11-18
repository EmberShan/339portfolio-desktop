const toggleButton = document.getElementsByClassName("hamburger-menu")[0]
const Links = document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click', () => {
    Links.classList.toggle('active')
})

// impressionism scroll animation
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // if reduced motion then don't perform the scroll animation
        if (!(!mediaQuery || mediaQuery.matches)){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    // console.log(mediaQuery)
    });
  });