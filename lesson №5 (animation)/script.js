const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
let x = canvas.offsetWidth/2,
    y = canvas.offsetHeight/2,
    stepCount=0,//кол-во шагов
    direction,//напрвление
    mouseX, mouseY;

window.onload = function () {
    drawDot();
    canvas.onmousemove =function (event) {
        mouseX= event.offsetX;
        mouseY = event.offsetY;
    };
    canvas.onclick = function () {
        x=mouseX;
        y=mouseY;
    }
};

function drawDot() {
    ctx.clearRect(0,0, canvas.offsetWidth, canvas.offsetHeight);
    if (stepCount==0){
        stepCount=Math.floor(Math.random()*16);
        direction = Math.floor(Math.random()*8);
    } else{
        stepCount--;
    }
    switch (direction) {
            //вверх
        case 0:
            y--;
            break;
            //направо
        case 1:
            x++;
            break;
            //вниз
        case 2:
            y++;
            break;
            //налево
        case 3:
            x--;
            break;
        case 4:
            //вверх направо
            x++;y--;
            break;
        case 5:
            //вниз направо
            x++;y++;
            break;
        case 6:
            //вниз налево
            x--;y++;
            break;
        case 7:
            //вверх налево
            x--;y--;
            break;
    }
    if (x<=0 || y<=0 || x>=400 || y>=200){
        stepCount=0;
    }
    ctx.beginPath();
    ctx.fillStyle='orange';
    ctx.strokeStyle='black';
    ctx.arc(x,y,3,0, 2*Math.PI,false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(mouseX,mouseY);
    ctx.stroke();
    requestAnimationFrame(drawDot);
}