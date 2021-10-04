var doms = document.querySelectorAll(".note");

doms.forEach(element => {
    element.addEventListener("click",()=>{
        element.querySelector(".main-text").querySelector('p').innerText = "black";
    })
});