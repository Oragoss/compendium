import React, {Component} from 'react';
import Layout from '../Shared/Layout';
import Chart from './Chart';

export default class Statistics extends Component {
    state = {

    }
    render() {
        return(
            <Layout>
                 <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <p>TODO: <strong>This</strong></p>
                    <Chart />
                </main>
            </Layout>
        );
    }
}