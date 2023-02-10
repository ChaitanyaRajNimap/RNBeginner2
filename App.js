import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AlertDemo from './src/screens/AlertDemo';
import ModalDemo from './src/screens/ModalDemo';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* <AlertDemo /> */}
        <ModalDemo />
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
