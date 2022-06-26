import React from 'react';

import DegChart from './DegChart'
import config from './config'

const ws = {
    chart: [],
    color: [],
    gdValue: [0 , 0 , 0 , 0],
    gdTotal: 0,
    qtValue: 0,
    posValue: 0,
    qtDegree: [0 , 0 , 0 , 0],
    totalEsp: 0,
    totalDeg: 0,
    posDeg: 0,
    c1: null,
    c2: null,
}

export default props => {
    ws.chart = []
    ws.color = []
    for ( i = 0; i < 360; i++ ) {
        ws.color.push(0)
    }

    /*-- Totaliza os valores recebidos --*/
    ws.gdValue[1] = parseInt(props.value1)
    ws.gdValue[2] = parseInt(props.value2)
    ws.gdValue[3] = parseInt(props.value3)
    ws.gdTotal = ws.gdValue[1] + ws.gdValue[2] + ws.gdValue[3]

    /*-- Conta quantos valores foram recebidos (maior 0) --*/
    ws.qtValue = 0
    ws.posValue = 0
    for ( i = 1; i <= 3; i++ ) {
        if ( ws.gdValue[i] > 0 ) {
            ws.qtValue++ 
            ws.posValue = i        
        } 
    }

    /*-- Se apenas um valor recebido, enche o grafico --*/
    if ( ws.qtValue == 1 ) {
        for ( i = 0; i < 360; i++ ) { 
            ws.color[i] = ws.posValue 
        } 
    }

    /*-- Se mais de um valor recebido, divide o grafico --*/
    if ( ws.qtValue > 1 ) {

        /*-- Verifica quantos graus para cada valor --*/
        ws.qtDegree = [0 , 0 , 0 , 0]
        for ( i = 1; i <= 3; i++ ) {
            if ( ws.gdValue[i] > 0 ) {
                ws.qtDegree[i] =  Math.floor( ( ws.gdValue[i] / ws.gdTotal ) * 360 )
                if ( ws.qtDegree[i] < 3 ) { ws.qtDegree[i] = 3 } 
            } 
        }

        /*-- Totaliza a quantidade de graus mais os espacos entre as barras --*/
        ws.totalEsp = ws.qtValue * 2
        ws.totalDeg = Math.floor( ws.qtDegree[1] + ws.qtDegree[2] + ws.qtDegree[3] + ws.totalEsp )

        /*- Ajusta quantidade de graus para 360 --*/
        if ( !(ws.totalDeg == 360) ) {
            while ( !(ws.totalDeg == 360) ) {
                for ( i = 1; i <= 3; i++ ) {
                    if ( !(ws.totalDeg == 360) ) {
                        if ( ws.qtDegree[i] > 120 ) {
                            if ( ws.totalDeg > 360 ) {
                                ws.qtDegree[i]--
                                ws.totalDeg--
                            } else {
                                ws.qtDegree[i]++
                                ws.totalDeg++
                            }
                        } 
                    }
                }
            }
        } 

        /*- Carrega o array de graus com as cores 1, 2 ou 3 e 9(separador) --*/
        ws.posDeg = 0
        for ( i = 1; i <= 3; i++ ) {
            ws.qtDeg = ws.qtDegree[i]
            if ( !( ws.qtDeg == 0 ) ) {
                /*-- Carrega o array com os graus da cor --*/
                for ( x = 1; x <= ws.qtDeg; x++ ) { 
                    ws.color[ws.posDeg] = i
                    ws.posDeg++ 
                } 
                /*-- Carrega o separador de cor --*/
                ws.color[ws.posDeg] = 9;  ws.posDeg++; 
                ws.color[ws.posDeg] = 9;  ws.posDeg++; 
        }
        }
        /*-- Adiciona separador de barras final --*/
        ws.color[ws.posDeg] = 9;  ws.posDeg++; 
        ws.color[ws.posDeg] = 9;  ws.posDeg++;  
    }

    /*-- Renderiza o Chart --*/
    for ( i = 0; i < 180; i++ ) {
        let x = i + 180
        ws.c1 = ws.color[i]
        ws.c2 = ws.color[x]
        ws.chart.push(<DegChart 
            rotate={i} 
            color1={ ws.c1 == 9 ?  config.colorBack : config.colorValue[ws.c1] } 
            color2={ ws.c2 == 9 ?  config.colorBack : config.colorValue[ws.c2] } 
            />
        )
    }
    
    return ws.chart
}
