function draw(){
    var primarycolor= "#47FD1C";
    var canvas = document.getElementById('can');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.fillStyle = primarycolor;
        ctx.moveTo(canvas.width,canvas.height);
        ctx.lineTo(canvas.width-100, canvas.height - 200);
        ctx.lineTo(canvas.width-700, canvas.height);
        ctx.fill();

        //rectangle("#8997AA", canvas.width,canvas.height, canvas.width-100, canvas.height - 600,canvas.width-900,canvas.height);
        rectangle(primarycolor, 300, 250, canvas.height-580, 300, 200, 400);


    }

    function rectangle(color, b1, b2, x1, y1, x2, y2){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(b1,b2);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.fill();
    }
}


draw();