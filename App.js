import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      lasTime: null,
      label: 'Start'
    }


    this.timer = null;

    this.Start = this.Start.bind(this);
    this.Clear = this.Clear.bind(this);
  }


  Start() {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.setState({ currentTime: this.state.currentTime + 0.1 });
      }, 100);

      this.setState({ label: 'Pause' });
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ label: 'Start' });
    }
  }

  Clear() {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ currentTime: 0, label: 'Start', lastTime: this.state.currentTime });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometer.png')}
          style={styles.cronometer}
        />
        <Text style={styles.timer}>{this.state.currentTime.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText} onPress={this.Start}>{this.state.label}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.Clear}>
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastTimeArea}>
          <Text style={styles.lastTimeText}>
            {this.state.lastTime > 0 ? 'Last time: ' + this.state.lastTime.toFixed(2) : ''}
          </Text>
        </View>


      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: "bold"
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#00aeff'

  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  lastTimeArea: {
    marginTop: 40

  },
  lastTimeText: {
    fontSize: 25,
    fontStyle: "italic",
    color: '#fff'
  }

});


export default App;

