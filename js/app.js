function mouseOverCheckers(){
    document.getElementById("earth").style.width = "34px";
    document.getElementById("earth").style.height = "34px";
    console.log("chekcers hovered")
}

function mouseOutCheckers(){
    document.getElementById("earth").style.width = "13px";
    document.getElementById("earth").style.height = "13px";
    console.log("chekcers outhovered");
}

function mouseOverAboutMe(){
    document.getElementById("sun").style.width = "80px";
    document.getElementById("sun").style.height = "80px";
}
function mouseOutAboutMe(){
    document.getElementById("sun").style.width = "45px";
    document.getElementById("sun").style.height = "45px";
}

console.log("js connected")