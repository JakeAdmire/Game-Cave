import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../Popup';
import { shallow } from 'enzyme';

const mockProps = {
  popup: false,
  currentTitle: 'Skyrim',
  currentScore: 99,
  currentGenres: ['Adventure', 'Action'],
  currentPlatforms: ['PC', 'Switch'],
  currentMulti: false,
  currentImage: 'https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg'
}

const mockGenres = [
  {
    "genre": "Action",
    "description": "The action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction-time."
  },
  {
    "genre": "Adventure",
    "description": "An adventure game is a video game in which the player assumes the role of protagonist in an interactive story driven by exploration and puzzle-solving."
  },
  {
    "genre": "Horror",
    "description": "The Horror game genre that focuses on survival of the character as the game tries to frighten players with either horror graphics or scary ambience."
  }
]

const popupStateMock = jest.fn();

describe('Popup', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Popup {...mockProps}
              popupState={popupStateMock}
              mainGenres={mockGenres}/>
    );
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      showGenres: false,
      genreData: []
    });
  })
})