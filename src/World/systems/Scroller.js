import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class Scroller {
    constructor(container, mode) {
        this.container = container;
        this.mode = mode;

        this.prevScroll = window.scrollY;

        this.scrollListeners = [];
        this.start();
    }

    start = () => {
        switch (this.mode) {
            case 0:
                window.addEventListener("scroll", this.onScroll, true);
                enableBodyScroll(this.container);
                break;
            case 1:
                window.addEventListener("wheel", this.onScroll, true);
                disableBodyScroll(this.container);
                break;
            default:
                window.addEventListener("wheel", this.onScroll, true);
                disableBodyScroll(this.container);
        }
    }

    stop = () => {
        switch (this.mode) {
            case 0:
                window.removeEventListener('scroll', this.onScroll);
                break;
            case 1:
                window.addEventListener("wheel", this.onScroll);
                break;
            default:
                window.addEventListener("wheel", this.onScroll);
        }
        clearAllBodyScrollLocks();
    }

    onScroll = (e) => {
        let direction = 0;
        switch (this.mode) {
            case 0:
                const window = e.currentTarget;

                if (this.prev > window.scrollY) {
                    direction = 1;
                } else if (this.prev < window.scrollY) {
                    direction = -1;
                }
                this.prev = window.scrollY;
                break;
            case 1:
                direction = e.deltaY / Math.abs(e.deltaY);
                break;
            default:
                direction = e.deltaY / Math.abs(e.deltaY);
        }

        this.scrollListeners.forEach(listener => {
            listener.setDirection(direction);
        })
    }
}

export { Scroller };