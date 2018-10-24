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
                <div className="container text-center" style={{marginTop: "25%", marginBottom: "5%"}}>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </div>
            </React.Fragment>
        );
    }
}