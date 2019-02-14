import React, { Component } from 'react';
import './GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    updateGenres = () => {

    }
    render() {
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className="genre-check">
                    {/* <CheckBox props={props}/> */}
                </form>
            </div>
        )
    }
}