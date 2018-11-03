import React, {Component} from "react";
import AddBook from './AddBook';
import SelectComponent from '../Shared/SelectComponent.js';
import Card from '../Card';

let options = [
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

export default class SpecificCollectionContainer extends Component {
    state = {

    }

    componentDidMount() {
        //TODO: fetch data about this collection and pass in this.props.id
    }

    render() {
        return (
            <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <h1>Collection Title</h1>
                <p>Lorem ipsum dolor amet blue bottle forage direct trade, occupy tattooed chambray master cleanse etsy gastropub cloud bread art party mumblecore. La croix direct trade yr readymade fashion axe, authentic +1 irony. Flexitarian succulents microdosing kickstarter YOLO trust fund deep v, vexillologist cornhole food truck meggings drinking vinegar actually. La croix keffiyeh kitsch skateboard unicorn church-key jianbing everyday carry tbh pork belly. Brooklyn single-origin coffee kinfolk mumblecore portland, jean shorts master cleanse ethical prism godard paleo whatever. Waistcoat mustache bitters paleo flannel semiotics post-ironic blue bottle flexitarian marfa etsy cardigan raw denim YOLO. 8-bit selfies thundercats whatever pop-up blue bottle intelligentsia readymade vaporware marfa everyday carry.</p>
                <img className="card-img-top" src="./images/book-stack.svg" style={{
                        width: "15%",
                        marginLeft:"42.5%",
                        // marginTop: "2em"
                    }} alt="Card image cap"
                />
                <img className="card-img-top" src="./images/book-stack.svg" style={{
                        width: "15%",
                        marginLeft:"42.5%",
                        // marginTop: "2em"
                    }} alt="Card image cap"
                />
                <div className="row">
                    <Card src="./images/stock-img.svg" title="Add new photo" description="Add a new photo to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                    <Card src="./images/book-orange.svg" title="Add new book" description="Add a new book to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                    <Card src="./images/blank-document.svg" title="Add new file" description="Add a new html, txt, pdf, or other file to a new or existing collection" buttonText="+Add" buttonType="primary"/>
                </div>
            </div>
        );
    }
}