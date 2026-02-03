const tanyaQ = document.querySelector(".tanyaQ");
const johnQ = document.querySelector(".johnQ");
const buttons = document.querySelectorAll("button");
const profileImages = document.querySelectorAll(".slider > img");

const imageContainer = document.querySelector(".img-container");
const slider = document.querySelector(".slider");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (btn.className === "prev") {
            slider.style.left = "0px";
            tanyaQ.classList.remove("hide");
            johnQ.classList.remove("show");
        } else {
            slider.style.left = "calc(-100% - 10px)";
            tanyaQ.classList.add("hide");
            johnQ.classList.add("show");
        }
    });
});
