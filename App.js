import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { enableScreens } from 'react-native-screens'

enableScreens();

export default function App() {
  return (<AppNavigator/>);
}

