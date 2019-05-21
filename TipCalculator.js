const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");

button.addEventListener("click", function (){
    let tip15 = (cost.value * 0.15).toFixed(2);
    let tip18 = (cost.value * 0.18).toFixed(2);
    let tip20 = (cost.value * 0.20).toFixed(2);
    let temp = `<h2> 15% $${tip15}<br> 18% $${tip18} <br> 20% $${tip20}</h2>`
    output.innerHTML = temp;
});