import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            duration: this.props.duration,
            color: 'green',
            paused: 'false'
        }
    }
    componentDidMount() {
        const timer = setInterval(() => this.updateTimer(), 1000)
        this.setState({
            timer: timer,
            time: this.state.duration
        })
    }

    componentWillUnmount() {
        // Make sure to clear the interval, on unmount
        clearInterval(this.state.timer)
    }

    updateTimer = () => {
        this.updateColor()
        if (this.state.time > 0)
            this.setState({
                time: this.state.time - 1
            })
        else {
            this.props.onFinish()
            clearInterval(this.state.timer)
        }
    }
    updateColor = () => {
        if (this.state.time == Math.round(this.state.duration / 2))
            this.setState({
                color: 'yellow'
            })
        if (this.state.time == Math.round(this.state.duration / 4))
            this.setState({
                color: 'red'
            })
    }
    pauseTimer = () => {
        this.setState({
            paused:false
        })
        clearInterval(this.state.timer);
    }
    resumeTimer = () => {
        this.setState({
            paused:true
        })
        this.state.timer = setInterval(() => this.updateTimer(), 1000)
    }
    render() {
        var { time } = this.state
        var { color } = this.state
        var {paused} = this.state
        return (
            <View style={{ justifyContent: 'center' }}>
                
                <TouchableWithoutFeedback onPress={() => {
                    if(!paused)this.resumeTimer()
                    else this.pauseTimer()
                }}>
                <Text style={[{ color: color, textAlign: 'center' }, styles.text]}>{time}</Text>
                </TouchableWithoutFeedback>
                <Text style={{textAlign:'center'}}>Pulsa el tiempo para pausar o reanudar</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        textAlign: 'center'
    }
})
