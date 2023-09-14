function updatePopUp() {
    let screen = window.innerWidth;
    let bottomOffset = 10; 
    const popupElements = document.querySelectorAll(".container-notify:not([my-data])");

    popupElements.forEach((container, index) => {
        if (screen > 700) {
            container.style = `left: 5px; transform: translateX(0%); bottom: ${bottomOffset}px;`;
        } else {
            container.style = `left: 50%; transform: translateX(-50%); bottom: ${bottomOffset}px;`;
        }

        bottomOffset += container.offsetHeight + 40; 
    });
}

// Add a click event to all close buttons
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        const removedContainer = evt.target.parentNode;
        removedContainer.setAttribute("my-data", "0");
        removedContainer.style.left = "-100%";
        updatePopUp();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const POPUPS = document.querySelectorAll('.container-notify');

    if (POPUPS.length > 0) {
        const POSITION = document.getElementById("popup-position");
        POPUPS.forEach(function (popup) {
            POSITION.appendChild(popup);
        });
        document.getElementById("container-notifies").remove()
    }
});

// Add a click event to all close buttons
var contentLoaded = false;
const popupContainers = [...document.querySelectorAll(".container-notify")]
window.addEventListener("scroll", function() {
    if (contentLoaded == false) {
        const scrollPercentage =  (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 50) {
            updatePopUp()
            contentLoaded = true;
        }
    }
});

window.addEventListener("resize", (evt) => {
    updatePopUp()
})
