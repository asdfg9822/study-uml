import {radio, Radio} from './Radio';
import {screen, Screen} from './Screen';
import {speaker, Speaker} from './Speaker';

export class Dialer {
    private pno: number[];
    constructor(private screen: Screen, private speaker:Speaker, private radio: Radio) {
    }
    digit(digit: number) {
        this.pno.push(digit);
        this.screen.displayDigit(digit);
        this.speaker.tone(digit);
    }
    send() {
        this.radio.connect(this.pno.join(''));
    }
}

export const dialer = new Dialer(screen, speaker, radio);
