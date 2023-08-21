document.getElementById("close").addEventListener("click", () => {
    document.getElementById("container-notify").style = "left: -100%;"
})

document.addEventListener('DOMContentLoaded', function() {
    const targetDiv = document.getElementById("target-div");
    let targetDivPosition = targetDiv.offsetTop + targetDiv.clientHeight / 2; // Target div center

    function loadStructureWhenDivVisible() {
        if (window.pageYOffset + window.innerHeight >= targetDivPosition) {
            // Place your code to load the structure when the div is reached
        document.getElementById("container-notify").style = "left: 5px;"
        }
    }

    // Add a listener for the scroll event
    window.addEventListener('scroll', loadStructureWhenDivVisible);

    // Call the function to check at the start in case the div is already visible
    loadStructureWhenDivVisible();
});

