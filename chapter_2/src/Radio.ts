export interface Radio {
    connect(pno: string): void
}

class RadioImpl implements Radio {
    connect(pno: string): void {
    }
}

export const radio = new RadioImpl();
