export default class character {
    public x: number = 0;
    public y: number = 0;
    constructor(x?: number, y?: number){
        this.x = x || 0;
        this.y = y || x || 0;
    } 
    
}
