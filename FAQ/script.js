var doms = document.querySelectorAll(".faq-toggle");

console.log(doms)
doms.forEach((element) => {

    element.addEventListener("click",() => {
        if(element.classList.contains("active")){
            element.parentNode.classList.remove("active");
            element.classList.remove("active");
        }
        else{
            element.parentNode.classList.add("active");
            element.classList.add("active");
        }
    })
})
