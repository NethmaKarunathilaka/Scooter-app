import { View, TextInput,StyleSheet } from 'react-native'
import React from 'react'



interface UserInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const UserInput: React.FC<UserInputProps> = ({ placeholder, value, onChangeText,secureTextEntry }) => {

  return (
     <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
          />
    
  )
}

const styles = StyleSheet.create({
input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default UserInput