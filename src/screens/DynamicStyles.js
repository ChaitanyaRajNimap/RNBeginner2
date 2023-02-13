import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const DynamicStyles = () => {
  const [defaultStyle, setDefaultStyle] = useState(true);

  return (
    <>
      <Text style={defaultStyle ? styles.style1 : styles.style2}>
        Dynamic Styling
      </Text>
      <Button
        title="Change Style"
        onPress={() => setDefaultStyle(!defaultStyle)}
      />
    </>
  );
};

export default DynamicStyles;

const styles = StyleSheet.create({
  style1: {fontSize: 20, color: '#000'},
  style2: {fontSize: 60, color: '#f00'},
});
