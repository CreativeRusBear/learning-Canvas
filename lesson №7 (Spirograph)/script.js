const dataBtn = document.getElementById("dataBtn"),
      canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");
let x,y,r,R,d;
//let teta;
window.onload = function () {
    dataBtn.onclick = function () {
        //teta = Number(document.getElementById("teta").value);
        teta=0;
        r = document.getElementById("smallR").value;
        R = document.getElementById("bigR").value;
        d = document.getElementById("d").value;
        if (r!="" && R!="" && d!="")  spirograph();
        else alert("Введите все данные корректно и повторите попытку");
    };
};

function spirograph() {
    x = (R-r)*Math.cos(teta)+d*Math.cos((R-r)*teta/r);
    y = (R-r)*Math.sin(teta)-d*Math.sin((R-r)*teta/r);
    teta+=.1;
    ctx.beginPath();
    ctx.fillStyle="orange";
    ctx.arc(300+x,300+y,2,0,2*Math.PI,false);
    ctx.stroke();
    ctx.fill();
    requestAnimationFrame(spirograph);
}