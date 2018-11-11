import React from 'react';
import Table from  './Table';
import Card from './Card';

export default class Dashboard extends React.Component {
    state = {

    }

    render() {
        return (
            //TODO: This
            <div>
                 <main role="main" className="col-lg-10 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary">Share</button>
                            <button className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                        </div>
                    </div>
                    <div className="row">
                        <Card src="./images/file-drop.svg" title="Create new exhibit" description="Create a new exhibit to group your collections" buttonText="Create" buttonType="primary" link="/createexhibit"/>
                        <Card src="./images/stock-img-album.svg" title="View current exhibits" description="View and eidt all of your current exhibits" buttonText="View" buttonType="info" link="/viewexhibits"/>
                        <Card src="./images/stock-img-album.svg" title="Create new photo collection" description="Create a new photo collection to store images" buttonText="Create" buttonType="info"/>
                        <Card src="./images/book-stack.svg" title="Create new book collection" description="Create a new digital book collection to your digital books" buttonText="Create" buttonType="info"/>
                        {/* <Card src="./images/stock-img.svg" title="Add new photo" description="Add a new photo to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/book-orange.svg" title="Add new book" description="Add a new book to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/blank-document.svg" title="Add new file" description="Add a new html, txt, pdf, or other file to a new or existing collection" buttonText="+Add" buttonType="primary"/> */}
                    </div>
                    <Table />
                </main>
            </div>
        );
    }
}