import { Component } from "react";

import "./styles.css"
import CharCard from "../CharCard";

class Characters extends Component {

    render(){
        const { characters } = this.props;

        return(
            <div>
                <h1>Rick and Morty Characters</h1>
                <div className="container">
                    {
                        characters.map((char) => {
                            return <CharCard key={char.id} char={char}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Characters;