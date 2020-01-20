//
//UI Transformation upon Hover
//

//Home Hover
function mouseOverHome(){
    const home = document.getElementById("home")

    home.style.transform = "scale(2)";
}
function mouseOutHome(){
    const home = document.getElementById("home")

    home.style.transform = "scale(1)";
}

//AboutMe Hover
function mouseOverAboutMe(){
    const sun = document.getElementById("sun")
    const aboutMe = document.getElementById("aboutMe")

    sun.style.width = "21vmin";
    sun.style.height = "21vmin";
    aboutMe.style.transform = "scale(2)";
}
function mouseOutAboutMe(){
    const sun = document.getElementById("sun")
    const aboutMe = document.getElementById("aboutMe")

    sun.style.width = "8vmin";
    sun.style.height = "8vmin";
    aboutMe.style.transform = "scale(1)";
}

//Checkers Hover
function mouseOverCheckers(){
    const earth = document.getElementById("earth")
    const checkers = document.getElementById("checkers")

    earth.style.width = "13vmin";
    earth.style.height = "13vmin";
    checkers.style.transform = "scale(2)";
}

function mouseOutCheckers(){
    const earth = document.getElementById("earth")
    const checkers = document.getElementById("checkers")

    earth.style.width = "5vmin";
    earth.style.height = "5vmin";
    checkers.style.transform = "scale(1)";
}

//Movies Hover
function mouseOverMovies(){
    const venus = document.getElementById("venus")
    const movies = document.getElementById("movies")

    venus.style.width = "13vmin";
    venus.style.height = "13vmin";
    movies.style.transform = "scale(2)";
}

function mouseOutMovies(){
    const venus = document.getElementById("venus")
    const movies = document.getElementById("movies")

    venus.style.width = "5vmin";
    venus.style.height = "5vmin";
    movies.style.transform = "scale(1)";
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