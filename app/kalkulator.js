const amount = document.getElementById("amount")
const from = document.getElementById("from")
const to = document.getElementById("to")
const convert_button = document.getElementById("button_convert")
const api_url = '/app/json/data.json';

// convert_button.addEventListener('click', function(){
    
// })
// let dane = fetch("/app/json/data.json").then(response => {
    
//     return response.json();
// }).then(response => {
//     console.log(response)
// });

// console.log(dane)



async function getRates(){
    const response = await fetch(api_url);
    const data = await response.json();
    

}

