import Game from '../models/game';
import Player from '../models/player';

const GAMES = [
    new Game(1, 'Regular', 'Ind Vs Pak', 'WC 2020', 10, 50, '12 Sep 2020 8 PM IST', 11121311),
    new Game(2, 'Regular', 'Aus Vs WI', 'WC 2020', 12, 50, '12 Sep 2020 11:30 PM IST', 11121311),
    new Game(3, 'Regular', 'NZ Vs Eng', 'WC 2020', 22, 50, '13 Sep 2020 8PM IST', 11121311)
];

export const PLAYERS = [
    new Player(1, 1, 'Virat', 'Kohli', true, false, false, false, 1, 'Ind', 'blue', 10),
    new Player(2, 1, 'Shikhar', 'Dhawan', true, false, false, false, 1, 'Ind', 'blue', 20),
    new Player(3, 1, 'Hardik', 'Pandya', true, true, false, true, 1, 'Ind', 'blue', 25),
    new Player(4, 1, 'Kuldeep', 'Yadav', false, true, false, false, 1, 'Ind', 'blue', 13),
    new Player(5, 1, 'MS', 'Dhoni', true, false, true, false, 1, 'Ind', 'blue',22),
    new Player(6, 1, 'Kamran', 'Akmal', true, false, false, false, 1, 'Pak', 'green', 17),
    new Player(7, 1, 'Mohd', 'Amir', false, true, false, false, 1, 'Pak', 'green', 20)
];

export default GAMES;