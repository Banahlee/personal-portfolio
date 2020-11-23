window.addEventListener("scroll",  () => {
    let nav = document.querySelector("nav");
    nav.classList.toggle("scrolling-nav", window.scrollY > 0)
})

