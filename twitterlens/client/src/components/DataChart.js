import React, {Component} from 'react';

class DataChart extends Component {
    constructor(props) {
        super(props);
        let options = {};
        let chartDOMElement = (<p>THIS IS UNSET CHART DOM</p>);
    }

    setOptions(optionsMap){
        console.log("I'm IN SUPER Set Option");
        this.options = optionsMap;
    }

    getOptions(){
        console.log("I'm IN SUPER Get Option");
        return(this.options);
    }

    setChart(plotHMTL){
        console.log("I'm IN SUPER Set Chart");
        this.chartDOMElement = plotHMTL
    }

    getChart(){
        console.log("I'm IN SUPER Get Chart");
        return(this.chartDOMElement);
    }
}

export default DataChart;