const buttons = document.querySelectorAll('.nav__button');

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (button.classList.contains("btn_active") != true){
            buttons.forEach((item)=>{
                if (item.classList.contains("btn_active") == true){
                    item.classList.remove("btn_active");
                }
            });

            button.classList.add("btn_active");
        }
    })
})
