import React from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';

const AlertDemo = () => {
  const simpleAlert = () => {
    alert("I'm simple alert!");
  };

  const towOptionAlert = () => {
    Alert.alert(
      'Two option alert!',
      'This is two option alert.',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yes pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const threeOptionAlert = () => {
    Alert.alert(
      'Three option alert!',
      'This is three option alert.',
      [
        {
          text: 'Maybe',
          onPress: () => console.log('Maybe pressed'),
        },
        {
          text: 'Yes',
          onPress: () => console.log('Yes pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No pressed'),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Simple Alter" onPress={simpleAlert} style={styles.btn} />
      <Button
        title="Two Option Alter"
        onPress={towOptionAlert}
        style={styles.btn}
      />
      <Button
        title="Three Option Alter"
        onPress={threeOptionAlert}
        style={styles.btn}
      />
    </View>
  );
};

export default AlertDemo;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginBottom: 10,
  },
});
