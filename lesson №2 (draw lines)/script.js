let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

window.onload = () => {
  //начать новый путь (будут применяться новые настройки)
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.lineWidth=3;

  //1.пердвигаем перо в опр. позицию
  ctx.moveTo(50,50);
  //2.указываем конечную точку
  ctx.lineTo(100,100);
  //3.обводим линию
  ctx.stroke();


  ctx.beginPath();
  ctx.strokeStyle="blue";
  ctx.lineWidth=10;
  ctx.moveTo(200,150);
  //2.указываем конечную точку
  ctx.lineTo(50,100);
  //закругляем края линии и чуть удлиняем линию
  ctx.lineCap= "round";
  ctx.lineCap="square";
  //по умолчанию
  ctx.lineCap="butt";
  //3.обводим линию
  ctx.stroke();
  ctx.clearRect(0,0,400,200);

  ctx.beginPath();
  ctx.moveTo(50,150);
  ctx.lineTo(150,50);
  ctx.lineTo(250,150);
  ctx.lineWidth=5;
  ctx.strokeStyle="yellow";
  ctx.fillStyle="red";
  ctx.lineCap="round";
  //замыкающая линия
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};