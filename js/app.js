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

//
//UI Transformation upon Hover
//

//Home Hover
function mouseOverHome(){
    home.style.transform = "scale(2)";
}
function mouseOutHome(){
    home.style.transform = "scale(1)";
}

//AboutMe Hover
function mouseOverAboutMe(){
    sun.style.width = "21vmin";
    sun.style.height = "21vmin";
    aboutMe.style.transform = "scale(2)";
}
function mouseOutAboutMe(){
    sun.style.width = "8vmin";
    sun.style.height = "8vmin";
    aboutMe.style.transform = "scale(1)";
}

//Checkers Hover
function mouseOverCheckers(){
    earth.style.width = "13vmin";
    earth.style.height = "13vmin";
    earth.style.animationPlayState = "paused"
    checkers.style.transform = "scale(2)";
}

function mouseOutCheckers(){
    earth.style.width = "5vmin";
    earth.style.height = "5vmin";
    earth.style.animationPlayState = "running"
    checkers.style.transform = "scale(1)";
}

//Movies Hover
function mouseOverMovies(){
    venus.style.width = "13vmin";
    venus.style.height = "13vmin";
    venus.style.animationPlayState = "paused"
    movies.style.transform = "scale(2)";
}

function mouseOutMovies(){
    venus.style.width = "5vmin";
    venus.style.height = "5vmin";
    venus.style.animationPlayState = "running"
    movies.style.transform = "scale(1)";
}

//
//UI transformation upon OnClick
//

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
    aboutMeSection.style.display = "block"

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
    checkersSection.style.display = "block"

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
    moviesSection.style.display = "block"

    //going through description class elements and setting all display:none
    for(i=0; i<description.length; i++){
        description[i].style.display = "list-item"
    }
    movies.style.display = "none";
}