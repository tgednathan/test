export default class Line {
    public imageObj: any;
    public x: number = 0;
    public y: number = 0;
    constructor(canvas: any, context: any){
        this.imageObj = new Image();
        this.imageObj.src = 'assets/light.png';
    } 
    
    public DrawImage(canvas: any, context: any): void {
        let scale = canvas.height / this.imageObj.height;
        context.drawImage(this.imageObj, this.x - this.imageObj.width * scale / 2, this.y, this.imageObj.width * scale, this.imageObj.height * scale);
    } 
}
