import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phraseText: '',
      img: require('./src/closed_cookie.png')
    }

    this.openCookie = this.openCookie.bind(this)

    this.phrases = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
      "A friend is a present you give yourself.",
      "A gambler not only will lose what he has, but also will lose what he doesn’t have."
    ]

  }

  openCookie() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    this.setState({
      phraseText: ' "' + this.phrases[randomNumber] + '" ',
      img: require('./src/open_cookie.png')
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.phraseText}>{this.state.phraseText}</Text>
        <TouchableOpacity style={styles.button} onPress={this.openCookie}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText} >Open Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 250,
    height: 250
  },
  phraseText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25

  },
  buttonArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#dd7b22'

  }

});

