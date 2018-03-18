import character from './character';
import line from './Line';

window.addEventListener('load', () => {
    let canvas: any = document.getElementById('canvas');
    let context: CanvasRenderingContext2D = canvas.getContext('2d');

    let char: character = new character();
    char.x = canvas.width / 2;
    let l: line = new line(canvas, context);

    setInterval(update, 1);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        char.resize(canvas);
    });
    canvas.addEventListener('mousemove', function(e: any) {
        var pos = {
            x : e.pageX - this.offsetLeft,
            y : e.pageY - this.canvasOffsetY
        };
        l.x = pos.x;
        l.y = 0;

        let b: number = 25 - Math.abs((l.x - canvas.width / 2)) / 4;
        if(b < 0) b = 0;
        console.log(b);
        canvas.style = 'filter:brightness(' + ( b + 100) + '%)';
     }, false);

    function update(): void {
        
        context.clearRect(0,0, canvas.width, canvas.height);

        context.fillStyle = '#b0e0e6'
        context.fillRect(0, 0, l.x, canvas.height);
        context.fill();
        context.fillStyle = '#eed5d2'
        context.fillRect(l.x, 0, canvas.width - l.x, canvas.height);
        context.fill();
        char.resize(canvas);
        char.DrawImage(canvas, context, l.x);
        l.DrawImage(canvas, context);
    }
});