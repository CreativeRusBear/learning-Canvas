const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

window.onload = function () {
    ctx.beginPath();
    ctx.strokeStyle="orange";
    ctx.lineWidth=4;
    ctx.fillStyle="green";
    //рисование окружности
    ctx.arc(150,100,50,0,2*Math.PI, false);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle="pink";
    ctx.fillStyle="purple";
    ctx.arc(300,100,50,0,3*Math.PI/2, true);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.clearRect(0,0,400,200);

    canvas.onmousemove = function (eventObj) {
      ctx.clearRect(0,0,400,200);
      ctx.beginPath();
      let radius = Math.sqrt(Math.pow(eventObj.offsetX-200, 2)+ Math.pow(eventObj.offsetY-100,2));
      ctx.arc(200,100,radius,0,2*Math.PI,false);
      ctx.fill();
      ctx.stroke();
    };
};