document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let frame = Math.min(10, Math.floor(scrollTop / 50)); // Ajuste o número de frames
    document.querySelector(".scroll-animation").style.backgroundPosition = `-${frame * 100}px 0px`;
});
