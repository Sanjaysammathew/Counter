let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let display = document.querySelector(".display")
let numvalue = display.textContent
let value = parseInt(numvalue,10)

increase.addEventListener("click",function(){
    display.textContent=" "
    display.textContent=value++
})

decrease.addEventListener("click",function(){
    display.textContent=" "
    display.textContent=value--
})

reset.addEventListener("click",function(){
    display.textContent=" "
    display.textContent=0
})