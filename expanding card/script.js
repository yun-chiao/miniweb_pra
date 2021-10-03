const doms = document.querySelectorAll(".pic");
console.log(doms);

doms.forEach((element) => {
    element.addEventListener("click",()=>{

        doms.forEach((rm_element) => {
            rm_element.classList.remove("active");
        })
        element.classList.add("active");
    }) 
})