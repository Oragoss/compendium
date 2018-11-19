import React, {Component} from "react";
import SpecificCollectionContext from './SpecificCollectionContext';
import AddItem from './AddItem';

export default class SpecificCollectionContainer extends Component {
    state = {
        view: "default",
        itemType: "",
        id: "",
        type: "",
        title: "",
        subject: "",
        type: "",
        description: "",
        valid: "",
        creator: "",
        contributers: [],
        coverage:"",
        date: "",
        format: "",
        identifier: "",
        language: "",
        publisher: "",
        relation: "",
        rights: "",
        source: "",
        abstract: "",
        accessRights: "",
        accrualMethod: "",
        accrualPeriodicity: "",
        alternative: "",
        audience: "",
        available: "",
        bibliographicCitation: "",
        conformsTo: "",
        created: "",
        dateAccepted: "",
        dateCopyrighted: "",
        dateSubmitted: "",
        educationLevel: "",
        extent: "",
        hasFormat: "",
        hasPart: "",
        hasVersion: "",
        instructionalMethod: "",
        isFormatOf: "",
        isPartOf: "",
        isReferencedBy: [],
        isReplacedBy: [],
        isRequiredBy: [],
        issued: "",
        isVersionOf: "",
        license: "",
        mediator: "",
        medium: "",
        modified: "",
        provenance: "",
        references: [],
        replaces: "",
        requires: "",
        rightsHolder: "",
        spatial: "",
        tableOfContents: "",
        temporal: ""
    }

    componentDidMount() {
        // fetch('localhost:4000/api/collection/getItem', {method: 'get', credentials: 'include'})
        // .then((response) => {
        //     if(!response.ok) {
        //         throw Error(response.statusText);
        //     }
        //     return response;
        // })
        // .then((resp) => resp.json())
        // .then((data) => {
        //     console.log(data);
        //     //TODO: Set the state
        //     /*
        //     this.setState({
        //         id: data.id,
        //         type: data.type,
        //         title: data.title,
        //         subject: data.subject,
        //         type: data.type,
        //         description: data.description,
        //         valid: data.valid,
        //         creator: data.,
        //         contributers: [],
        //         coverage:data.,
        //         date: "",
        //         format: "",
        //         identifier: "",
        //         language: data.,
        //         publisher: data.,
        //         relation: data.,
        //         rights: data.,
        //         source: data.,
        //         abstract: data.,
        //         accessRights: data.,
        //         accrualMethod: data.,
        //         accrualPeriodicity: data.,
        //         alternative: "",
        //         audience: data.,
        //         available: "",
        //         bibliographicCitation: data.,
        //         conformsTo: data.,
        //         created: data.,
        //         dateAccepted: data.,
        //         dateCopyrighted: data.,
        //         dateSubmitted: data.,
        //         educationLevel: data.,
        //         extent: data.,
        //         hasFormat: data.,
        //         hasPart: data.,
        //         hasVersion: data.,
        //         instructionalMethod: data.,
        //         isFormatOf: data.,
        //         isPartOf: data.,
        //         isReferencedBy: [],
        //         isReplacedBy: [],
        //         isRequiredBy: [],
        //         issued: data.,
        //         isVersionOf: data.,
        //         license: data.,
        //         mediator: data.,
        //         medium: data.,
        //         modified: data.,
        //         provenance: data.,
        //         references: [],
        //         replaces: data.,
        //         requires: data.,
        //         rightsHolder: data.,
        //         spatial: data.,
        //         tableOfContents: data.,
        //         temporal: data.
        //     });

        //     */
        // });
    }

    handleItemChange = (e) => {
        console.log("Event name:", e.target.name);
        console.log("Event value:", e.target.value);

        this.setState({[e.target.name] : e.target.value});
    }

    postNewItem = () => {
        console.log("Post New Item Clicked");

        fetch('http://localhost:4000/api/collection/addItem', {
            method: 'post',
            body: JSON.stringify(this.state)
        }).then((response) => {
            if(!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((resp) => {
            return resp.json();
        }).then((data) => {
            console.log(data);
        });
    }

    updateItem = () => {
        console.log("Update Item Clicked");
    }

    card = (param) => {
        return (
            <div className="card col-md-6 col-xs-12" style={{width: "5em"}}>
                <img className="card-img-top" src={param.src} style={{
                        width: "15%",
                        marginLeft:"42.5%",
                        marginTop: "2em"
                    }} alt="Card cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{param.title}</h5>
                    <p className="card-text">{param.description}</p>
                    <button onClick={this.changeViewToAddItemPage} id={param.type} className={`btn btn-${param.buttonType}`}>{param.buttonText}</button>
                </div>
            </div>
        );
    }

    renderCreationPage = () => {
        let page;

        if(this.state.view === "default") {
            page =
                <React.Fragment>
                    <p>*SpecificCollectionContainer*</p>
                    <button className="btn btn-success">Edit</button>
                    <h1>{this.props.title}</h1>
                    <p>Lorem ipsum dolor amet blue bottle forage direct trade, occupy tattooed chambray master cleanse etsy gastropub cloud bread art party mumblecore. La croix direct trade yr readymade fashion axe, authentic +1 irony. Flexitarian succulents microdosing kickstarter YOLO trust fund deep v, vexillologist cornhole food truck meggings drinking vinegar actually. La croix keffiyeh kitsch skateboard unicorn church-key jianbing everyday carry tbh pork belly. Brooklyn single-origin coffee kinfolk mumblecore portland, jean shorts master cleanse ethical prism godard paleo whatever. Waistcoat mustache bitters paleo flannel semiotics post-ironic blue bottle flexitarian marfa etsy cardigan raw denim YOLO. 8-bit selfies thundercats whatever pop-up blue bottle intelligentsia readymade vaporware marfa everyday carry.</p>
                    <img className="card-img-top" src="./images/book-stack.svg" style={{
                            width: "15%",
                            marginLeft:"42.5%",
                            // marginTop: "2em"
                        }} alt="Card cap"
                    />
                    <br /><br />
                    <div className="row">
                        {this.card({type: "photo", src: "./images/stock-img.svg", title:"Add new photo", description:"Add a new photo to a new or existing collection", buttonText:"+Add", buttonType:"primary"})}
                        {this.card({type: "book", src: "./images/book-orange.svg", title:"Add new book", description:"Add a new book to a new or existing collection", buttonText:"+Add", buttonType:"primary"})}
                        {this.card({type: "document", src: "./images/blank-document.svg", title:"Add new file", description:"Add a new html, txt, pdf, or other file to a new or existing collection", buttonText:"+Add", buttonType:"primary"})}
                    </div>
                </React.Fragment>;
        }
        else if(this.state.view === "add") {
            page =
                <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <AddItem type={this.state.itemType} />
                </div>;
        }

        return page
    }

    changeViewToDefault = () => {
        this.setState({
            view: 'default'
        });
    }

    changeViewToAddItemPage = (e) => {
        this.setState({
            view: 'add',
            type: e.target.id
        });
    }

    render() {
        return (
            <SpecificCollectionContext.Provider value={{
                state: this.state,
                actions: {
                    handleItemChange: this.handleItemChange,
                    postNewItem : this.postNewItem,
                    updateItem: this.updateItem
                }
            }}>
                {this.renderCreationPage()}
            </SpecificCollectionContext.Provider>
        );
    }
}