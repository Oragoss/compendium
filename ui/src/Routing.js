import React, {Component} from "react";
import Layout from './Shared/Layout';
import { Route, Switch } from "react-router-dom"; //Use this later {Redirect}
import Dashboard from './Dashboard';
import Statistics from './Statistics/Statistics';
// import AddPhoto from './Create/AddPhoto';
// import AddBook from './Collection/AddBook';
// import AddFile from './Create/AddFile';
// import CreateExhibit from './Create/CreateExhibit';
// import CreateCollection from './Create/CreateCollection';
import ExhibitContainer from './ExhibitContainer';
import CollectionContainer from './Collection/CollectionContainer';

//Routing and authentication happens here
export default class Routing extends Component {
    state = {
        isLoggedIn:  false
    }

    componentDidMount() {
        //TODO: Initialize authentication https://reacttraining.com/react-router/web/example/auth-workflow
        //Use JWS?
    }

    renderAdminRoutes = () => {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} isLoggedIn={this.isLoggedIn} />
                <Route path="/statistics" component={Statistics} isLoggedIn={this.isLoggedIn} />
                {/* <Route path="/addphoto" component={AddPhoto} isLoggedIn={this.isLoggedIn} />
                <Route path="/addfile" component={AddFile} isLoggedIn={this.isLoggedIn} />
                <Route path="/createexhibit" component={CreateExhibit} isLoggedIn={this.isLoggedIn} />
                <Route path="/createcollection" component={CreateCollection} isLoggedIn={this.isLoggedIn} /> */}
                {/* <Route path="/addbook" component={AddBook} isLoggedIn={this.isLoggedIn} /> */}
                <Route path="/exhibits" component={ExhibitContainer} isLoggedIn={this.isLoggedIn} />
                <Route path="/collections" component={CollectionContainer} isLoggedIn={this.isLoggedIn} />
            </Switch>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Layout>
                    {/* {this.isLoggedIn ? this.renderAdminRoutes() : <Redirect to="/login"/>} */}
                    {this.renderAdminRoutes()}
                </Layout>
            </React.Fragment>
        );
    }
}