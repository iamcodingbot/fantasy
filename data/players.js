import Player from '../models/player/player';
import PlayerProperties from '../models/player/playerprop';

const AusBatProps = [new PlayerProperties(3, 1),new PlayerProperties(1, 1), new PlayerProperties(5, 1)];
const AusBowlProps = [ new PlayerProperties(3, 1), new PlayerProperties(2, 1), new PlayerProperties(5, 1)];
const WIBatProps = [new PlayerProperties(4, 1), new PlayerProperties(1, 1),  new PlayerProperties(5, 1)];
const WIBowlProps = [new PlayerProperties(4, 1),new PlayerProperties(2, 1),  new PlayerProperties(5, 1)];
const AusARProps = [new PlayerProperties(3, 1), new PlayerProperties(1, 1), new PlayerProperties(2, 1),  new PlayerProperties(5, 1)];

const AUSWIPLAYERS = [
    new Player(21, 2, 'DAVID', 'WARNER', AusBatProps, 'Aus', '#EDF72A', 10),
    new Player(22, 2, 'BRIAN', 'LARA', WIBatProps, 'WI', '#9A1D1D', 20),
    new Player(23, 2, 'ADAM', 'GILCHRIST', AusBatProps, 'Aus', '#EDF72A', 25),
    new Player(24, 2, 'GLENN', 'MCGRATH', AusBowlProps, 'Aus', '#EDF72A', 13),
    new Player(25, 2, 'COURTNEY', 'WALSH', WIBowlProps, 'WI', '#9A1D1D',22),
    new Player(26, 2, 'CURTLY', 'AMBROSE', WIBowlProps, 'WI', '#9A1D1D', 17),
    new Player(27, 2, 'MARK', 'WAUGH', AusARProps, 'Aus', '#EDF72A', 20),
    new Player(28, 2, 'STEVE', 'SMITH', AusBatProps, 'Aus', '#EDF72A', 10),
    new Player(29, 2, 'SHIVNARINE', 'CHANDERPAUL', WIBatProps, 'WI', '#9A1D1D', 20),
    new Player(30, 2, 'MIKE', 'HUSSEY', AusBatProps, 'Aus', '#EDF72A', 25),
    new Player(31, 2, 'SHAUN', 'TAIT', AusBowlProps, 'Aus', '#EDF72A', 13),
    new Player(32, 2, 'DARREN', 'GANGA', WIBatProps, 'WI', '#9A1D1D',22),
    new Player(33, 2, 'RIDLEY', 'JACOBS', WIBatProps, 'WI', '#9A1D1D', 17),
];

const INDPAKPLAYERS = [
    new Player(1, 1, 'Virat', 'Kohli', [], 'Ind', '#63BDEC', 10),
    new Player(2, 1, 'Shikhar', 'Dhawan', [], 'Ind', '#63BDEC', 20),
    new Player(3, 1, 'Hardik', 'Pandya', [], 'Ind', '#63BDEC', 25),
    new Player(4, 1, 'Kuldeep', 'Yadav', [], 'Ind', '#63BDEC', 13),
    new Player(5, 1, 'MS', 'Dhoni', [], 'Ind', '#63BDEC',22),
    new Player(6, 1, 'Kamran', 'Akmal', [], 'Pak', 'green', 17),
    new Player(7, 1, 'Mohd', 'Amir', [], 'Pak', 'green', 20),
    new Player(8, 1, 'Virat', 'Kohli', [], 'Ind', '#63BDEC', 10),
    new Player(9, 1, 'Shikhar', 'Dhawan', [], 'Ind', '#63BDEC', 20),
    new Player(10, 1, 'Hardik', 'Pandya', [], 'Ind', '#63BDEC', 25),
    new Player(11, 1, 'Kuldeep', 'Yadav', [], 'Ind', '#63BDEC', 13),
    new Player(12, 1, 'MS', 'Dhoni', [], 'Ind', '#63BDEC',22),
    new Player(13, 1, 'Kamran', 'Akmal', [], 'Pak', 'green', 17),
    new Player(14, 1, 'Mohd', 'Amir', [], 'Pak', 'green', 20)
];



const PLAYERS = {1: INDPAKPLAYERS, 2: AUSWIPLAYERS};

export default PLAYERS;
