import React from 'react';
import Game from './Game'

class App extends React.Component {
    state = {
      gameId: 1,
    }

    resetGame = () => {
      this.setState((prevState) => {
        return { gameId: prevState.gameId + 1};
      });
    };

    render() {
      return (
        <Game key={this.state.gameId}
          playAgain = {this.resetGame}
        />
      );
    }
  }
  

  export default App;