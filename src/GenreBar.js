import React, { Component } from 'react';
import './GenreBar.css'


export default class GenreBar extends Component {
    constructor(props) {
        super(props);
        this.state = {genresToFilter: []}
    }
    updateGenres = () => {
    let checked = []
    const checkboxes = document.querySelectorAll('.genreCheckBox:checked')
    checkboxes.forEach((elem) => {
        array.push(elem.value)
    })
    this.setState({genresToFilter: checked});
    // this.props.dataUP
    }
    render() {
        return (
            <div className="genre-bar search-section">
                <form onChange={this.updateGenres} className="genre-check">
                    <CheckBox props={props}/>
                </form>
            </div>
        )
    }
}