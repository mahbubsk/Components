const btn   = document.querySelector(".wrap__btn");
const wrap  = document.querySelector(".wrap");
const popup = document.querySelector(".popup");
const close = document.querySelector(".popup__btn");


btn.addEventListener("click",function(){
    wrap.style.filter          = 'blur(5px)';
    wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.151)'
    popup.style.display = 'block';
})

close.addEventListener("click",function(){
    wrap.style.filter   = 'blur(0px)';
    popup.style.display = 'none';
})