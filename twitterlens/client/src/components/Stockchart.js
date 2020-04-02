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
            title: "Stock Price",
            hAxis: { title: "Day" },
            vAxis: { title: "Price" },
            legend: "none"
        };
        
        // const data = [
        //     ["Day", "", "", "", ""],
        //     ["Mon", 20, 28, 38, 45],
        //     ["Tue", 31, 38, 55, 66],
        //     ["Wed", 50, 55, 77, 80],
        //     ["Thu", 77, 77, 66, 50],
        //     ["Fri", 68, 66, 22, 15]
        // ];

        return (
            <div className="Stockchart">
                <header className="Stock-header">
                    <span>
                    <a style={{ marginLeft: '.5rem' }} >
                        <Chart
                            chartType="CandlestickChart"
                            width="800px"
                            height="500px"
                            data={this.props.data}
                            options={options}
                        /> 
                    </a>
                    </span>
                </header>
            </div>
        )
    }
}

export default Stockchart;