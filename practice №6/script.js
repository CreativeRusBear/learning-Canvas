const canvas = document.getElementById("canvas"),
      ctx= canvas.getContext("2d");
let x=0;
function drawTangensoid(){
    sin = Math.sin(x);
    cos = Math.cos(x);
    y = sin/cos;
    x+=.5;
    ctx.beginPath();
    ctx.fillStyle="green";
    ctx.strokeStyle="red";
    ctx.arc(x*5, 200+50*y, 3, 0 , 2*Math.PI, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    requestAnimationFrame(drawTangensoid);
};

window.onload = function () {
    drawTangensoid();
};