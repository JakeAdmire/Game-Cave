import React from 'react';
import ReactDOM from 'react-dom';
import GameShelf from '../GameShelf';
import { shallow } from 'enzyme';

const games =[{"title": "The Last of Us",
            "platforms": ["Playstation 3", "Playstation 4"],
            "genres": ["Action", "Adventure", "Horror"],
            "multiplayer": true,
            "metaScore": 95,
            "img": "https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg"
        },
        {
            "title": "Super Smash Bros. Ultimate",
            "platforms": ["Switch"],
            "genres": ["Beat-'Em-Up", "Fighting", "Couch-Co-Op"],
            "multiplayer": true,
            "metaScore": 93,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
        },
        {
            "title": "The Binding of Isaac: Rebirth",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genres": ["Rogue-like", "Horror", "Strategy"],
            "multiplayer": false,
            "metaScore": 83,
            "img": "https://static.giantbomb.com/uploads/scale_small/8/87790/2768049-box_tobir.jpg"
        },
        {
            "title": "Dark Souls",
            "platforms": ["PC", "Playstation 4", "Xbox One"],
            "genres": ["Action", "Adventure", "RPG", "Fantasy"],
            "multiplayer": true,
            "metaScore": 64,
            "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg"}]

describe('GameShelf', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <GameShelf games={games}/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it ('should have default state', () => {
    expect(wrapper.state()).toEqual({ 
      popup: false,
      currentTitle: '',
      currentScore: 0,
      currentGenres: [],
      currentPlatforms: [],
      isLucky: false,
      isMulti: null,
      currentMulti: false,
      currentImage: '',
      titleFilter: '',
      genres: [],
      platforms: []
     });
  })
})