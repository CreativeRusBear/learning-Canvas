let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
const widthCanvas = canvas.offsetWidth,
      heightCanvas = canvas.offsetHeight;

ctx.fillStyle = "grey";
window.onload = () => {
    let string=1;
    for (let i=0; i<heightCanvas; i+=50){
        for (let j=0; j< widthCanvas; j+=50){
            if(string%2!==0){
                ctx.fillRect(j,i,50,50);
                j+=50;
            }else{
                j+=50;
                ctx.fillRect(j,i,50,50);
            }
        }
        string++;
    }
};