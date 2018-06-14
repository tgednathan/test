import Vector from '../systems/Vector';
import character from '../character';

export default class CharacterSelection {
    public scr: string[] = ['3', '21', '13', '14'];
    public characterSelectionObject: Element;

    constructor(callBack: Function){
        this.characterSelectionObject = document.getElementsByClassName('characterselection')[0];
        console.log(this.characterSelectionObject);
        for (let i: number = 0; i < this.scr.length; i++) {
            this.ApplyButton(this.scr[i], callBack);
        }
    } 
    public ApplyButton(key: string, clickFunction: Function): void {
        let button: any = document.createElement("INPUT");
        button.type = 'BUTTON';
        button.style.backgroundImage = 'url(assets/' + key + '.png)';
        button.onclick = () => {
            //console.log('click');
            clickFunction(key);
        };
        console.log(button.style.background);
        this.characterSelectionObject.appendChild(button);

    }
}
