import Vector from '../systems/Vector';

export default class ImageButton {
    public image: any;
    
    public position: Vector;
    public size: {
        w: number,
        h: number 
    };
    public callback: Function;
    
        
    constructor(x: number, y: number, src: string, callback: Function, maxWidth: number = 100){
        this.position = new Vector(x, y);
        this.image = new Image();
        this.image.src = 'assets/' + src + '.png';
        this.size = {
            w: Math.min(this.image.width, maxWidth),
            h: Math.min(this.image.width, maxWidth)
        };
        this.callback = callback;
    } 

    public ClickCheck(x: number, y: number): void {
        if (this.HoverOverButton(x, y)) {
            this.callback();
        }
    }

    public HoverOverButton(x: number, y: number): boolean {
        return x > this.position.x && x < this.position.x + this.size.w && y > this.position.y && y < this.position.y + this.size.h;
    }
    
    public Render(context: CanvasRenderingContext2D): void {
        context.fillStyle = "#ffffff";
        context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
        context.strokeStyle = "#000000";
        context.lineWidth = 5;
        context.strokeRect(this.position.x, this.position.y, this.size.w, this.size.h);

        context.drawImage(this.image, this.position.x, this.position.y, this.size.w, this.size.h);

    } 
    public resize(canvas: any): void {
        let scale: number = canvas.height / this.image.height;
        this.size.h = this.image.height * scale;
        this.size.w = this.image.width * scale;

    }
}
