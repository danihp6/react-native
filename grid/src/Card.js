
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';

import FlipCard from 'react-native-flip-card'

import React, { Component } from 'react'

export class Card extends Component {

    render() {
        let { data } = this.props
        let { i } = this.props
        data.setIndex = i
        let {doTurn} = this.props
        let flip = data.turned
        // let {getPaused} = this.props
        // let {updatePaused} = this.props
        return (
            <FlipCard
                style={[styles.cardContainer,data.getPaired?{backgroundColor:'blue'}:{backgroundColor:'red'}]}
                flip={flip}
                clickable={!flip /*&& !getPaused()*/}
                onFlipStart={(isFlipStart)=>{/*updatePaused(true)*/}}
                onFlipEnd={(isFlipEnd) => { if(isFlipEnd)doTurn(i) }}
            >
                <Text style={styles.label}>{}</Text>
                <Text style={styles.label}>{data.name}</Text>

            </FlipCard>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        
        flex: 1,
        height: 100,
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
})

export default Card
