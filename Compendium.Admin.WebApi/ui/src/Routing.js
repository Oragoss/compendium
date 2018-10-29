import React, {Component} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';
import Statistics from './Statistics/Statistics';
import AddPhoto from './Create/AddPhoto';
import AddBook from './Create/AddBook';
import AddFile from './Create/AddFile';
import CreateExhibit from './Create/CreateExhibit';
import CreateCollection from './Create/CreateCollection';
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
                <Route path="/addbook" component={AddBook} isLoggedIn={this.isLoggedIn} />
                <Route path="/addfile" component={AddFile} isLoggedIn={this.isLoggedIn} />
                <Route path="/createexhibit" component={CreateExhibit} isLoggedIn={this.isLoggedIn} />
                <Route path="/createcollection" component={CreateCollection} isLoggedIn={this.isLoggedIn} /> */}
                <Route path="/exhibits" component={ExhibitContainer} isLoggedIn={this.isLoggedIn} />
                <Route path="/collections" component={CollectionContainer} isLoggedIn={this.isLoggedIn} />
            </Switch>
        );
    }

    render() {
        return (
            <React.Fragment>
                {/* {this.isLoggedIn ? this.renderAdminRoutes() : <Redirect to="/login"/>} */}
                {this.renderAdminRoutes()}
            </React.Fragment>
        );
    }
}



//TODO: Do I need match?
{/* <Route
path="/statistics"
//The only reason render is here is because it's rendering a callback function that calls Statistics....
render={props => <Statistics {...props} isLoggedIn={this.isLoggedIn} />}
/> */}
// const Topics = ({ match }) => (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>
  
//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );