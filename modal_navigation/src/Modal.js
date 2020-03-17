import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity,Button } from 'react-native'

export default function Modal({ navigation }) {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.outsideContainer}>
            
        </TouchableOpacity>
        <View style={styles.innerContainer}>
            <Button title='Modal2' onPress={()=>navigation.navigate('Modal2')}></Button>
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
        bottom: 0,
        left: 0,
        right: 0,
        top: '70%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})