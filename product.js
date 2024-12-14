const listItems = document.querySelectorAll(".featuresList li");

const listLength = listItems.length;
document.querySelector(".additional").style.setProperty("--list-length", listLength);




const listPictures = document.querySelector(".picture-list");
const mainImage = document.getElementById("main-image");

listPictures.addEventListener("click", (event) => {
    if(event.target.tagName === "IMG"){
        mainImage.src = event.target.src;
        mainImage.alt = event.target.alt;
    }
});
