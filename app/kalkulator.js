const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const convert_button = document.getElementById("button_convert");
const resultText = document.querySelector(".result__text");
const api_url = "/app/json/data.json";

async function getJson(api_url) {
  const request = new Request(api_url);

  const response = await fetch(request);
  let readyJson = await response.text();
  readyJson = await JSON.parse(readyJson);

  convert_button.addEventListener("click", () => {
    let result = 0;
    if (to.value == "PLN" && from.value == "PLN") {
      result = amount.value;
    } else if (to.value == "PLN") {
      result = (amount.value / readyJson.rates[from.value]).toFixed(2);
    } else if (from.value == "PLN") {
      result = (amount.value * readyJson.rates[to.value]).toFixed(2);
    } else {
      result = (
        (amount.value / readyJson.rates[from.value]) *
        readyJson.rates[to.value]
      ).toFixed(2);
    }
    resultText.innerText = `${amount.value} ${from.value} is ${result} ${to.value}`;
    resultText.classList.remove("result__text--disabled");
  });
}
getJson(api_url);
