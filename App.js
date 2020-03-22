import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput } from 'react-native';


class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#B2B2B2' }}>
        <Text style={{ color: 'red', fontSize: 25 }}> Olá Mundo </Text>
        <RandomImage name={"My Text"} width={300} height={300} />
      </View>
    );
  }
}

export default App;

class RandomImage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textColor: '#FF0000',
      text: this.props.name
    }

    this.changeColor = this.changeColor.bind(this)
    this.onTextChanged = this.onTextChanged.bind(this)
  }
  changeColor() {
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ textColor: ColorCode })
  }

  onTextChanged(text) {
    this.setState({ text: text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Change Text Color" onPress={this.changeColor} />
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: this.props.width, height: this.props.height }}
        />
        <Text style={[{ color: this.state.textColor }, styles.text]}> {this.state.text}</Text>
        <TextInput style={styles.input}
          placeholder="Type any text"
          underlineColorAndroid="transparent"
          onChangeText={this.onTextChanged}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1
  }, input: {
    margin: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#222',
    padding: 10
  },
  text: {
    textAlign: "center",
    fontSize: 30
  }
});

