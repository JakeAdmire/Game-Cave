import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { wrap } from 'module';

const games = [{
  "title": "The Last of Us",
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
  "img": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dark_Souls_Cover_Art.jpg/220px-Dark_Souls_Cover_Art.jpg"
}]

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
      isLucky: false,
      platforms: [],
      genresToFilter: [],
      platformsToFilter: [],
      multiplayerToggle: null,
      titleFilter: '',
      genresToFilter: []
     });
	})
	it ('should grab genres of game data', () => {
		wrapper.setState({ games: games })
		expect(wrapper.instance().state.genres).toEqual([])
		wrapper.instance().getFilters('genres')
		const gameGenres = ['Action',
			'Adventure',
			'Horror',
			"Beat-'Em-Up",
			'Fighting',
			'Couch-Co-Op',
			'Rogue-like',
			'Strategy',
			'RPG',
			'Fantasy']
		expect(wrapper.instance().state.genres).toEqual(gameGenres)
	})

	it ('should grab platforms of game data', () => {
		wrapper.setState({ games: games })
		expect(wrapper.instance().state.platforms).toEqual([])
		wrapper.instance().getFilters('platforms')
		const gamePlatforms = ["Playstation 3", "Playstation 4", "Switch", "Xbox One", "PC"]
		expect(wrapper.instance().state.platforms).toEqual(gamePlatforms)
	})

	it ('should add genre or platform to filters', () => {
		expect(wrapper.instance().state.genresToFilter).toEqual([])
		expect(wrapper.instance().state.platformsToFilter).toEqual([])
		const event1 = {
			target: { classList: ['genresToFilter'],
				id: 'Action',
				checked: true}}
		const event2 = {
			target: {
				classList: ['platformsToFilter'],
				id: 'Playsation 4',
				checked: true
			}
		}
		wrapper.instance().updateChecks(event1)
		wrapper.instance().updateChecks(event2)
		expect(wrapper.state()).toEqual({
			games: [],
			genres: [],
			genresToFilter: ['Action'],
			mainGenres: [],
			multiplayerToggle: null,
			platforms: [],
			platformsToFilter: ['Playsation 4'],
			titleFilter: '',
			isLucky: false
		})
	})

	it ('should remove genre or platform from filters', () => {
		expect(wrapper.setState({genresToFilter: ['Action']}))
		expect(wrapper.setState({platformsToFilter: ['Playstation 4']}))
		expect(wrapper.state('genresToFilter')).toEqual(['Action'])
		expect(wrapper.state('platformsToFilter')).toEqual(['Playstation 4'])
		const event1 = {
			target: {
				classList: ['genresToFilter'],
				id: 'Action',
				checked: false
			}
		}
		const event2 = {
			target: {
				classList: ['platformsToFilter'],
				id: 'Playsation 4',
				checked: false
			}
		}
		wrapper.instance().updateChecks(event1)
		wrapper.instance().updateChecks(event2)
		expect(wrapper.state()).toEqual({
			games: [],
			genres: [],
			genresToFilter: [],
			mainGenres: [],
			multiplayerToggle: null,
			platforms: [],
			platformsToFilter: [],
			titleFilter: '',
			isLucky: false
		})
	})

	it ('should be able to update state', () => {
		expect(wrapper.state('games')).toEqual([])
		wrapper.instance().updateState({games: games})
		expect(wrapper.state('games')).toEqual(games)
	})
})
