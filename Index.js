const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

let btnsubmit = document.querySelector(".submit-data");
btnsubmit.addEventListener("click", (e)=>
{
    e.preventDefault();
    if(toFahrenheit.checked)
    {
        temp = textBox.value;
        temp = (temp * 9/5) + 32;
        result.textContent = temp.toFixed(1) + "0F";
    }
    else if(toCelsius.checked)
    {
        temp = textBox.value;
        temp = (temp - 32) * 5/9;
        result.textContent = temp.toFixed(1) + "0C";
    }
    else
    {
        result.textContent = "Select a unit";
    }
});
