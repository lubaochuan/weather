import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'San Francisco',
    }
  }

  handleChangeText = text =>{
    this.setState({text});
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={this.props.placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmitEditing}
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
