var line = document.querySelector(".act-line");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var doms = document.querySelectorAll(".circle");
var n = 3;
var current = 1;
var percent = 100 / n;


next.addEventListener(("click"),() => {
    if(current === 0){
        prev.classList.remove("disable");
    }
    if(current !== n){
        current = current + 1;
        line.style.width = `${current*100/3}%`;
        doms[current].classList.add("active");
    }
    if(current === n){
        next.classList.add("disable");
    }
})


prev.addEventListener(("click"),() => {
    if(current === n){
        next.classList.remove("disable");
    }
    if(current !== 0){
        current = current - 1;
        line.style.width = `${current*100/3}%`;
        doms[current+1].classList.remove("active");
    }
    if(current === 0)prev.classList.add("disable");

})
