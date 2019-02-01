import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  handleChangeText = (newLocation)=>{

  }

  render() {
    return (
      <TextInput
        autoCorrect={false}
        placeholder={this.props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={this.handleChangeText}
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    color: 'white',
  }
})
