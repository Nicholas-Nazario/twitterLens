import React, {Component} from 'react';
import {Chart} from "react-google-charts";

class Stockchart extends Component {
    render() {
        const options = {
            legend: 'none',
            bar: { groupWidth: '100%' }, // Remove space between bars.
            candlestick: {
                fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
            },
            hAxis: { 
                titleTextStyle:{color: '#FFF'},
                textStyle:{color: '#FFF'}, 
                title: "Day" 
            },
            vAxis: { 
                titleTextStyle:{color: '#FFF'},
                textStyle:{color: '#FFF'},
                title: "Price"
            },
            textColor: '##FFFFFF',
            backgroundColor: { fill:'transparent' },
            'chartArea': {
                'backgroundColor': {
                    'fill': '#2f3238',
                    'opacity': 100
                 },
             },
            legend: "none"
        };

        return (
            <div className="Stockchart">
                <Chart
                    chartType="CandlestickChart"
                    width="1100px"
                    height="600px"
                    data={this.props.data}
                    options={options}
                /> 
            </div>
        )
    }
}

export default Stockchart;