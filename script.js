const tanyaQ = document.querySelector(".tanyaQ");
const johnQ = document.querySelector(".johnQ");
const buttons = document.querySelectorAll("button");
const profileImages = document.querySelectorAll(".img-container > img");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (btn.className === "prev") {
            offset = profileImages[0].clientWidth + 20;
            tanyaQ.classList.add("hide");
            johnQ.classList.add("show");
        } else {
            offset = 0;
            tanyaQ.classList.remove("hide");
            johnQ.classList.remove("show");
        }

        profileImages.forEach((img) => {
            img.style.transform = `translateX(${-offset}px)`;
        });
    });
});
