// React Imports
import React from 'react';
import {Chart} from "react-google-charts";
import { usePromiseTracker } from "react-promise-tracker";

export const GenericChart = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        !promiseInProgress &&
        <div className="GenericChart">
            <header className="Generic-header">
                <span>
                <a href="# " style={{ marginLeft: '.5rem' }} >
                    <Chart
                        chartType={props.chartType}
                        width={props.width}
                        height={props.height}
                        data={props.data}
                        options={props.options}
                    /> 
                </a>
                </span>
            </header>
        </div>
    );
}
export default GenericChart;
      


