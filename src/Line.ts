import Vector from './systems/Vector';

export default class Line {
    public imageObj: any;
    public position: Vector = new Vector();
    constructor(canvas: any, context: any){
        this.imageObj = new Image();
        this.imageObj.src = 'assets/light.png';
    } 
    
    public DrawImage(canvas: any, context: any): void {
        let scale = canvas.height / this.imageObj.height;
        context.drawImage(this.imageObj, this.position.x - this.imageObj.width * scale / 2, this.position.y, this.imageObj.width * scale, this.imageObj.height * scale);
    } 
}
