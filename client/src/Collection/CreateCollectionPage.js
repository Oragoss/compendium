import React from 'react';
import CollectionContext from './CollectionContext';
import SelectComponent from '../Shared/SelectComponent.js';


const CreateCollectionPage = (props) => {
    let options = [
        { value: 'Collection', label: 'Collection' },
        { value: 'Dataset', label: 'Dataset' },
        { value: 'Event', label: 'Event' },
        { value: 'Image', label: 'Image' },
        { value: 'InteractiveResource', label: 'InteractiveResource' },
        { value: 'MovingImage', label: 'MovingImage' },
        { value: 'PhysicalObject', label: 'PhysicalObject' },
        { value: 'Service', label: 'Service' },
        { value: 'Software', label: 'Software' },
        { value: 'Sound', label: 'Sound' },
        { value: 'StillImage', label: 'StillImage' },
        { value: 'Text', label: 'Text' }
    ];
    return (
        // React Context.Consumer?
        <CollectionContext.Consumer>
            {({state, actions}) => (
                <div className="col-md-12 col-xs-12" style={{width: props.width}}>
                    <div className="row">
                        <div className="form-group col-md-9 col-xs-12">
                            <img className="card-img-top" src="./images/book-stack.svg" style={{
                                    width: "15%",
                                    marginLeft:"42.5%",
                                    // marginTop: "2em"
                                }} alt="Card cap"
                            />
                            <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">Example file input</label>
                                <input type="file" className="form-control-file" />
                            </div>
                        </div>
                        <div className="row col-md-3 col-xs-12">
                            <label>Title</label>
                            <input className="form-control" type="text" />
                            <label>Subject</label>
                            <input className="form-control" type="text" />
                            <label>Type</label>
                            <SelectComponent
                                options={options}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label>Description</label>
                        <input className="form-control" type="textbox" />
                    </div>
                    <div className="row">
                        <label>Creator</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Contributers</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Coverage</label>
                        <input className="form-control" type="textbox" />
                    </div>
                    <div className="row">
                        <label>Date</label>
                        <input className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Format</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Identifier</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Language</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Publisher</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Relation</label>
                        {/* Is this a React Select component? */}
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Rights</label>
                        <input className="form-control" type="textbox" />
                    </div>
                    <div className="row">
                        <label>Source</label>
                        <input className="form-control" type="text" />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={actions.postNewCollection}>Create</button>
                </div>
            )}
        </CollectionContext.Consumer>
    );
}

export default CreateCollectionPage;