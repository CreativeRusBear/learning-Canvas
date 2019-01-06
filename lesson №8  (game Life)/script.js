const canvas = document.getElementById('canvas'),
         ctx = canvas.getContext('2d');
let arr = [],
    count=0,
    timer;
window.onload =function(){
    document.getElementById('count').innerText=`Кол-во циклов: ${count}`;
    document.getElementById('start').onclick=startLife;
    goLife();
    canvas.onclick=(event)=>{
        let x=event.offsetX,
            y=event.offsetY;
        x=Math.floor(x/10);
        y=Math.floor(y/10);
        arr[y][x]=true;
        drawField();
    };
};

function goLife() {
    const horizontal=60, vertical=60;
    for (let i = 0; i < vertical; i++){
        arr[i]=[];
        for (let j = 0; j < horizontal; j++){
            arr[i][j]=false;
        }
    }
}

function drawField(){
    ctx.clearRect(0,0,600,600);
    arr.forEach(function (dotX,indexY){
        dotX.forEach(function (dotY,indexX) {
            if (arr[indexY][indexX]){
                ctx.fillRect(indexX*10, indexY*10,10,10);
            }
        });
    });
}

function startLife() {
    let arr2 = [];
    for (let i = 0; i < 60; i++){
        arr2[i]=[];
        for (let j = 0; j < 60; j++){
            let neighbors=0;
            if (arr[fpm(i)-1][j]) neighbors++;
            if (arr[i][fpp(j)+1]) neighbors++;
            if (arr[fpp(i)+1][j]) neighbors++;
            if (arr[i][fpm(j)-1]) neighbors++;
            if (arr[fpm(i)-1][fpp(j)+1]) neighbors++;
            if (arr[fpp(i)+1][fpp(j)+1]) neighbors++;
            if (arr[fpp(i)+1][fpm(j)-1]) neighbors++;
            if (arr[fpm(i)-1][fpm(j)-1]) neighbors++;
            (neighbors==2 || neighbors==3) ? arr2[i][j]=true : arr2[i][j]=false;
        }
    }
    arr=arr2;
    drawField();
    count++;
    document.getElementById('count').innerText=`Кол-во циклов: ${count}`;
    timer = setTimeout(startLife, 300);
}

function fpm(index) {
    if (index==0){
        return 60;
    }else {
        return index
    }
}

function fpp(index) {
    if (index==59){
        return -1;
    } else{
        return index;
    }
}