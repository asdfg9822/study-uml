export interface Speaker {
    tone(n: number): void
}

export class SpeakerImpl implements Speaker {
    tone(n: number): void {
    }
}

export const speaker = new SpeakerImpl();
