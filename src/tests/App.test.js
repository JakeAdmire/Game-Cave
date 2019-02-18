import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it ('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      games: [],
      mainGenres: [],
      genres: [],
      platforms: [],
      genresToFilter: [],
      platformsToFilter: [],
      filteredGames: [],
      multiplayer: [null, true, false],
      titleFilter: '',
      genresToFilter: []
     });
  })
})
