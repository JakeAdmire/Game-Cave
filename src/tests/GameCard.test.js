import React from 'react';
import ReactDOM from 'react-dom';
import GameCard from '../GameCard';
import { shallow } from 'enzyme';

const game = {
  "title": "Dark Souls",
  "platforms": ["PC", "Playstation 4", "Xbox One"],
  "genres": ["Action", "Adventure", "RPG", "Fantasy"],
  "multiplayer": true,
  "metaScore": 64,
  "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg"}

const setPopupMock = jest.fn();

describe('GameCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <GameCard {...game}
      setPopup={setPopupMock}/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it ('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      gameTitle: game.title,
      gameScore: game.metaScore,
      gameGenres: game.genres,
      gamePlatforms: game.platforms,
      gameMulti: game.multiplayer,
      gameImage: game.img,
      inLibrary: false
    });
  });

  it('should invoke setPopup() on click', () => {
    wrapper.find('.game-more').simulate('click');
    expect(setPopupMock).toBeCalled();
  });

  it('should update inLibrary status when button is clicked', () => {
    expect(wrapper.state('inLibrary')).toEqual(false);
    wrapper.find('.add-to-library').simulate('click');
    expect(wrapper.state('inLibrary')).toEqual(true);
  })
})