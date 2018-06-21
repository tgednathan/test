import Vector from './systems/Vector';
import Constants, { CharacterInfo } from './data/Constants';

export default class character {
    public imageObj: any;
    public imageObj2: any;
    private oneFile: boolean;
    public position: Vector = new Vector();
    private source: string[];
    private canvas: any;

    private characterInfo: CharacterInfo;    
    public size: {
        w: number,
        h: number 
    };
    
    public size2: {
        w: number,
        h: number 
    };
        
    constructor(arrayOfFiles: string[]){

        this.size = {w: 0, h: 0};
        this.size2 = {w: 0, h: 0};
 
        this.imageObj = new Image();
        this.imageObj2 = new Image();
        requestAnimationFrame(() => {
            this.CharacterInfo = Constants.SOURCE_IMAGES[Constants.SOURCE_IMAGES.length - 1];
        });
    } 
    
    public DrawImage(canvas: any, context: CanvasRenderingContext2D, mouseX: number = canvas.width / 2): void {
        let clipPrecentage: number;

        if (this.oneFile) {
            clipPrecentage = (mouseX - (this.position.x - this.size.w / 2)) / this.size.w * 2;
        } else {
            clipPrecentage = (mouseX - (this.position.x - this.size.w /2)) / this.size.w;
        }
        //console.log(clipPrecentage);

        this.drawClipRegion(true, context, mouseX, canvas);
        context.drawImage(this.imageObj, 
            0, 
            0, 
            this.imageObj.width / (this.oneFile ? 2 : 1), 
            this.imageObj.height,
            this.position.x - this.size.w / (this.oneFile ? 4 : 2), 
            this.position.y, 
            this.size.w / (this.oneFile ? 2 : 1), 
            this.size.h
        );

        context.restore();

        this.drawClipRegion(false, context, mouseX, canvas);
        context.scale(this.characterInfo.invert ? -1 : 1, 1);

        context.drawImage(this.imageObj2, 
            (this.oneFile ? this.imageObj2.width / 2 : 0), 
            0, 
            this.imageObj.width / (this.oneFile ? 2 : 1), 
            this.imageObj.height,
            this.characterInfo.invert ? -(this.position.x + this.size.w / 4) : this.position.x - this.size.w / (this.oneFile ? 4 : 2), 
            this.position.y, 
            this.size.w / (this.oneFile ? 2 : 1), 
            this.size.h
        );

        context.restore();

        return;

    } 

    public drawClipRegion(invert: boolean = true, context: CanvasRenderingContext2D, mouseX: number, canvas: any): void {
        context.save();
        context.beginPath();
        context.moveTo(invert ? 0 : canvas.width, 0);
        context.lineTo(mouseX, 0);
        context.lineTo(mouseX, this.canvas.height);
        context.lineTo(invert ? 0 : canvas.width, this.canvas.height);
        context.closePath();
        context.clip();

    }

    public get CharacterInfo(): CharacterInfo {
        return this.characterInfo;
    }

    public set CharacterInfo(value: CharacterInfo) {
        this.characterInfo = value;
        
        this.oneFile = this.characterInfo.sources.length === 1;
        this.imageObj.src = this.characterInfo.sources[0];
        if (this.oneFile) {
            this.imageObj2.src = this.characterInfo.sources[0];
        } else {
            this.imageObj2.src = this.characterInfo.sources[1];
        }
        if (this.canvas) {
            this.resize(this.canvas);
        }
    }
    public resize(canvas: any): void {
        this.canvas = canvas;

        let scale: number = canvas.height / this.imageObj.height;
        this.size.h = this.imageObj.height * scale;
        this.size.w = this.imageObj.width * scale;

        scale = canvas.height / this.imageObj2.height;
        this.size2.h = this.imageObj2.height * scale;
        this.size2.w = this.imageObj2.width * scale;
        this.position.x = canvas.width / 2;
    }
}
