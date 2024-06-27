import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#00BFFF',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default CustomTextInput;
