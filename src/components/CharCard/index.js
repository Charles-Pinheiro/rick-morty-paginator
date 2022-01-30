import { Component } from "react";

import "./styles.css"

class CharCard extends Component {
    render() {
        const { name, image, gender, species } = this.props.char;
        return(
            <div className="card">
                <img src={image} alt={name} className="picture"></img>
                <div>
                    <p>Name: <span>{name}</span></p>
                    <p>Gender: <span>{gender}</span></p>
                    <p>Species: <span>{species}</span></p>
                </div>
            </div>
        )
    }
}

export default CharCard;