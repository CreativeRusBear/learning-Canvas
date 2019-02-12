export default class Ball  {
    constructor(x,y,radius,color){
        this.x = x || 0;
        this.y = y || 0;
        this.radius =radius || 2;
        this.color = color || "#ff5735";
        this.vx=0;
        this.vy=0;
    }
    setPos(x,y){
     this.x=x;
     this.y=y;
    }
    think(mouse){
        let dx = this.x-mouse.x;
        let dy = this.y-mouse.y;

        let dist = Math.sqrt(dx*dx+dy*dy);
        if(dist<30){
            let angle = Math.atan2(dy,dx);
            let tx= mouse.x+Math.cos(angle)*30;
            let ty=mouse.y+Math.sin(angle)*30;
            this.vx+=tx-this.x;
            this.vy+=ty-this.y;
        }
        this.x += this.vx;
        this.y += this.vy;
        console.log(dist);
    }
    draw(ctx){
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x,this.y,this.radius, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.closePath();
            ctx.restore();
    }
}