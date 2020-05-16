import Game from '../models/game/game';
import Constraint from '../models/game/constraint';
const CONSTRAINTS = [
    new Constraint(1, 'Batsmen', '', '', 7, 5),
    new Constraint(2, 'Bowlers', '', '', 7, 4),
    new Constraint(3, 'Australia', '', '', 7, 3),
    new Constraint(4, 'West Indies', '', '', 7, 2),
    new Constraint(5, 'All Players', '', '', 11, 1)
]
const GAMES = [
    new Game(1, 'Regular', 'Ind Vs Pak', 'WC 2020', 10, 50, CONSTRAINTS, '12 Sep 2020 8 PM IST', 11121311),
    new Game(2, 'Regular', 'Aus Vs WI', 'WC 2020', 12, 50, CONSTRAINTS, '12 Sep 2020 11:30 PM IST', 11121311),
    new Game(3, 'Regular', 'NZ Vs Eng', 'WC 2020', 22, 50, CONSTRAINTS, '13 Sep 2020 8PM IST', 11121311)
];

export default GAMES;
