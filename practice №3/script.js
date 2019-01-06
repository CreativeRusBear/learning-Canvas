const canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");
window.onload = function () {
    canvas.ondblclick = function (eventObj) {
        ctx.fillStyle="yellow";
        ctx.strokeStyle="green";
        ctx.lineWidth=3;
        let x= eventObj.offsetX;
        let y = eventObj.offsetY;
        canvas.onmousemove= function (eventObj) {
            var radius = Math.sqrt(Math.pow(eventObj.offsetX-x, 2)+ Math.pow(eventObj.offsetY-y,2));
            ctx.clearRect(0,0,800,800);
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2*Math.PI, false);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            canvas.onclick = function () {
                canvas.onmousemove=null;
            };
        };
    };
};