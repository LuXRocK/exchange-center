const buttons = document.querySelectorAll('.nav__button');
const first_page = document.querySelector(".first_page");
const second_page = document.querySelector(".second_page");
const third_page = document.querySelector(".third__page");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (button.classList.contains("btn_active") != true){
            buttons.forEach((item)=>{
                if (item.classList.contains("btn_active") == true){
                    item.classList.remove("btn_active");
                }
            });

            if(button.classList.contains("first")){
                first_page.classList.remove("disabled");
                second_page.classList.contains("disabled") ? true : second_page.classList.add("disabled");
                third_page.classList.contains("disabled") ? true : third_page.classList.add("disabled");
            }

            if(button.classList.contains("second")){
                second_page.classList.remove("disabled");
                first_page.classList.contains("disabled") ? true : first_page.classList.add("disabled");
                third_page.classList.contains("disabled") ? true : third_page.classList.add("disabled");
            }

            if(button.classList.contains("third")){
                third_page.classList.remove("disabled");
                first_page.classList.contains("disabled") ? true : first_page.classList.add("disabled");
                second_page.classList.contains("disabled") ? true : second_page.classList.add("disabled");
            }

            button.classList.add("btn_active");
        }
    })
})
