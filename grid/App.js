import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button} from 'react-native';

import Grid from 'react-native-grid-component';
import Card from './src/Card'

import Countdown from './src/Countdown'

import {defaultGame} from './src/Game'

import {doTurn} from './src/Logic'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        game : defaultGame,
    }
}

  updateGame = (newGame)=>{
    this.setState({
      game:newGame
    })
    console.log('updatedGame')
  }

  // updatePaused = (newPaused)=>{
  //   let game=this.state.game
  //   game.setPaused = newPaused
  //   this.setState({
  //     game:game
  //   })
  //   console.log('updatedPausa')
  // }

  // getPaused = ()=>{
  //   return this.state.game.getPaused
  // }

  doTurn=(index)=>{
    doTurn(this.state.game,index,this.updateGame)
  }

  _renderItem = (data, i) => (
    <Card data={data} i={i} doTurn={this.doTurn} /*getPaused={this.getPaused} updatePaused={this.updatePaused}*/></Card>
  );



  render() {
    return (
      <View style={{ flex: 1}}>
        <Countdown duration={100}onFinish={()=>alert('fin')}></Countdown>
        <Grid
          style={styles.list}
          renderItem={this._renderItem}
          data={this.state.game.cards}
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

  label: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});