import React, {Component} from 'react';
import { Link } from "react-router-dom";

const Exhibit = (props) => {
    return (
        <div className="card col-md-6 col-xs-12" style={{width: "5em"}}>
            <img className="card-img-top" src={props.src} style={{
                    width: "15%",
                    marginLeft:"42.5%",
                    marginTop: "2em"
                }} alt="Card image cap" />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className={`btn btn-${props.buttonType}`}>{props.buttonText}</a>
            </div>
        </div>
    );
}

export default Exhibit;