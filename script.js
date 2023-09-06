// Add a click event to all close buttons
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((button) => {
    button.addEventListener("click", (evt) => {
        evt.target.parentNode.style.left = "-100%";
    });
});

// Add a click event to all close buttons
var contentLoaded = false;
const popupContainers = [...document.querySelectorAll(".container-notify")]
window.addEventListener("scroll", function() {
    if (contentLoaded == false) {
        const scrollPercentage =  (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 50) {
            popupContainers.forEach((container) => {
                container.style.left = "5px";
            })
            contentLoaded = true;
        }
    }
});
