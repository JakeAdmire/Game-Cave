## GameCave
GameCave is a React web application that allows a user to search through a database of videogames and/or randomly generate a suggested game to play. 

You can learn more about the assignment spec by following [this link.](http://frontend.turing.io/projects/whateverly.html)

## Contact Info
Credit for the project goes to team members:
- Devin Kapla: [GitHub](https://github.com/DekayHaHa),
              [Email](mailto:DevinKapla@gamil.com),
              [LinkedIn](https://www.linkedin.com/in/devin-kapla/)
- Jacob Admire: [GitHub](https://github.com/JakeAdmire), 
                [Email](mailto:JakeAdmire1@gmail.com),
                [LinkedIn](https://www.linkedin.com/in/jakeadmire/)
- Justin Pyktel: [GitHub](https://github.com/SiimonStark), 
                [Email](mailto:SiimonStark@gmail.com),
                [LinkedIn](https://www.linkedin.com/in/justinpyktel/),
                [Twitter](https://twitter.com/SiimonStark)
                
## Screenshots of Project

 ![demo](https://user-images.githubusercontent.com/23123990/53147491-f41c2e00-3564-11e9-855a-c4bb272f36a0.gif)

## Brief Presentation

 ![presentation](https://user-images.githubusercontent.com/23123990/53151649-f97f7580-3570-11e9-90f8-62d905cce6cd.gif)

## Specific things we learned:
Using keys from our data in component state allowed us to keep functionality dynamic with bracket notation.
```
  filterByKey = (games, key) => {
    return games.filter(val => {
        return this.state[key].every(elem => val[key].includes(elem))
    })
  } 
```
## Challenges we faced:
#### Member One:
"Learning to use React and Jest/Enzyme while still building the app we wanted was a difficult learning curve. Testing became easier after getting a grasp on React and understanding when and how to use mock data." --Devin
```
		const event1 = {
			target: { classList: ['genresToFilter'],
				id: 'Action',
				checked: true}}
```
#### Member Two:
"The most frustrating challenge that I came across was trying to get a onBlur event to trigger on a form without
knowing about the "tabindex" HTML attribute. Now I know that "tabindex" indicates whether or not an element can be focused,
and thus whether or not it can be affected by onBlur." --Jake
```
    <form onBlur={this.focusLost} tabIndex="0" className={hidePlatforms}>
```
#### Member Three:
"Learning and understanding how to condintionally render, using OOP, with React. Was at the same time, challenging and rewarding! Being able to manipulate the page in such away makes me all the more confident in my ability to build larger scale projects." --Justin
```
render () {
    let games = this.props.games;

    games = this.state.titleFilter ? this.filterGamesTitle(games) : games;
    games = this.state.genres.length ? this.filterByKey(games, 'genres') : games;
    games = this.state.platforms.length ? this.filterByKey(games, 'platforms') : games;
    games = this.state.isLucky && games.length ? this.shuffle(games) : games;
    games = this.state.isMulti !== null ? this.filterByMulti(games) : games;

    const popupOverlay = 
      (this.state.popup && <Popup {...this.state}
        mainGenres={this.props.mainGenres}
        setPopup={this.statePopup}/> )
```
## Project "Wins"
#### Member One:
"Learning about and using component lifecycle methods was both a challenge and very rewarding." --Devin
```
  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
    this.setState({
      titleFilter: this.props.titleFilter,
      genres: this.props.genresToFilter,
      platforms: this.props.platformsToFilter,
      isLucky: this.props.isLucky,
      isMulti: this.props.multiplayerToggle
    })
  }
```
#### Member Two:
"I personally feel a great deal more confident working with React and making components that speak to eachother. 'Data-Down, Actions-Up' and the idea of passing methods back and forth was at first a bizarre concept that I couldn't grasp, but now I fully understand it and am capable of working with it" --Jake
#### Member Three:
"Seriously got my reps in with Conditional (ternary) Operators with the use of Conditional Renders in React. My figgest feat was learning how to generate a popup with not only information from our primary dataset, but to then use that same popup for displaying our secondary dataset." --Justin

## Future Implementation Plans
These are extensions that we plan to implement at some point in the future:
- A local storage system to keep track of each user's selected library of games
- The functionality to swap between a user's individual library, and the entire library of games

## Tools Used to Build Project
[Sublime Text Editor](https://www.sublimetext.com/)

[VSCode](https://code.visualstudio.com/)

[React](https://reactjs.org/)

[Enzyme](https://airbnb.io/enzyme/) & [Jest](https://airbnb.io/enzyme/docs/guides/jest.html)

## Member Documentation
["Define the Relationship" / Workflow](https://github.com/JakeAdmire/game-shelf/blob/master/Resources/Notes/Dtr-Workflow.md)

[Mission Statement](https://github.com/JakeAdmire/game-shelf/blob/master/Resources/Notes/Mission.md)

[User Stories](https://github.com/JakeAdmire/game-shelf/blob/master/Resources/Notes/User-Stories.md)

[User Feedback](https://github.com/JakeAdmire/game-shelf/blob/master/Resources/Notes/User_Feedback.md)

[Presentation](https://my.visme.co/projects/mxngjwzw-gamecave)

## Credits
Credit for this project goes to [Devin Kapla](https://github.com/DekayHaHa), [Jake Admire](https://github.com/JakeAdmire), and [Justin Pyktel](https://github.com/SiimonStark)

---
This project was assigned by Brittany Storoz, Pamela Lovett, and Robbie Jaeger 

*@ Turing School of Software and Design, Denver, CO.*
