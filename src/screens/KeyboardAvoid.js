import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';

const KeyboardAvoid = () => {
  const [inputs, setInputs] = useState({
    name: null,
    email: null,
    age: null,
    address: null,
    phone: null,
  });

  const nameRef = createRef();
  const emailRef = createRef();
  const ageRef = createRef();
  const addressRef = createRef();
  const phoneRef = createRef();

  const registerUser = () => alert('User Registered!');

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Text style={styles.title}>Keyboard avoiding view example</Text>
        <KeyboardAvoidingView enabled>
          {/*For name input */}
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    name: value,
                  };
                })
              }
              placeholder="Enter name"
              placeholderTextColor="#fff"
              ref={nameRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                emailRef.current && emailRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {/*For email input*/}
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    email: value,
                  };
                })
              }
              placeholder="Enter email"
              placeholderTextColor="#fff"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => ageRef.current && ageRef.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          {/*For age input*/}
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    age: value,
                  };
                })
              }
              placeholder="Enter age"
              placeholderTextColor="#fff"
              ref={ageRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressRef.current && addressRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {/*For address input*/}
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    address: value,
                  };
                })
              }
              placeholder="Enter address"
              placeholderTextColor="#fff"
              ref={addressRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                phoneRef26.current && phoneRef26.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          {/*For phone input*/}
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={value =>
                setInputs(prevValues => {
                  return {
                    ...prevValues,
                    phone: value,
                  };
                })
              }
              placeholder="Enter phone"
              placeholderTextColor="#fff"
              ref={phoneRef}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {/*For submitting form */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={registerUser}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default KeyboardAvoid;

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    height: 40,
    margin: 50,
    marginHorizontal: 35,
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#666',
    color: '#fff',
  },
  button: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#fff',
    borderColor: '#51D8C7',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 35,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    paddingVertical: 10,
    fontSize: 16,
  },
});
