const canvas = document.querySelector("canvas");
const input = document.querySelector("input");
const ctx = canvas.getContext("2d");

canvas.addEventListener("click", function() {
    ctx.fillRect(0, 0, input.value, input.value); 
});