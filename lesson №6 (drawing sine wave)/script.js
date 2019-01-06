const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
let x=0;

function drawSineWave(){
    y=200+50*Math.sin(x);
    if (x>=80){
        alert("Конец:)");
        return;
    } else{
        x+=.3;
    }
    ctx.beginPath();
    ctx.strokeStyle="purple";
    ctx.fillStyle="black";
    ctx.arc(x*5,y,3,0,2*Math.PI,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    requestAnimationFrame(drawSineWave);
}
window.onload = function () {
    drawSineWave();
};