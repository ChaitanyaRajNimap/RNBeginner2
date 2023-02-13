import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DiffShapes = () => {
  const [showSquare, setShowSquare] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [showTriangle, setShowTriangle] = useState(false);
  const [showRectangle, setShowRectangle] = useState(false);
  const [showOval, setShowOval] = useState(false);

  const changeShape = shape => {
    setShowSquare(shape == 'Square');
    setShowCircle(shape == 'Circle');
    setShowTriangle(shape == 'Triangle');
    setShowRectangle(shape == 'Rectangle');
    setShowOval(shape == 'Oval');
  };

  return (
    <View style={styles.conatiner}>
      <View
        style={
          showSquare
            ? styles.SquareShapeView
            : showCircle
            ? styles.CircleShapeView
            : showRectangle
            ? styles.RectangleShapeView
            : showTriangle
            ? styles.TriangleShapeView
            : showOval
            ? styles.OvalShapeView
            : ''
        }
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeShape('Square')}
        active={0.8}>
        <Text style={styles.buttonText}>Square</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeShape('Circle')}
        active={0.8}>
        <Text style={styles.buttonText}>Circle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeShape('Triangle')}
        active={0.8}>
        <Text style={styles.buttonText}>Triangle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeShape('Rectangle')}
        active={0.8}>
        <Text style={styles.buttonText}>Rectangle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => changeShape('Oval')}
        active={0.8}>
        <Text style={styles.buttonText}>Oval</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiffShapes;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#00f',
  },
  buttonText: {
    padding: 10,
    color: '#fff',
    fontSize: 20,
  },
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#ff00ff',
  },
  OvalShapeView: {
    //To make Oval Shape
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 50,
    transform: [{scaleX: 2}],
  },
  SquareShapeView: {
    //To make Square Shape
    width: 100,
    height: 100,
    backgroundColor: '#14ff5f',
  },
  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#14ff5f',
  },
  TriangleShapeView: {
    //To make Triangle Shape
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#606070',
  },
});
