import React from 'react';
import Table from  './Table';
import Layout from './Shared/Layout';
import Card from './Card';

export default class Dashboard extends React.Component {
    state = {

    }

    render() {
        return (
            //TODO: This
            <Layout>
                 <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
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
                        <Card src="./images/stock-img-album.svg" title="Create new photo collection" text="Create a new photo collection to store images" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/book-stack.svg" title="Create new book collection" text="Create a new digital book collection to your digital books" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/file-drop.svg" title="Create new archive" text="Create a new archive to group you collections" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/stock-img.svg" title="Add new photo" text="Add a new photo to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/book-orange.svg" title="Add new book" text="Add a new book to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                        <Card src="./images/blank-document.svg" title="Add new file" text="Add a new html, txt, pdf, or other file to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                    </div>
                    <Table />
                </main>
            </Layout>
        );
    }
}