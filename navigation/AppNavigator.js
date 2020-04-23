import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AllGamesScreen from '../screens/AllGamesScreen';
import GameScreen from '../screens/GameScreen';
import SubmitTeamScreen from '../screens/SubmitTeamScreen';
import KycScreen from '../screens/KycScreen';
import PredictionScreen from '../screens/PredictionScreen';
import WalletScreen from '../screens/WalletScreen';
import MyGamesScreen from '../screens/MyGamesScreen';
import MyPredictionScreen from '../screens/MyPredictionScreen';
import NonFrequentScreen from '../screens/NonFrequentScreen';


const PredictionNavigator = createStackNavigator({
    Predictions: PredictionScreen
});

const GamesNavigator = createStackNavigator({
    AllGames: AllGamesScreen,
    Game: GameScreen,
    SubmitTeam: SubmitTeamScreen
});


const MyGamesNavigator = createStackNavigator({
    MyGames: MyGamesScreen
});

const MyPredictionNavigator = createStackNavigator({
    MyPredictions: MyPredictionScreen
});

const MyArenaNavigator = createBottomTabNavigator({
    Predictions: MyPredictionNavigator,
    Games: MyGamesNavigator
});


const SettingsNavigator = createStackNavigator({
    Settings: NonFrequentScreen,
    KYCSettings: KycScreen,
    WalletSettings: WalletScreen
});


const MainTabNavigator = createBottomTabNavigator({
    Games: GamesNavigator,
    Predictions: PredictionNavigator,
    MyArena: MyArenaNavigator,
    Settings: SettingsNavigator
});

export default createAppContainer(MainTabNavigator)


