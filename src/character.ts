export default class character {
    public imageObj: any;
    public imageObj2: any;
    public x: number = 0;
    public y: number = 0;

    public size: {
        w: number,
        h: number 
    };
    
    public size2: {
        w: number,
        h: number 
    };
        
    constructor(){
        this.size = {w: 0, h: 0};
        this.size2 = {w: 0, h: 0};
 
        this.imageObj = new Image();
        this.imageObj.src = 'assets/1.png';

        this.imageObj2 = new Image();
        this.imageObj2.src = 'assets/2.png';
    } 
    
    public DrawImage(canvas: any, context: any, mouseX: number = canvas.width / 2): void {

        let clipPrecentage: number = (mouseX - (this.x - this.size.w /2)) / this.size.w;
        context.drawImage(this.imageObj, 
            0, 
            0, 
            this.imageObj.width * clipPrecentage, 
            this.imageObj.height,
            this.x - this.size.w / 2, 
            this.y, 
            this.size.w * clipPrecentage, 
            this.size.h
        );

        context.drawImage(this.imageObj2, 
            this.imageObj2.width * clipPrecentage, 
            0,
            this.imageObj2.width *  (1 - clipPrecentage), 
            this.imageObj2.height,
            this.x - this.size2.w * (1 - clipPrecentage) + this.size2.w / 2, 
            this.y, 
            this.size2.w * (1 - clipPrecentage), 
            this.size2.h
        );

    } 
    public resize(canvas: any): void {
        let scale: number = canvas.height / this.imageObj.height;
        this.size.h = this.imageObj.height * scale;
        this.size.w = this.imageObj.width * scale;

        scale = canvas.height / this.imageObj2.height;
        this.size2.h = this.imageObj2.height * scale;
        this.size2.w = this.imageObj2.width * scale;
        this.x = canvas.width / 2;
    }
}
