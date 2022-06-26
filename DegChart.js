import React from 'react';
import { StyleSheet, View } from 'react-native';

import config from './config'

const ws = {
    valueRotate: 0,
    degreeStyle1: null,
    degreeStyle2: null,
}

export default props => {
    ws.valueRotate = props.rotate.toString()
    ws.valueRotate += 'deg' 
    
    ws.degreeStyle1 = [styles.viewColor]
    if (props.color1) ws.degreeStyle1.push({ backgroundColor: props.color1 })
    ws.degreeStyle2 = [styles.viewColor]
    if (props.color2) ws.degreeStyle2.push({ backgroundColor: props.color2 })

    return (
        <View style={[ styles.degreeChart, { transform: [{ rotate: ws.valueRotate }] } ]}>
            <View style={ws.degreeStyle1}></View>
            <View style={ws.degreeStyle2}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    degreeChart: {
        position: 'absolute',
        height: '1%',
        width: '94%',
        flexDirection: 'row',
        backgroundColor: config.colorBack,
    },
    viewColor: {
        flex: 1,
        backgroundColor: config.colorValue[0],
    },
})