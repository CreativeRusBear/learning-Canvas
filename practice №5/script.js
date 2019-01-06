const canvas=document.getElementById("canvas"),
    ctx=canvas.getContext("2d");
let mouseX,mouseY;
window.onload= function () {
    drawDots();
    canvas.onmousemove = function (event) {
        mouseX=event.offsetX;
        mouseY=event.offsetY;
    };
};
function drawDots() {
    ctx.clearRect(0,0,400,400);
    ctx.beginPath();
    ctx.setLineDash([3]);
    ctx.arc(mouseX,mouseY,60,0,2*Math.PI, false);
    ctx.stroke();
    requestAnimationFrame(drawDots);
}