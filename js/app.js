function mouseOverCheckers(){
    document.getElementById("earth").style.width = "34px";
    document.getElementById("earth").style.height = "34px";
    document.getElementById("checkers").style.transform = "scale(2)";
}

function mouseOutCheckers(){
    document.getElementById("earth").style.width = "13px";
    document.getElementById("earth").style.height = "13px";
    document.getElementById("checkers").style.transform = "scale(1)";
}

function mouseOverAboutMe(){
    document.getElementById("sun").style.width = "80px";
    document.getElementById("sun").style.height = "80px";
    document.getElementById("aboutMe").style.transform = "scale(2)";
}
function mouseOutAboutMe(){
    document.getElementById("sun").style.width = "45px";
    document.getElementById("sun").style.height = "45px";
    document.getElementById("aboutMe").style.transform = "scale(1)";
}