//
//UI Transformation upon HOVER
//

//Home Hover
function mouseOverHome(){
    document.getElementById("home").style.transform = "scale(2)";
}
function mouseOutHome(){
    document.getElementById("home").style.transform = "scale(1)";
}

//AboutMe Hover
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

//Checkers Hover
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


//
//UI transformation upon OnClick
//

//Home Click
function homeClick(){
    const system = document.getElementById("system")
    const main = document.getElementsByClassName("main")
    const home = document.getElementById("home")
    const description = document.getElementsByClassName("description")

    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    system.style.display = "block"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    home.style.display = "none";

    console.log(main)
}

//About Me Click
function aboutMeClick(){
    const aboutMeSection = document.getElementById("aboutMeSection")
    const main = document.getElementsByClassName("main")
    const aboutMe = document.getElementById("aboutMe")
    const description = document.getElementsByClassName("description")

    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    aboutMeSection.style.display = "block"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    aboutMe.style.display = "none";
}

//Checkers Click
function checkersClick(){
    const checkersSection = document.getElementById("checkersSection")
    const main = document.getElementsByClassName("main")
    const checkers = document.getElementById("checkers")
    const description = document.getElementsByClassName("description")

    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    checkersSection.style.display = "block"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    checkers.style.display = "none";
}