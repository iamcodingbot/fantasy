import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AllGamesScreen from '../screens/games/AllGamesScreen';
import GameScreen from '../screens/games/GameScreen';
import SubmitTeamScreen from '../screens/games/SubmitTeamScreen';
import KycScreen from '../screens/KycScreen';
import PredictionScreen from '../screens/prediction/PredictionScreen';
import WalletScreen from '../screens/WalletScreen';
import MyGamesScreen from '../screens/myarena/MyGamesScreen';
import MyPredictionScreen from '../screens/myarena/MyPredictionScreen';
import NonFrequentScreen from '../screens/NonFrequentScreen';


const PredictionNavigator = createStackNavigator({
    Predictions: PredictionScreen
});

const GamesNavigator = createStackNavigator({
    AllGames: AllGamesScreen,
    Game: GameScreen,
    SubmitTeam: SubmitTeamScreen
}, {defaultNavigationOptions : {
    headerTransparent: true, headerStatusBarHeight: 50}
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
    Predictions: PredictionNavigator,
    Games: GamesNavigator,
    MyArena: MyArenaNavigator,
    Settings: SettingsNavigator
});

export default createAppContainer(MainTabNavigator)


