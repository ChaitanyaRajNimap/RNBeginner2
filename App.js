import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AlertDemo from './src/screens/AlertDemo';
import DiffShapes from './src/screens/DiffShapes';
import DynamicStyles from './src/screens/DynamicStyles';
import HideOrShowComponent from './src/screens/HideOrShowComponent';
import KeyboardAvoid from './src/screens/KeyboardAvoid';
import ModalDemo from './src/screens/ModalDemo';
import OnPressView from './src/screens/OnPressView';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* <AlertDemo /> */}
        {/* <ModalDemo /> */}
        {/* <KeyboardAvoid /> */}
        {/* <OnPressView /> */}
        {/* <DiffShapes /> */}
        {/* <DynamicStyles /> */}
        <HideOrShowComponent />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
