import React, {Component} from "react";
import Layout from './Shared/Layout';
import Exhibit from './Exhibit';

const ExhibitContext = React.createContext();

export default class ExhibitContainer extends Component {
    state = {
        exhibitData: null
    }

    componentDidMount() {
        //TODO: Get all of the ehibit names and display them
        this.populateFakeData();
    }

    populateFakeData() {
        
    }

    render() {
        return (
            //TODO: Put the context api actions parameter here
            <ExhibitContext.Provider value = {
                this.state
            }>
            <Layout>
                <div className="container">
                    <div className="row">
                        <h1>My Exhibits</h1>
                    </div>
                    <div className="row">
                            <Exhibit src="./images/stock-img.svg" title="View Chickisaw Exhibit" description="View the Chickasaw Nation exhibit" buttonText="View" buttonType="primary" />
                            <Exhibit src="./images/stock-img.svg" title="View Viliage Exhibit" description="View The City of the Village exhibit" buttonText="View" buttonType="primary" />
                        </div>
                </div>
            </Layout>
            </ExhibitContext.Provider>
        );
    }
}