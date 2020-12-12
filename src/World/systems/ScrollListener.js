class ScrollListener {
    constructor() {
        this.direction = 0;
    }

    setDirection = (direction) => {
        this.direction = direction;
    }

    resetDirection = () => {
        this.direction = 0;
    }
}

export { ScrollListener };