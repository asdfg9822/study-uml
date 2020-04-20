import {ButtonListener} from './ButtonListener';
import {dialer, Dialer} from '../Dialer';

class SendDialogAdapter implements ButtonListener {
    constructor(private dialer: Dialer) {
    }

    buttonPressed(): void {
        this.dialer.send();
    }
}

export const sendDialogAdapter = new SendDialogAdapter(dialer);
