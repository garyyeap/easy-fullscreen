interface Fullscreen {
    isEnabled: boolean;
    isFullscreen: boolean;
    on (eventType: string, callback: Function): void;
    off (eventType: string, callback: Function): void;
    exit (): void;
    request (element: HTMLElement): void;
}

declare var Fullscreen: Fullscreen;

export = Fullscreen;
