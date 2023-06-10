document.querySelector("#toggle-theme").addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme")
})

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const scrollDown = document.querySelector("#scroll-down")

if(prefersLight) {
    document.documentElement.classList.add("light-theme");
}

scrollDown.addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector("#about-me").offsetTop - 20,
    })
})
