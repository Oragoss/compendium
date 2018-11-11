import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="container-fluid" style={{marginTop: "5%"}}>
                <div className="row col-md-12">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Navbar />
                        {this.props.children}
                    </div>
                </div>
                {/* <Navbar />
                <div className="col-md-3 col-xs-12">
                    <Sidebar />
                </div>
                <div className="col-md-12 col-xs-12">
                    {this.props.children}
                </div> */}
            </div>
        );
    }
}