let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
window.onload = function () {
  //стиль заливки
  ctx.fillStyle='orange';
  //закрашиваем прямоугольник
  //x,y,ширина прямоугольника, длина прмоугольника
  ctx.fillRect(50,50, 150, 100);
  //стирание прямоуголника по опр. координатам
  ctx.clearRect(150,50,50,50)


//рисование прямоугольника инным способом
    //цвет линии обводки
    ctx.strokeStyle="blue";
    //толщина линии обводки
    ctx.lineWidth="5";
    //рисование прямоугольника инным способом
    ctx.rect(250,50,100,100);
    //команда отрисовки
    ctx.stroke();
    //заливка
    ctx.fillStyle= "red";
    ctx.fill();
};