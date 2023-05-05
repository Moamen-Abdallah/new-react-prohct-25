let btn=document.querySelector(".angle-down");
btn.onclick=()=>{
    document.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
    document.querySelector(".menu-bar").classList.toggle("menu")
}
let ptn = document.querySelector(".fixed");
window.onscroll=function(){
    if (window.scrollY >= 10 ) {
      ptn.style.right = "20px";
        ptn.style.opacity = "1";
    } else {
      ptn.style.opacity = "0";

    }
}
ptn.onclick=function(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
