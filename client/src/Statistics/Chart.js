import React, {Component} from 'react';

export default class Chart extends Component {
    render() {
        return (
            <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas>
        );
    }
}