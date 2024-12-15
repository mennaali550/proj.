let asnwer = document.querySelectorAll(".accordition");

asnwer.forEach((event)=>{
    event.addEventListener("click",()=>{
        if(event.classList.contains("active")){
            event.classList.remove("active");
        }
        else{
            event.classList.add("active")
        }
    })
})
