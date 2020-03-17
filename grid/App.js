import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button} from 'react-native';

import Grid from 'react-native-grid-component';
import CardFlip from 'react-native-card-flip'

import Countdown from './src/Countdown'


export default class App extends Component {
  _renderItem = (data, i) => (
    <CardFlip key={i} style={styles.cardContainer} ref={card => (this['card' + i] = card)}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card2]}
        onPress={() => this['card' + i].flip()}>
        <Text style={styles.label}>BACK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.card, styles.card1]}
        onPress={() => this['card' + i].jiggle({ count: 2, duration: 100, progress: 0.05 })}>
        <Image style={{ flex: 1 }} source={{ uri: 'https://www.theblocklearning.com/wp-content/uploads/2018/09/512px-React-icon.svg.png' }} />
      </TouchableOpacity>

    </CardFlip>
  );



  render() {
    return (
      <View style={{ flex: 1}}>
        <Countdown duration={100}onFinish={()=>alert('fin')}></Countdown>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          data={['black', 'white', 'red', 'green', 'blue', 'orange', 'black', 'white', 'red', 'green', 'blue', 'orange']}
          numColumns={3}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  cardContainer: {
    flex: 1,
    height: 100,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    margin: 5,
    justifyContent: 'center'
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});