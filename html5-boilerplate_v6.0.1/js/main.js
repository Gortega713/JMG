var navAnimated = document.getElementsByClassName("containerN")[0];
            
function openNav(){
    navAnimated.classList.add("change");
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
    navAnimated.addEventListener("click", closeNav);
    navAnimated.removeEventListener("click", openNav);
    navAnimated.style.backgroundColor = "rgba(173, 216, 230, 0)";
}

function closeNav(){
    navAnimated.classList.remove("change");
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0)";
    navAnimated.addEventListener("click", openNav);
    navAnimated.removeEventListener("click", closeNav);
    navAnimated.style.backgroundColor = "rgba(173, 216, 230, 1)";

}

navAnimated.addEventListener("click", openNav);
