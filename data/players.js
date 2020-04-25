import Player from '../models/player';

const INDPAKPLAYERS = [
    new Player(1, 1, 'Virat', 'Kohli', true, false, false, false, 1, 'Ind', '#63BDEC', 10),
    new Player(2, 1, 'Shikhar', 'Dhawan', true, false, false, false, 1, 'Ind', '#63BDEC', 20),
    new Player(3, 1, 'Hardik', 'Pandya', true, true, false, true, 1, 'Ind', '#63BDEC', 25),
    new Player(4, 1, 'Kuldeep', 'Yadav', false, true, false, false, 1, 'Ind', '#63BDEC', 13),
    new Player(5, 1, 'MS', 'Dhoni', true, false, true, false, 1, 'Ind', '#63BDEC',22),
    new Player(6, 1, 'Kamran', 'Akmal', true, false, false, false, 1, 'Pak', 'green', 17),
    new Player(7, 1, 'Mohd', 'Amir', false, true, false, false, 1, 'Pak', 'green', 20),
    new Player(8, 1, 'Virat', 'Kohli', true, false, false, false, 1, 'Ind', '#63BDEC', 10),
    new Player(9, 1, 'Shikhar', 'Dhawan', true, false, false, false, 1, 'Ind', '#63BDEC', 20),
    new Player(10, 1, 'Hardik', 'Pandya', true, true, false, true, 1, 'Ind', '#63BDEC', 25),
    new Player(11, 1, 'Kuldeep', 'Yadav', false, true, false, false, 1, 'Ind', '#63BDEC', 13),
    new Player(12, 1, 'MS', 'Dhoni', true, false, true, false, 1, 'Ind', '#63BDEC',22),
    new Player(13, 1, 'Kamran', 'Akmal', true, false, false, false, 1, 'Pak', 'green', 17),
    new Player(14, 1, 'Mohd', 'Amir', false, true, false, false, 1, 'Pak', 'green', 20)
];

const AUSWIPLAYERS = [
    new Player(21, 2, 'David', 'Warner', true, false, false, false, 1, 'Aus', '#EDF72A', 10),
    new Player(22, 2, 'Brian', 'Lara', true, false, false, false, 1, 'WI', '#9A1D1D', 20),
    new Player(23, 2, 'Adam', 'Gilchrist', true, true, false, true, 1, 'Aus', '#EDF72A', 25),
    new Player(24, 2, 'Glenn', 'McGrath', false, true, false, false, 1, 'Aus', '#EDF72A', 13),
    new Player(25, 2, 'Courtey', 'Walsh', true, false, true, false, 1, 'WI', '#9A1D1D',22),
    new Player(26, 2, 'Ricardo', 'Powell', true, false, false, false, 1, 'WI', '#9A1D1D', 17),
    new Player(27, 2, 'Mark', 'Waugh', false, true, false, false, 1, 'Aus', '#EDF72A', 20),
    new Player(28, 2, 'David', 'Warner', true, false, false, false, 1, 'Aus', '#EDF72A', 10),
    new Player(29, 2, 'Brian', 'Lara', true, false, false, false, 1, 'WI', '#9A1D1D', 20),
    new Player(30, 2, 'Adam', 'Gilchrist', true, true, false, true, 1, 'Aus', '#EDF72A', 25),
    new Player(31, 2, 'Glenn', 'McGrath', false, true, false, false, 1, 'Aus', '#EDF72A', 13),
    new Player(32, 2, 'Courtey', 'Walsh', true, false, true, false, 1, 'WI', '#9A1D1D',22),
    new Player(33, 2, 'Ricardo', 'Powell', true, false, false, false, 1, 'WI', '#9A1D1D', 17),
];

const PLAYERS = {1: INDPAKPLAYERS, 2: AUSWIPLAYERS};

export default PLAYERS;
