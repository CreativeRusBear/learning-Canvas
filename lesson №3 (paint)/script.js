const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");
let myClr="black";

window.onload = () => {
    //событие, срабатывающиеся при изменении значения в input
    document.getElementById("color").oninput= (obj)=>
      myClr = obj.target.value;
    //событие нажатия кнопки мыши
    canvas.onmousedown =  (eventObj) => {
        let x = eventObj.offsetX,
            y = eventObj.offsetY;
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.strokeStyle = myClr;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        //событие пермещения мыши
        canvas.onmousemove = (eventObj) => {
            let x = eventObj.offsetX,
                y = eventObj.offsetY;
            ctx.lineTo(x,y);
            ctx.stroke();
        };
        //событие, которое срабатывает при отпускании кнопки мыши
        canvas.onmouseup =  () =>
            //обнуляем значение события пермещения мыши
          canvas.onmousemove=null;
    };
};