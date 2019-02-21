import React from 'react';
import ReactDOM from 'react-dom';
import GameShelf from '../GameShelf';
import GameCard from '../GameCard';
import { shallow } from 'enzyme';

const games =[{"title": "The Last of Us",
"platforms": ["Playstation 3", "Playstation 4"],
"genres": ["Action", "Adventure", "Horror"],
"multiplayer": false,
"metaScore": 95,
"img": "https://i.ebayimg.com/images/g/ZX4AAOSw1vlUrlTm/s-l300.jpg"
},
{
  "title": "Super Smash Bros. Ultimate",
  "platforms": ["Switch"],
  "genres": ["Beat-'Em-Up", "Fighting", "Couch-Co-Op"],
  "multiplayer": false,
  "metaScore": 93,
  "img": "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg"
},
{
  "title": "The Binding of Isaac: Rebirth",
  "platforms": ["Playstation 4", "Xbox One"],
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
  
  const gameMock = {
    "title": "Dark Souls",
    "platforms": ["PC", "Playstation 4", "Xbox One"],
    "genres": ["Action", "Adventure", "RPG", "Fantasy"],
    "multiplayer": true,
    "metaScore": 64,
    "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg"
  };
  
  describe('GameShelf', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <GameShelf games={games}/>
        );
      });
      it('should match snapshot', () => {
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
      });
      
      it('should update states after invoking statePopup', () => {
        wrapper.instance().statePopup(
          true,
          games[0].title,
          games[0].metaScore,
          games[0].genres,
          games[0].platforms,
          games[0].multiplayer,
          games[0].img)
          expect(wrapper.state()).toEqual({
            popup: true,
            currentTitle: games[0].title,
            currentScore: games[0].metaScore,
            currentGenres: games[0].genres,
            currentPlatforms: games[0].platforms,
            isLucky: false,
            isMulti: null,
            currentMulti: games[0].multiplayer,
            currentImage: games[0].img,
            titleFilter: '',
            genres: [],
            platforms: []
          });
        });
        
        it('should be able to filter games by title', () => {
          wrapper.setState({ titleFilter: 'dark'});
          const results = wrapper.instance().filterGamesTitle(games);
          expect(results).toEqual([gameMock]);
        });
        
        it('should be able to filter games by key', () => {
          wrapper.setState({platforms: ["PC"]});
          const results = wrapper.instance().filterByKey(games, "platforms");
          expect(results).toEqual([gameMock]);
        });
        
        it('should be able to filter games by multiplayer value', () => {
          wrapper.setState({isMulti: true});
          const results = wrapper.instance().filterByMulti(games);
          expect(results).toEqual([gameMock]);
        });
        
        it('when shuffle is invoked games array should be at a length of 1', () => {
          expect(games.length).toEqual(4)
          wrapper.setState({ isLucky: true });
          const results = wrapper.instance().shuffle(games);
          expect(results.length).toEqual(1); 
        });
      });