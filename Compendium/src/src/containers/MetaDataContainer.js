import React, { Component } from 'react';
// import fetchMetaDataFields from '../config.json';

export default class MetaDataContainer extends Component {
    state = {
        currentMetaData: null,
        count: 0,
        metaDataArea: [],
        error: null
    }

    componentDidMount = () => {
        //TODO: hit api get the result
        // fetch(fetchMetaDataFields, {credentials: 'include'})
        // .then((response) => {
        //     if (!response.ok){
        //         throw Error(response.statusText);
        //     }
        //     return response;
        // })
        // .then(resp => resp.json())
        // .then((data) => {
        //     this.setState({
        //         currentMetaData: data
        //     })
        // })
        // .catch((err) => {
        //     /* eslint-disable no-console */
        //     console.error("There was an error in the MetaDataContainer", err);
        // });

        // let area = <p>
        // New meta data section
        // </p>

        // this.setState({
        //     metaDataArea: area
        // })
    }

    addNewMetaDataTag = () => {
       let html =
       <div key={`${this.state.count}`} className="form-group text-center">
            <label >Meta data option: </label>
            <input type="text" style={{width:"50%"}} className="" placeholder="Add new meta data tag" />
        </div>;

       this.setState(prevState => ({
            count: prevState.count + 1,
            metaDataArea: [...this.state.metaDataArea, html]
        }));
    }

    render() {
        let {metaDataArea} = this.state

        return (
            <div>Metadata placeholder

                <div id="meta-data-pin" ref="container">
                    {metaDataArea}
                </div>
                <button className="btn btn-success" onClick={this.addNewMetaDataTag}>Add new meta tag +</button>
            </div>
        );
    }
}