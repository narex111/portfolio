//Elements
const home = document.getElementById("home")

const sun = document.getElementById("sun")
const aboutMe = document.getElementById("aboutMe")

const earth = document.getElementById("earth")
const checkers = document.getElementById("checkers")

const venus = document.getElementById("venus")
const movies = document.getElementById("movies")


const system = document.getElementById("system")
const main = document.getElementsByClassName("main")
const description = document.getElementsByClassName("description")
const aboutMeSection = document.getElementById("aboutMeSection")
const checkersSection = document.getElementById("checkersSection")
const moviesSection = document.getElementById("moviesSection")

const email = document.getElementById("email")
const phone = document.getElementById("phone")


//
//UI Transformation upon Hover
//

//Home Hover
function mouseOverHome(){
    home.style.transform = "scale(1.5)";
}
function mouseOutHome(){
    home.style.transform = "scale(1)";
}

//AboutMe Hover
function mouseOverAboutMe(){
    sun.style.width = "13vmin";
    sun.style.height = "13vmin";
    aboutMe.style.transform = "scale(1.5)";
}
function mouseOutAboutMe(){
    sun.style.width = "8vmin";
    sun.style.height = "8vmin";
    aboutMe.style.transform = "scale(1)";
}

//Checkers Hover
function mouseOverCheckers(){
    earth.style.width = "8vmin";
    earth.style.height = "8vmin";
    earth.style.animationPlayState = "paused"
    checkers.style.transform = "scale(1.5)";
}

function mouseOutCheckers(){
    earth.style.width = "5vmin";
    earth.style.height = "5vmin";
    earth.style.animationPlayState = "running"
    checkers.style.transform = "scale(1)";
}

//Movies Hover
function mouseOverMovies(){
    venus.style.width = "8vmin";
    venus.style.height = "8vmin";
    venus.style.animationPlayState = "paused"
    movies.style.transform = "scale(1.5)";
}

function mouseOutMovies(){
    venus.style.width = "5vmin";
    venus.style.height = "5vmin";
    venus.style.animationPlayState = "running"
    movies.style.transform = "scale(1)";
}

//Home Click
function homeClick(){
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
    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    aboutMeSection.style.display = "grid"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    aboutMe.style.display = "none";
}

//Checkers Click
function checkersClick(){
    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    checkersSection.style.display = "grid"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    checkers.style.display = "none";
}

//Movies Click
function moviesClick(){
    //going through main class elements and setting all display:none
    for(i=0; i<main.length; i++){
        main[i].style.display = "none"
    }
    moviesSection.style.display = "grid"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    movies.style.display = "none";
}

function phoneClick(){
    //toggling phone (and email if needed)
    if(phone.style.display === "none"){
        phone.style.display = "inline"
        email.style.display = "none"
    }else{
        phone.style.display = "none"
    } 
}

function emailClick(){
    //toggling email (and phone if needed)
    if(email.style.display === "none"){
        email.style.display = "inline"
        phone.style.display = "none"
    }else{
        email.style.display = "none"
    } 
}

