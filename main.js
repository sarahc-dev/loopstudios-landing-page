document.querySelector(".open").addEventListener("click", () => {
    document.querySelector(".responsive-nav").style.paddingTop = "50%";
    document.querySelector(".responsive-nav").style.height = "100vh";
    document.querySelector(".close").classList.remove("hidden");
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".responsive-nav").style.paddingTop = "0";
    document.querySelector(".responsive-nav").style.height = "0";
    document.querySelector(".close").classList.add("hidden");
})