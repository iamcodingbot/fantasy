import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import gamesReducer from './store/reducers/games';
import playersReducer from './store/reducers/players';
import selectedplayersReducer from './store/reducers/selectedplayers';

const rootReducer = combineReducers({
  games: gamesReducer,
  players: playersReducer,
  selectedplayers: selectedplayersReducer
});

const store = createStore(rootReducer);

enableScreens();

export default function App() {
  return (<Provider store={store}><AppNavigator/></Provider>);
}

