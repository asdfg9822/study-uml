import {ButtonListener} from './ButtonListener';
import {dialer, Dialer} from '../Dialer';

export class ButtonDialerAdapter implements ButtonListener {
    constructor(private digit: number, private dialer: Dialer) {
    }

    buttonPressed(): void {
        this.dialer.digit(this.digit);
    }
}

// 0~9
export const button0Adapter = new ButtonDialerAdapter(0, dialer);
export const button1Adapter = new ButtonDialerAdapter(1, dialer);
export const button2Adapter = new ButtonDialerAdapter(2, dialer);

