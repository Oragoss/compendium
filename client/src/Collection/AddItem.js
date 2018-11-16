import React from 'react';
import SpecificCollectionContext from './SpecificCollectionContext';
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
        <SpecificCollectionContext.Consumer>
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
                                {/* TODO: Fix this, put in a prop or something */}
                                <label>Input {`${state.type}`} file here</label>
                                <input type="file" className="form-control-file" />
                            </div>
                        </div>
                        <div className="row col-md-3 col-xs-12">
                            <label>Title</label>
                            <input name="title" value={state.title} onChange={actions.handleItemChange} className="form-control" type="text" />
                            <label>Subject</label>
                            <input name="subject" value={state.subject} onChange={actions.handleItemChange} className="form-control" type="text" />
                            <label>Type</label>
                            {/* TODO: Handle this component's state change */}
                            <SelectComponent options={typeOptions}  />
                        </div>
                    </div>
                    <div className="row">
                        <label>Description</label>
                        <ReactQuill />
                        <textarea name="description" value={state.description} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Valid</label>
                        <input name="valid" value={state.valid} onChange={actions.handleItemChange} className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Creator</label>
                        <input name="creator" value={state.creator} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Contributers</label>
                        <input name="contributer" value={state.contributer} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Coverage</label>
                        <textarea name="coverage" value={state.coverage} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Date</label>
                        <input name="date" value={state.date} onChange={actions.handleItemChange} className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Format</label>
                        <input name="format" value={state.format} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Identifier</label>
                        <input name="identifier" value={state.identifier} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Language</label>
                        <input name="language" value={state.language} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Publisher</label>
                        <input name="publisher" value={state.publisher} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Relation</label>
                        {/* Is this a React Select component? */}
                        <input name="relation" value={state.relation} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Rights</label>
                        <textarea name="rights" value={state.rights} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Source</label>
                        <input name="source" value={state.source} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Abstract</label>
                        <textarea name="abstract" value={state.abstract} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Access Rights</label>
                        <input name="accessRights" value={state.accessRights} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Accrual Method</label>
                        <input name="accrualMethod" value={state.accrualMethod} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Accrual Periodicity</label>
                        <input name="accrualPeriodicity" value={state.accrualPeriodicity} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Alternative</label>
                        <input name="alternative" value={state.alternative} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Audience</label>
                        <input name="audience" value={state.audience} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Available</label>
                        <input name="available" value={state.available} onChange={actions.handleItemChange} className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Bibliographic Citation</label>
                        <input name="bibliographicCitation" value={state.bibliographicCitation} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Conforms To</label>
                        <input name="conformsTo" value={state.conformsTo} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Created</label>
                        <input name="created" value={state.created} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Date Accepted</label>
                        <input name="dateAccepted" value={state.dateAccepted} onChange={actions.handleItemChange} className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Date Copyrighted</label>
                        <input name="dateCopyrighted" value={state.dateCopyrighted} onChange={actions.handleItemChange} className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Date Submitted</label>
                        <input name="dateSubmitted" value={state.dateSubmitted} onChange={actions.handleItemChange} className="form-control" type="date" />
                    </div>
                    <div className="row">
                        <label>Education Level</label>
                        <input name="educationLevel" value={state.educationLevel} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Extent</label>
                        <input name="extent" value={state.extent} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Has Format</label>
                        <input name="hasFormat" value={state.hasFormat} onChange={actions.handleItemChange} className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Has Part</label>
                        <input name="hasPart" value={state.hasPart} onChange={actions.handleItemChange} className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Has Version</label>
                        <input name="hasVersion" value={state.hasVersion} onChange={actions.handleItemChange} className="form-control" type="checkbox" />
                    </div>
                    <div className="row">
                        <label>Instructional Method</label>
                        <input name="instructionalMethod" value={state.instructionalMethod} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Format Of</label>
                        <input name="isFormatOf" value={state.isFormatOf} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Part Of</label>
                        <input name="isPartOf" value={state.isPartOf} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Referenced By</label>
                        <input name="isReferencedBy" value={state.isReferencedBy} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Replaced By</label>
                        <input name="isReplacedBy" value={state.isReplacedBy} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Required by</label>
                        <input name="isRequiredBy" value={state.isRequiredBy} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Issued</label>
                        <input name="issued" value={state.issued} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Is Version Of</label>
                        <input name="isVersionOf" value={state.isVersionOf} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>License</label>
                        <input name="license" value={state.license} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Mediator</label>
                        <input name="mediator" value={state.mediator} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Medium</label>
                        <input name="medium" value={state.medium} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Modified</label>
                        <input name="modified" value={state.modified} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Provenance</label>
                        <input name="provenance" value={state.provenance} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                    {/* Select Component? */}
                        <label>References</label>
                        <input name="references" value={state.references} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Replaces</label>
                        <input name="replaces" value={state.replaces} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Requires</label>
                        <input name="requires" value={state.requires} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Rights Holder</label>
                        <input name="rightsHolder" value={state.rightsHolder} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Spatial</label>
                        <input name="spatial" value={state.spatial} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <div className="row">
                        <label>Table Of Contents</label>
                        <textarea name="tableOfContents" value={state.tableOfContents} onChange={actions.handleItemChange} className="form-control tinyMCETextArea" type="textarea" />
                    </div>
                    <div className="row">
                        <label>Temporal</label>
                        <input name="temporal" value={state.temporal} onChange={actions.handleItemChange} className="form-control" type="text" />
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={actions.postNewItem}>Add</button>
                </React.Fragment>
            )}
        </SpecificCollectionContext.Consumer>
    );
}

export default AddItem;