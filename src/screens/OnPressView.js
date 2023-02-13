import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OnPressView = () => {
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => alert('View Clicked!')}>
      <Text style={styles.text}>View with onPress</Text>
    </View>
  );
};

export default OnPressView;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    backgroundColor: '#242424',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
