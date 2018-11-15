import React from 'react';
import CollectionContext from './CollectionContext';
import SelectComponent from '../Shared/SelectComponent.js';
import ReactQuill from 'react-quill';

let typeOptions = [
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

const AddItem = (props) => {

    return (
        // React Context.Consumer?
        <CollectionContext.Consumer>
            {({state, actions}) => (
                <React.Fragment>
                    <h1>Add new {props.type}</h1>
                    <div className="row">
                        <div className="form-group col-md-6 col-xs-12">
                            <img className="card-img-top" src="./images/book-stack.svg" style={{
                                    width: "15%",
                                    marginLeft:"42.5%"
                                }} alt="Card cap"
                            />
                            <div className="form-group col-md-6 col-xs-12">
                                <label>Input {`${state.type}`} file here</label>
                                <input type="file" className="form-control-file" />
                            </div>
                        </div>
                        <div className="row col-md-3 col-xs-12">
                            <label>Title</label>
                            <input className="form-control" type="text" />
                            <label>Subject</label>
                            <input className="form-control" type="text" />
                            <label>Type</label>
                            <SelectComponent options={typeOptions} />
                        </div>
                    </div>
                    <div className="row">
                        <label>Description</label>
                        <ReactQuill />
                    </div>
                    <div className="row">
                        <label>Valid</label>
                        <input className="form-control" type="checkbox" />
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
                        <textarea className="form-control tinyMCETextArea" type="textarea" />
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
                        <textarea className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Source</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Abstract</label>
                        <textarea className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Access Rights</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Accrual Method</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Accrual Periodicity</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Alternative</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Audience</label>
                        <input className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Available</label>
                        <input className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Bibliographic Citation</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Conforms To</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Created</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Date Accepted</label>
                        <input className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Date Copyrighted</label>
                        <input className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Date Submitted</label>
                        <input className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Education Level</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Extent</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Has Format</label>
                        <input className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Has Part</label>
                        <input className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Has Version</label>
                        <input className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Instructional Method</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Format Of</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Part Of</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Referenced By</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Replaced By</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Required by</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Issued</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Version Of</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>License</label>
                        <input className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Mediator</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Medium</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Modified</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Provenance</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                    {/* Select Component? */}
                        <label>References</label>
                        <input className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Replaces</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Requires</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Rights Holder</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Spatial</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Table Of Contents</label>
                        <textarea className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Temporal</label>
                        <input className="form-control" type="text" />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={actions.postNewItem}>Add</button>
                </React.Fragment>
            )}
        </CollectionContext.Consumer>
    );
}

export default AddItem;