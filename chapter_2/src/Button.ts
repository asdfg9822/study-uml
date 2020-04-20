import {ButtonListener} from './ButtonListener/ButtonListener';
import {button0Adapter, button1Adapter, button2Adapter} from './ButtonListener/ButtonDialerAdapter';
import {sendDialogAdapter} from './ButtonListener/SendButtonDialogAdapter';
import {Dialer} from './Dialer';

export class Button {
    constructor(private listener: ButtonListener) {
    }

    buttonPressed() {
        this.listener.buttonPressed();
    }
}

new Button(button0Adapter).buttonPressed();
new Button(button1Adapter).buttonPressed();
new Button(button2Adapter).buttonPressed();
new Button(sendDialogAdapter).buttonPressed();
