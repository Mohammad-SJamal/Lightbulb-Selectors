// Write your code here

// let bulb1 = document.querySelector('#lightbulb1');
// let bulb2 = document.querySelector("#lightbulb2");
// let bulb3 = document.querySelector("#lightbulb3");

let sub = document.querySelector("h3", ".subtitle");

let count = 0;

// bulb1.addEventListener("click", function(){
//     bulb1.classList.toggle("active");
// })

const bulbs = document.querySelectorAll('#lightbulb')

bulbs.forEach(bulb => {
    bulb.addEventListener("click", () => {
        bulb.classList.toggle("active");
        count++;
        sub.innerHTML = `You've clicked the lights ${count} times`;
    })
    
})