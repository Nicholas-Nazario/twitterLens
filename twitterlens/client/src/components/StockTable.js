// React Imports
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";

// This class creates the StockTable Object.
// This component is displayed on everypage to allow the user to view stock data as a table
// It extends the react Component inheriting essetial react functionality such as render()

export const StockTable = props => {
    // Render the below HTML code and export as a StockTable Object
    // This lets the index.js read the HTML as a single object
    const { promiseInProgress } = usePromiseTracker();
    return (
        // Navabar component and formatting is following the template from BootStrap 4.4.x
        !promiseInProgress &&
        <div className="StockTable">
            <header className="StockTable-header">
                <div>
                    <table className="table table-bordered"> 
                        <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Open ($)</th>
                            <th scope="col">High ($)</th>
                            <th scope="col">Low ($)</th>
                            <th scope="col">Close ($)</th>
                            <th scope="col">Volume (shares)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">{props.stocks[0]}</th>
                            <td>{props.stocks[1][0]}</td>
                            <td>{props.stocks[1][1]}</td>
                            <td>{props.stocks[1][2]}</td>
                            <td>{props.stocks[1][3]}</td>
                            <td>{props.stocks[1][4]}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                </div>
            </header>
        </div>
    );
}
export default StockTable;
      


