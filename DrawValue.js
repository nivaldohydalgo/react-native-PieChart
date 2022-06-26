import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import config from './config'

const ws ={
    gdValue1: 0,
    gdValue2: 0,
    gdValue3: 0,
}

export default props => {
    ws.gdValue1 = parseInt(props.value1)
    ws.gdValue2 = parseInt(props.value2)
    ws.gdValue3 = parseInt(props.value3)
    ws.gdValue1 = Math.floor(ws.gdValue1).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ws.gdValue2 = Math.floor(ws.gdValue2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ws.gdValue3 = Math.floor(ws.gdValue3).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

    return(
        <View style={styles.container}>

            <View style={styles.containerItem}>
                <View style={styles.viewLeft}>
                    <View style={[ styles.viewColor, { backgroundColor: config.colorValue[1] } ]}>
                    </View>
                </View>
                <View style={styles.viewRight}>
                    <View style={styles.viewDescription}>
                        <Text style={styles.textDescription}>A Vencer</Text>
                    </View>
                    <View style={styles.viewValue}>
                        <Text>{ws.gdValue1}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerItem}>
                <View style={styles.viewLeft}>
                    <View style={[ styles.viewColor, { backgroundColor: config.colorValue[2] } ]}>
                    </View>
                </View>
                <View style={styles.viewRight}>
                    <View style={styles.viewDescription}>
                        <Text style={styles.textDescription}>Vencido</Text>
                    </View>
                    <View style={styles.viewValue}>
                        <Text>{ws.gdValue2}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerItem}>
                <View style={styles.viewLeft}>
                    <View style={[ styles.viewColor, { backgroundColor: config.colorValue[3] } ]}>
                    </View>
                </View>
                <View style={styles.viewRight}>
                    <View style={styles.viewDescription}>
                        <Text style={styles.textDescription}>Prejuizo</Text>
                    </View>
                    <View style={styles.viewValue}>
                        <Text>{ws.gdValue3}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    containerItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    viewLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    viewRight: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    viewColor: {
        minHeight: 14,
        minWidth: 14,
        marginTop: 2,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    viewDescription: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewValue: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    textDescription: {
        fontWeight: 'bold',
    }
})