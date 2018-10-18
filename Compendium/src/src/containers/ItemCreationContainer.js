import React, { Component } from 'react';
// import fetchItemDataFields from '../config.json';

export default class ItemCreationContainer extends Component {
    state = {
        metaDataForm: null,
        count: 0
    }

    componentDidMount = () => {
        //TODO: Fetch all the metadata categories and put them into the state
    }

    setupMetaDataForm = () => {
        let {metaDataForm} = this.state;
        let rows = [];

        if(metaDataForm) {
            for(let i = 0; i< metaDataForm.length; i++) {
                rows.push(
                    <div key={`placholderkey-${this.state.count}`} className="form-group">
                        <label htmlFor={`meta-data-form-item-${i}`}>{metaDataForm.Label}</label>
                        <input type="test" style={{width:"50%"}} className="form-control" name={`meta-data-form-item-${i}`} id={`meta-data-form-item-${i}`} />
                    </div>
                );
            }
        }
        else {
            rows.push(
                <div key={`placholderkey-0`} className="form-group text-center">
                    <label htmlFor="item-name" className="">Item Name</label><br />
                    <input type="text" style={{width:"50%"}} className="" id="item-name" aria-describedby="item-name-help" placeholder="Enter name" />
                </div>);
        }

        // this.setState(prevState => ({
        //     count: prevState.count + 1
        // }));

        return rows;
    }

    render() {
        // let {metaDataForm} = this.state;

        return(
            <div className="meta-data-form">
                {/* {metaDataForm? this.setupMetaDataForm() : "Loading..."} */}
                <div className="col-md-6">
                    {this.setupMetaDataForm()}
                </div>

                <button type="submit" className="btn btn-primary">Submit New Item</button>
            </div>
        );
    }
}