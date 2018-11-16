import React, {Component} from "react";
import CreateCollectionPage from './CreateCollectionPage';
import CollectionContext from './CollectionContext';
import SpecificCollectionContainer from './SpecificCollectionContainer';

export default class CollectionContainer extends Component {
    state = {
        collectionData: null,
        view: 'view'
    }

    componentDidMount() {
        //TODO: Get all of the ehibit names and display them
        //TODO: Right the fetch api instead of using this hardcoded fake data

        let fakeData = {
            collections: [{
                id: 123,
                title: "Chickasaw Photo Collection",
                imageSource: "./images/stock-img-album.svg",
                description: "View the Chickasaw Nation photo collection",
            },
            {
                id: 321,
                title: "Chickasaw Book Collection",
                imageSource: "./images/book-stack.svg",
                description: "View the Chickasaw Nation book collection",
            },
            {
                id: 321,
                title: "The Village Library Book Collection",
                imageSource: "./images/book-stack.svg",
                description: "View the Village Library book collection",
            }],
            books: [],
            photos: [],
            files: [],

        }

        this.setState({
            collectionData: fakeData
        });
    }

    postNewCollection = () => {
        console.log("Post New Collection Clicked");

        fetch('localhost:4000/api/collection/addItem', {
            method: 'post',
            body: JSON.stringify(this.state.specificPage)
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

    updateNewCollection = () => {
        console.log("Update Collection Clicked");
    }

    //TODO: Turn this into displayAllCollections
    displayAllCollections = () => {
        let rows = []
        let {collectionData} = this.state;

        if(collectionData === null) {
            return;
        }

        for(let i = 0; i < collectionData.collections.length; i++) {
            rows.push(
                <div className="card col-md-6 col-xs-12" style={{width: "5em"}} key={i}>
                    <img className="card-img-top" src={collectionData.collections[i].imageSource || "./images/stock-img-album.svg"} style={{
                            width: "15%",
                            marginLeft:"42.5%",
                            marginTop: "2em"
                        }} alt="Card cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{collectionData.collections[i].title}</h5>
                        <p className="card-text">{collectionData.collections[i].description}</p>
                        <button id={collectionData.collections[i].id} name={collectionData.collections[i].title} className="btn btn-info" onClick={this.displaySpecificCollection}>View</button>
                    </div>
                </div>
            );
        }

        return rows;
    }

    displaySpecificCollection = (e) => {
        //TODO: diplay the collection using the target's ID 'e.target.id' or whatever
        //Basically switch out the view all collections to a view specific collection

        //TODO: Start here, create the page to view a specific selection.

        //Do you need to pass the id? Can't you just change the state and use the info from the specific collection you clicked on?
        //Can't the button you clicked on change the state?
        this.setState({
            view: 'specific',
            specificPage: {
                id: e.target.id,
                title: e.target.name
            }
        });
    }

    displayDefaultSection = () => {
        return (
            <React.Fragment>
                <h2>There aren't any collections yet. Create one! </h2>
                <div className="row">
                    {/* <Card src="./images/stock-img-album.svg" title="Create new photo collection" description="Create a new photo collection to store images" buttonText="Create" buttonType="info"/>
                    <Card src="./images/book-stack.svg" title="Create new book collection" description="Create a new digital book collection to your digital books" buttonText="Create" buttonType="info"/> */}
                    TODO: Add this!
                </div>
            </React.Fragment>
        );
    }

    displayCreateSection = () => {
        this.setState({
            view: 'create'
        });
    }

    displayViewSection = () => {
        this.setState({
            view: 'view'
        });
    }

    pageSetup = () => {
        let {collectionData, view} = this.state;

        let page;

        if (view === 'view') {
            page =
            <React.Fragment>
                <div className="col-md-12">
                    <div className="text-center">
                        <h1>Collections</h1>
                    </div>
                    <div className="container text-center" >
                        <h3>Create new Collection</h3>
                        <br />
                        <button className={`btn btn-primary text-center`} onClick={this.displayCreateSection}>Create</button>
                        <br /><br /><br />
                    </div>
                    <div className="row">
                        {collectionData === null ? this.displayDefaultSection() : this.displayAllCollections()}
                    </div>
                </div>
            </React.Fragment>;
        }else if(view ==='create') {
            page =
            <div className="row col-md-12">
                <div className="col-md-9">
                    <button className="btn btn-secondary" onClick={this.displayViewSection}>GoBack</button>
                    <br />
                    <CreateCollectionPage />
                </div>
            </div>;
        }else if (view==='specific') {
            page =
            <div className="row col-md-12">
                <div className="col-md-9">
                    <button className="btn btn-secondary" onClick={this.displayViewSection}>GoBack</button>
                    <br />
                    <SpecificCollectionContainer id={this.state.specificPage.id} title={this.state.specificPage.title} />
                </div>
            </div>;
        }

        return page
    }

    render() {
        return (
            <CollectionContext.Provider value={{
                state: this.state,
                actions: {
                    displayCreateSection: this.displayCreateSection,
                    displayDefaultSection: this.displayDefaultSection,
                    displayViewSection: this.displayViewSection,
                    displaySpecificCollection: this.displaySpecificCollection,
                    displayAllCollections: this.displayAllCollections,
                    postNewItem: this.postNewItem,
                    updateItem: this.updateItem,
                    postNewCollection: this.postNewCollection,
                    updateNewCollection: this.updateNewCollection
                }
            }}>
                {this.pageSetup()}
            </CollectionContext.Provider>
        );
    }
}