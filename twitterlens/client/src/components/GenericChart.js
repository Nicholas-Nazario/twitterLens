// React Imports
import React, {Component} from 'react';
import {Chart} from "react-google-charts";

class GenericChart extends Component{
    render() {

        return (
            <div className="GenericChart">
                <header className="Generic-header">
                    <span>
                    <a style={{ marginLeft: '.5rem' }} >
                        <Chart
                            chartType={this.props.chartType}
                            width={this.props.width}
                            height={this.props.height}
                            data={this.props.data}
                            options={this.props.options}
                        /> 
                    </a>
                    </span>
                </header>
            </div>
        )
    }
}
export default GenericChart;
      


