/*==================================================================================
*
*       PieChart 
*       ========
*
*       import PieChart from './PieChart/PieChart'
*
*        <PieChart
*           title='Banco do Brasil'
*           value1={34000}
*           value2={450}
*           value3={12000}
*        />
*
*        <PieChart
*           title='SFN'
*           date='JAN/2019'
*           value1={0}
*           value2={0}
*           value3={0}
*        />
*
==================================================================================*/

import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

import DrawChart from './DrawChart'
import DrawValue from './DrawValue'
import config from './config'

const {height, width} = Dimensions.get('window');

const ws = {
    gdValue1: 0,
    gdValue2: 0,
    gdValue3: 0,
    totValue: 0,
    txtValue: null
}

export default props => {
    ws.gdValue1 = parseInt(props.value1)
    ws.gdValue2 = parseInt(props.value2)
    ws.gdValue3 = parseInt(props.value3)
    ws.totValue = Math.floor(ws.gdValue1 + ws.gdValue2 + ws.gdValue3)
    ws.txtValue = ws.totValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')

    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <View style={styles.viewAlign}>
                    <Text style={styles.fontTitle}>{props.title}</Text>
                    { props.date ? <Text>  (Data-base {props.date})</Text> : null } 
                </View>
            </View>
            <View style={styles.viewData}>
                <View style={styles.viewChart}>
                    <View style={styles.chartBack}>
                        <DrawChart {...props} />
                        <View style={styles.valueChart}>
                            <Text style={styles.fontValue}>{ws.txtValue}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewValue}>
                    <DrawValue {...props} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: config.colorBack,
    },

    /*-- Titulo --*/
    viewTitle: {
        marginTop: 8,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: config.colorBack,
    },
    viewAlign: {
        backgroundColor: config.colorBack,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    /*-- Valor Total --*/
    valueChart: {
        backgroundColor: config.colorBack,
        minHeight: height/4,
        margin: '15%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
    },
    fontValue: {
        fontWeight: 'bold',
    },

    /*-- Views do Chart --*/
    viewData: {
        marginLeft: 10,
        backgroundColor: config.colorBack,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewChart: {
        flex: 6,
        backgroundColor: config.colorBack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewValue: {
        flex: 4,
        backgroundColor: config.colorBack,
        marginLeft: 8,
        marginRight: 14,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    /*-- Montagem do Chart --*/
    chartBack: {
        minHeight: height/3,
        margin: 6,
        marginLeft: 14,
        backgroundColor: config.colorBack,
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
    },
})