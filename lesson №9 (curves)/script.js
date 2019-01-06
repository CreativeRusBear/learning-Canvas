let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    x, y;
window.onload = () =>{
    canvas.onmousemove= (event)=>{
       x=event.offsetX;
       y=event.offsetY;
       console.log(`${x} ${y}`);
       ctx.clearRect(0,0,600,600);
       ctx.beginPath();
       ctx.moveTo(300,100);
       //отвечает за отрисовку кривых
       ctx.quadraticCurveTo(x*1.2 ,y,300,500);
       ctx.quadraticCurveTo(x/(2*1.2),y,300,100);
       ctx.quadraticCurveTo(x/2 ,y,300,300);
       ctx.quadraticCurveTo(x/2 ,y,300,500);
       //ctx.lineTo(300,100);
       ctx.moveTo(300,100);
       ctx.quadraticCurveTo(x ,y,300,300);
       ctx.quadraticCurveTo(x ,y,300,500);
       ctx.stroke();
       ctx.closePath();
    };

};