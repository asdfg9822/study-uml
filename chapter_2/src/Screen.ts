export interface Screen {
    displayDigit(n: number): void
}

class ScreenImpl implements Screen {
    displayDigit(n: number): void {
    }
}

export const screen = new ScreenImpl();
