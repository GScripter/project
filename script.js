document.getElementById("close").addEventListener("click", () => {
    document.getElementById("container-notify").style = "left: -100%;"
})

function notify(){
    document.getElementById("container-notify").style = "left: 5px;"
}

setTimeout(notify, 5000);
