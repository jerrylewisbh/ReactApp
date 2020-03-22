import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';


class App extends Component {
  render() {
    return (
      <View>
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
      textColor: '#FF0000'
    }

    this.changeColor = this.changeColor.bind(this)
  }
  changeColor() {

    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    this.setState({ textColor: ColorCode })
  }
  render() {
    return (
      <View style={styles.area}>
        <Button title="Change Text Color" onPress={this.changeColor} />
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }}
          style={{ width: this.props.width, height: this.props.height }}
        />
        <Text style={{ fontSize: 30, color: this.state.textColor, textAlign: "center" }}>{this.props.name}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  area: {
    marginTop: 40
  }
});

