## GameCave
GameCave is a React web application that allows a user to search through a database of videogames and/or randomly generate a suggested game to play. 

You can learn more about the assignment spec by following [this link.](http://frontend.turing.io/projects/whateverly.html)

## Contact Info
Credit for the project goes to team members:
- Devin Kapla: [GitHub](https://github.com/DekayHaHa),
              [Email](mailto:DevinKapla@gamil.com)  
- Jacob Admire: [GitHub](https://github.com/JakeAdmire), 
                [Email](mailto:JakeAdmire1@gmail.com)
- Justin Pyktel: [GitHub](https://github.com/SiimonStark), 
                [Email](mailto:SiimonStark@gmail.com)
                
## Screenshots of Project

  ![image description](image link)
  ![image description](image link)
  ![image description](image link)

## Specific things we learned:
DEVIN TYPE SOME INFO ABOUT WHAT THIS SNIPPET IS AND WHY IT'S IMPORTANT
```
  filterByKey = (games, key) => {
    return games.filter(val => {
        return this.state[key].every(elem => val[key].includes(elem))
    })
  } 
```
## Challenges we faced:
#### Member One:
"Devin Challenge" --Devin
#### Member Two:
"The most frustrating challenge that I came across was trying to get a onBlur event to trigger on a form without
knowing about the "tabindex" HTML attribute. Now I know that "tabindex" indicates whether or not an element can be focused,
and thus whether or not it can be affected by onBlur." --Jake
```
    <form onBlur={this.focusLost} tabIndex="0" className={hidePlatforms}>
```
#### Member Three:
"Justin Challenge" --Justin
## Project "Wins"
"Devin Win" --Devin

"I personally feel a great deal more confident working with React and making components that speak to eachother. 'Data-Down, Actions-Up' and the idea of passing methods back and forth was at first a bizarre concept that I couldn't grasp, but now I fully understand it and am capable of working with it" --Jake

"Justin Win" --Justin

## Future Implementation Plans
These are extensions that we plan to implement at some point in the future:
- A local storage system to keep track of each user's selected library of games
- The functionality to swap between a user's individual library, and the entire library of games

## Tools Used to Build Project
[Sublime Text Editor](https://www.sublimetext.com/)
[VSCode]
[React]
[Enzyme]
[Jest]

## Credits
Credit for this project goes to Devin Kapla, Jake Admire, and Justin Pyktel

---
This project was assigned by Brittany Storoz, Pamela Lovett, and Robbie Jaeger 
*@ Turing School of Software and Design, Denver, CO.*
