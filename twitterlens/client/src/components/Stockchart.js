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
            vAxis: { title: "Price" }
        };

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