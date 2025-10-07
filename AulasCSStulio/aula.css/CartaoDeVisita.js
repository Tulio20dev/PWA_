const luz = document.getElementById("luz")

window.addEventListener("mousemove", e => {
    luz.style.setProperty("--x", e.clientX +"px")
    luz.style.setProperty("--y", e.clientY +"px")
})