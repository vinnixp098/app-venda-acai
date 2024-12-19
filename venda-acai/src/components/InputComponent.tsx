import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TextStyle } from 'react-native';

interface InputComponentProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;
  style?: TextInputProps['style'];
  placeholderColor?:  string;
  fontSize?:  number;


}

export const InputComponent: React.FC<InputComponentProps> = ({
  label,
  labelStyle,
  style,
  placeholderColor,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={placeholderColor}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderRightWidth:  0,
    paddingHorizontal: 20,
    fontSize: 16,
  },
});