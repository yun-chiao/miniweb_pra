var line = document.querySelector(".act-line");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var n = 3;
var current = 1;
var percent = 100 / n;
next.addEventListener(("click"),() => {
    current = current + 1;
    line.style.width = `${current*100/3}%`;
    if(current === n){
        next.classList.add("disable");
    }
})

prev.addEventListener(("click"),() => {
    current = current - 1;
    line.style.width = `${current*100/3}%`;
    if(current === 0){
        prev.classList.add("disable");
    }
})