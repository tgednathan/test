import character from './character';
import Line from './Line';

window.addEventListener('load', () => {
    let canvas: HTMLCanvasElement = document.getElementById('canvas');
    let context: CanvasRenderingContext2D = canvas.getContext('2d');

    let char: character = new character(['1', '2']);
    let canvasWidth: number = .8;

    char.x = canvas.width / 2;
    let line: Line = new Line(canvas, context);

    setInterval(update, 1);

    canvas.width = window.innerWidth * canvasWidth;
    canvas.height = window.innerHeight * canvasWidth;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth * canvasWidth;
        canvas.height = window.innerHeight * canvasWidth;
        char.resize(canvas);
    });
    window.addEventListener('mousemove', function(e: any) {
        var pos = {
            x : e.pageX - canvas.getBoundingClientRect().left,
            y : e.pageY - canvas.getBoundingClientRect().top
        };
        updateLine(pos.x);
     });
     window.addEventListener('touchmove', function(e: any) {
        let touch: any = e.touches[0];
        var pos = {
            x : touch.clientX - canvas.getBoundingClientRect().left,
            y : touch.clientY - canvas.getBoundingClientRect().top
        };
        updateLine(pos.x);
     });

    function updateLine(x: number): void {
        line.x = x;
        line.y = 0;
        //console.log('pos', x);
        let b: number = 25 - Math.abs((line.x - canvas.width / 2)) / 4;
        if(b < 0) b = 0;
        canvas.style = 'filter:brightness(' + ( b + 100) + '%)';
    }
    function update(): void {
        
        context.clearRect(0,0, canvas.width, canvas.height);

        context.fillStyle = '#b0e0e6'
        context.fillRect(0, 0, line.x, canvas.height);
        context.fill();
        context.fillStyle = '#eed5d2'
        context.fillRect(line.x, 0, canvas.width - line.x, canvas.height);
        context.fill();
        char.resize(canvas);
        char.DrawImage(canvas, context, line.x);
        line.DrawImage(canvas, context);
    }
});