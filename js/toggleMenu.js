
const button = document.getElementsByClassName('mobile-menu-button')[0];
const openIcon = document.getElementsByClassName("open-icon")[0];
const closeIcon = document.getElementsByClassName("close-icon")[0];
const opacityLayer = document.getElementsByClassName("opacity-layer")[0];

let isClicked = false;

// This function is called when html button is pressed
function openCloseMenu () {
    const menu = document.getElementById("menu-content");

    if(isClicked == false) {
        isClicked = true;
        menu.style.transform = "scaleX(1)";
        menu.style.right = "0px";
        opacityLayer.style.display = "block";
        opacityLayer.style.opacity = "100%";
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else if(isClicked == true) {
        isClicked = false;
        menu.style.transform = "scaleX(0)";
        menu.style.right = "-40vw";
        opacityLayer.style.display = "none";
        opacityLayer.style.opacity = "0";
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
}


function closeIfOpen() {
    if(isClicked == true)
        openCloseMenu()
}