const canvas  = document.getElementById('canvas'),
      ctx     = canvas.getContext('2d'),
      options = {
        opacity: 0.1,
        count: 20,
        color: 'hsl(hue, 100%, 50%)',
        hue: 90,
        divisionSpeed: 1
      };

window.onload = () =>{
    sizeOfCanvas();
    Step();
};
window.onresize=()=>sizeOfCanvas();

function Step() {
    for(let i = 0; i < options.count; i++){
        options.hue +=1 / options.divisionSpeed;
        if(options.hue >= 360) options.hue = 0;
        ctx.fillStyle = options.color.replace('hue', options.hue);
        ctx.beginPath();
        ctx.arc( Math.random() * canvas.width, Math.random() * canvas.height, 5, 0, 2*Math.PI, false );
        ctx.fill();
    }
    ctx.fillStyle = "rgba(255,255,255,"+ options.opacity +")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(Step);
}

function sizeOfCanvas() {
    canvas.width  = window.innerWidth % 10 ? ( Math.floor( window.innerWidth / 10 ) * 10 ) : window.innerWidth;
    canvas.height = window.innerHeight % 10 ? ( Math.floor( window.innerHeight / 10 ) * 10 ) : window.innerHeight;
}
