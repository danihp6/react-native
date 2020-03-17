import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'

export default function Modal2({ navigation }) {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.outsideContainer}>
            
        </TouchableOpacity>
        <View style={styles.innerContainer}>
            <Text>Pausa2</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    outsideContainer:{
        flex:1
    },
    innerContainer : {
        position: 'absolute',
        bottom: '70%',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }
})