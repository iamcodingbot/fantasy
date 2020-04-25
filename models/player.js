class Player{
    constructor(playerId, gameId, firstname, lastname, isBat, isBowl, isWk, isAr, teamId, teamname, color, cost){
        this.playerId = playerId;
        this.gameId = gameId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isBat = isBat;
        this.isBowl = isBowl;
        this.isWk = isWk;
        this.isAr = isAr;
        this.teamId = teamId;
        this.teamname = teamname;
        this.color = color;
        this.cost = cost;
    }
}

export default Player; 