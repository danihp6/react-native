import React from 'react'
import { Button, View } from 'react-native'

export default function GamePage({ navigation }){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'blue' }}>
            <Button title='ver modal' onPress={() => navigation.navigate('Modal')}></Button>
        </View>
    )
}
