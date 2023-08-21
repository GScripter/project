document.getElementById("close").addEventListener("click", () => {
    document.getElementById("container-notify").style = "left: -100%;"
})

var contentLoaded = false;
window.addEventListener("scroll", function() {
    if (contentLoaded == false){
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage >= 50) {
            document.getElementById("container-notify").style = "left: 5px;"
            contentLoaded = true;
        }
    }
});
