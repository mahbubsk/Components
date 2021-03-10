const btn     = document.querySelector(".btn");
const sidenav = document.querySelector(".sidenav");


btn.addEventListener("click",toggle)


function toggle(){
    sidenav.classList.toggle('active');
    btn.classList.toggle('active');
}   