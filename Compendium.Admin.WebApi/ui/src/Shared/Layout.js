import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default class Layout extends React.Component {
    state = {

    }

    render() {
        return (
            //TODO: This
            <React.Fragment>
                <Navbar />
                
                <div className="container-fluid" style={{marginTop: "5%"}}>
                    <div className="row">
                        <Sidebar />
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}