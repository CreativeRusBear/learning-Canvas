const canvas=document.getElementById("canvas"),
    ctx=canvas.getContext("2d");
let stepCount=0,
    timer,
    direction = new Array (5);
x = [], y=[], mouseX=200, mouseY=200;

window.onload=function (){
    ctx.fillStyle='orange';
    ctx.strokeStyle='black';
    for (let i = 0; i < direction.length; i++) {
        x[i]=canvas.offsetWidth/2;
        y[i]=canvas.offsetHeight/2;
    }
    drawDots();
    canvas.onmousemove = function (event) {
        mouseX=event.offsetX;
        mouseY=event.offsetY;
    };
};

function drawDots() {
    ctx.clearRect(0,0,400,400);
    if (stepCount==0) {
        stepCount = Math.floor(Math.random() * 51);
        for (let i=0; i<direction.length; i++){
            direction[i] = Math.floor(Math.random() * 7);
        }
    }else{
        stepCount--;
    }
    direction.forEach(function(data,index){
        switch (data) {
            //вверх
            case 0:
                y[index]--;
                break;
            //направо
            case 1:
                x[index]++;
                break;
            //вниз
            case 2:
                y[index]++;
                break;
            //налево
            case 3:
                x[index]--;
                break;
            case 4:
                //вверх направо
                x[index]++;y[index]--;
                break;
            case 5:
                //вниз направо
                x[index]++;y[index]++;
                break;
            case 6:
                //вниз налево
                x[index]--;y[index]++;
                break;
            case 7:
                //вверх налево
                x[index]--;y[index]--;
                break;
        }
    });
    if (x[0]<=0 || x[1]<=0 || x[2]<=0 || x[3]<=0 || x[4]<=0 ||
        y[0]<=0 || y[1]<=0 || y[2]<=0 || y[3]<=0 || y[4]<=0 ||
        x[0]>=400 || x[1]>=400 || x[2]>=400 || x[3]>=400 || x[4]>=400 ||
        y[0]>=400 || y[1]>=400 || y[2]>=400 || y[3]>=400 || y[4]>=400){
        stepCount=0;
    }
    for (let i = 0; i < direction.length; i++) {
        ctx.beginPath();
        ctx.arc(x[i],y[i],3,0, 2*Math.PI,false);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.moveTo(x[i],y[i]);
        ctx.lineTo(mouseX,mouseY);
        ctx.closePath();
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(x[0],y[0]);
    for (let i = 1; i < direction.length; i++) {
        ctx.lineTo(x[i],y[i]);
    }
    ctx.closePath();
    ctx.stroke();
    timer = setTimeout(drawDots, 40);
}