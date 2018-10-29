import React, {Component} from "react";
import Layout from '../Shared/Layout';
import Card from '../Card';
import CreateCollectionPage from './CreateCollectionPage';
import CollectionContext from './CollectionContext';
// import { Grid, Row, Col } from 'react-flexbox-grid';

export default class CollectionContainer extends Component {
    state = {
        collectionData: null,
        view: 'view'
    }

    componentDidMount() {
        //TODO: Get all of the ehibit names and display them
        //TODO: Right the fetch api instead of using this hardcoded fake data

        let fakeData = [
            {
                id: 123,
                title: "Chickasaw Photo Collection",
                imageSource: "./images/stock-img-album.svg",
                description: "View the Chickasaw Nation photo collection",
                // buttonText: "View"
            },
            {
                id: 321,
                title: "Chickasaw Book Collection",
                imageSource: "./images/stock-img-album.svg",
                description: "View the Chickasaw Nation book collection",
                // buttonText: "View"
            }
        ]

        this.setState({
            collectionData: fakeData
        });
    }

    //TODO: Turn this into displayAllCollections
    displayAllCollections() {
        let rows = []
        let {collectionData} = this.state;

        if(collectionData === null) {
            return;
        }

        for(let i = 0; i < collectionData.length; i++) {
            console.log(collectionData[i]);
            rows.push(
                <Card
                    link=""
                    key={i}
                    id={collectionData[i].id}
                    src={collectionData[i].imageSource}
                    title={collectionData[i].title}
                    description={collectionData[i].description}
                    buttonText="View"
                    buttonType="primary"
                />
            );
        }

        return rows;
    }

    displaySpecificCollection = (e) => {
        //TODO: diplay the collection using the target's ID 'e.target.id' or whatever
        //Basically switch out the view all collections to a view specific collection
    }

    displayDefaultSection = () => {
        return (
            <React.Fragment>
                <h2>There aren't any collections yet. Create one! </h2>
                <div className="row">
                    <Card src="./images/stock-img-album.svg" title="Create new photo collection" description="Create a new photo collection to store images" buttonText="Create" buttonType="info"/>
                    <Card src="./images/book-stack.svg" title="Create new book collection" description="Create a new digital book collection to your digital books" buttonText="Create" buttonType="info"/>
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
            <div className="container col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="row">
                    <h1>Collections</h1>
                </div>
                <div className="row">
                    <h2>Create new Collection</h2>
                    <br />
                    <button className={`btn btn-primary`} onClick={this.displayCreateSection}>Create</button>
                </div>
                <div className="row">
                    {collectionData === null ? this.displayDefaultSection() : this.displayAllCollections()}
                </div>
            </div>;
        }else if(view ==='create') {
            page =
            <div style={{marginLeft: "5%"}}>
                <div className="row">
                    <button className="btn btn-secondary" onClick={this.displayViewSection}>GoBack</button>
                </div>
                <CreateCollectionPage width="100em" />
            </div>
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

                }
            }}>
                <Layout>
                    {this.pageSetup()}
                </Layout>
            </CollectionContext.Provider>
        );
    }
}