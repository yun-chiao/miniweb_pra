const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-text");

var load = 0;
let int = setInterval(blurring, 30);

function blurring(){
    load++;
    console.log(load);
    text.textContent = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0); 
    bg.style.filter =  `blur(${scale(load, 0, 100, 15, 0)}px)`;
    if(load > 99){
        clearInterval(int);
    }
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
