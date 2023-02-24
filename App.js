import * as React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Styles from "./components/Styles";
import DrumMachine from "./components/DrumMachine";

export default function App() {

  return (
    <View style={Styles.container}>
      <DrumMachine/>
      <StatusBar style="light" />
    </View>
  );
}

