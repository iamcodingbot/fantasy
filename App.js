import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import gamesReducer from './store/reducers/games';
import playersReducer from './store/reducers/players';

const rootReducer = combineReducers({
  games: gamesReducer,
  players: playersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

enableScreens();

export default function App() {
  return (<Provider store={store}><AppNavigator/></Provider>);
}

