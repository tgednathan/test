import character from './character';
import Line from './Line';
import ImageButton from './UI/imageButton';

window.addEventListener('load', () => {
    //canvas and context
    let canvas: any = document.getElementById('canvas');
    let context: CanvasRenderingContext2D = canvas.getContext('2d');
    let canvasWidth: number = .8;
    
    //objects
    let char: character;
    let line: Line = new Line(canvas, context);

    //ui
    let button: ImageButton;
    let button2: ImageButton;

    constructor();
    function constructor(): void {

        char = new character(['2', '1']);

        button = new ImageButton(50, 50, '3', () => {
            char.Source = ['3'];
        });
        button2 = new ImageButton(175, 50, '2', () => {
            char.Source = ['1', '2'];
        });
        resize();
    }
    
    setInterval(render, 1);

    function updateLine(x: number): void {
        line.position.x = x;
        line.position.y = 0;
        let b: number = 25 - Math.abs((line.position.x - canvas.width / 2)) / 4;
        if(b < 0) b = 0;
        canvas.style = 'filter:brightness(' + ( b + 100) + '%)';
    }
    function render(): void {
        //clears the image
        context.clearRect(0,0, canvas.width, canvas.height);

        //filter effect
        context.fillStyle = '#b0e0e6'
        context.fillRect(0, 0, line.position.x, canvas.height);
        context.fill();
        context.fillStyle = '#eed5d2'
        context.fillRect(line.position.x, 0, canvas.width - line.position.x, canvas.height);
        context.fill();

        //objects
        char.DrawImage(canvas, context, line.position.x);
        line.DrawImage(canvas, context);
        button2.Render(context);
        button.Render(context);
    }
    function resize(): void {
        canvas.width = window.innerWidth * canvasWidth;
        canvas.height = window.innerHeight * canvasWidth;
        char.resize(canvas);
    }

    
    //events
    window.addEventListener('resize', () => {
        resize();
    });
    window.addEventListener('click', function(e: any) {
        var pos = {
            x : e.pageX - canvas.getBoundingClientRect().left,
            y : e.pageY - canvas.getBoundingClientRect().top
        };
        button.ClickCheck(pos.x, pos.y);
        button2.ClickCheck(pos.x, pos.y);
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


});