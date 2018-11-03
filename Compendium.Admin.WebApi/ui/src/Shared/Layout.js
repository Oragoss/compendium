import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop: "5%"}}>
                <Navbar />
                <div className="col-md-3 col-xs-12">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-xs-12">
                    {this.props.children}
                </div>
            </div>
        );
    }
}