import Vector from '../systems/Vector';
import character from '../character';
import Constants, { CharacterInfo } from '../data/Constants';

export default class CharacterSelection {
    public characterSelectionObject: Element;

    constructor(callBack: Function){
        this.characterSelectionObject = document.getElementsByClassName('characterselection')[0];
        console.log(this.characterSelectionObject);
        for (let i: number = Constants.SOURCE_IMAGES.length; i--;) {
            this.ApplyButton(Constants.SOURCE_IMAGES[i], callBack);
        }
    } 
    public ApplyButton(key: CharacterInfo, clickFunction: Function): void {
        let button: any = document.createElement("INPUT");
        button.type = 'BUTTON';
        button.style.backgroundImage = 'url(' + key.sources[0] + ')';
        button.onclick = () => {
            clickFunction(key);
        };
        this.characterSelectionObject.appendChild(button);

    }
}
