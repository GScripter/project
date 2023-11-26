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
        if (scrollPercentage >= 43) {
            updatePopUp()
            contentLoaded = true;
        }
    }
});


// cards_p
let cards = [...document.getElementsByClassName("card-body")]

cards.map(i => {
    // Create new div elements
    const newTag = document.createElement('div');
    const newTag2 = document.createElement('div');

    // Style the new div elements
    newTag.style.cssText = "margin-bottom: 20px; opacity: .7; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; font-size: 17px;";
    newTag2.style.cssText = "margin: 12px 0 0 0 !important; font-size: 13px !important; opacity: .7;";

    // Get all paragraph elements within the card
    const ps = [...i.getElementsByTagName("p")]

    // Iterate over the paragraph elements
    ps.map((el, index) => {
        if(index == 0){
            newTag.innerHTML = el.innerHTML;
            i.insertBefore(newTag, el);
        } else {
            newTag2.innerHTML = el.innerHTML;
            i.getElementsByClassName("btn-container")[0].appendChild(newTag2);
        }

        // Remove the paragraph element
        el.remove();
    })
})
