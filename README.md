# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

!["initial screen after running the server"](/screen1.png)
!["the game server automatically places your snake on the board as soon as you establish the connection"](/screen2.png)
!["name shows up on the board as soon as we connect to the server"](/screen3.png)
!["playing snake game by controlling the WASD movement of the snake by keys"](/screen4.png)
!["sending messages to the server by pressing the specific keys"](/screen5.png)

## Getting Started

- Follow steps inside the snek server repo to run the server side
  - Clone the server repo from [here](https://github.com/lighthouse-labs/snek-multiplayer)
  - git clone https://github.com/lighthouse-labs/snek-multiplayer.git
  - cd snek-multiplayer
  - npm install
  - npm run play
- Run the development snake client using the `node play.js` command.
- Control the WASD movement of the snake by pressing the specific keys on the snake client terminal -
  - w -> up
  - a -> left
  - s -> down
  - d -> right
- Send messages to the server by pressing the specific keys on the snake client terminal -
  - q -> "Hello!"
  - e -> "I'm having fun!"
  - r -> "Good Bye!"