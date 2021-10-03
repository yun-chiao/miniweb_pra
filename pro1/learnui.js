const panels = document.querySelectorAll(".panal");

panels.forEach((element) => {
    element.addEventListener('click', () => {
        removeactive();
        element.classList.add("active");
    })
})

function removeactive(){
    panels.forEach((element) => {
        element.classList.remove('active');
    })
}