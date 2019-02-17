import React, { Component } from 'react';
import CheckBox from './CheckBox.js';
import './GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    updateGenres = () => {
        let checked = [];
        const checkboxes = document.querySelectorAll('.genre-check-box')
        checkboxes.forEach((elem) => {
            if (elem.checked === true) {
                checked.push(elem.id)
            }
        })
        this.props.updateState({genresToFilter: checked})
    }
    render() {
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className="genre-check">
                {
                    this.props.genres.map((val, i) => {
                        return <CheckBox {...this.props}
                                         name={val}
                                         class="genre-check-box"
                                         key={i}/>
                    })
                }
                </form>
                <button className="button">GENRES</button>
            </div>
        )
    }
}