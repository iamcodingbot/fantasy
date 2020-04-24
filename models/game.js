class Game {
    constructor(id, title, matches, series ,curr, max, closeDisplay, closeTimestamp) {
        this.id = id;
        this.title = title;
        this.curr = curr;
        this.max = max;
        this.closeDisplay = closeDisplay;
        this.closeTimestamp = closeTimestamp;
    }
}

export default Game;