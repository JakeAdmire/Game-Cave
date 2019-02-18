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
    toggleGenres = () => {
        if (this.state.showGenres) {
            this.setState({showGenres: false})
        } else {
            this.setState({ showGenres: true });   
        }
    }
    render() {
        let hideGenres = "";
        if (this.state.showGenres) {
            hideGenres = "genre-check";
        } else {
            hideGenres = "genre-check hide"
        }
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className={hideGenres}>
                {
                    this.props.genres.map((val, i) => {
                        return <CheckBox name={val}
                                         class="genre-check-box"
                                         key={i}/>
                    })
                }
                </form>
                <button onClick={this.toggleGenres} className="button">GENRES</button>
            </div>
        )
    }
}