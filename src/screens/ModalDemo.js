import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

function ModalDemo() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        animationType={'fade'}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has ben closed.');
        }}>
        <View style={styles.conatiner}>
          <Text style={styles.heading}>Modal is open</Text>
          <Button
            title="Close Modal"
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </Modal>
      <Button title="Show Modal" onPress={() => setShowModal(!showModal)} />
    </>
  );
}

export default ModalDemo;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
