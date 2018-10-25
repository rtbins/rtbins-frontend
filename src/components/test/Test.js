import React, { Component } from "react";

function calculate_winner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  if(!squares.includes(null))
    return ['No wins', [-1]];
}
class Square extends React.Component {
  render() {
    let square_class = ['square'];
    if(this.props.isSol){
      square_class.push('test-class');
    }
    if(this.props.noWin){
      square_class.push('no-win');
    }
    return (
      <button 
        className={square_class.join(' ')} 
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i, isSol, noWin) {
    
    return (
      <Square
        key={i}
        isSol={isSol}
        noWin={noWin}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    let tiles = [];
    const [nrow, ncol] = [3, 3];
    for (let i = 0; i < nrow; i++) {
      let row = [];
      for (let j = 0; j < ncol; j++) {
        row.push(this.renderSquare(j + i * 3, this.props.winComb.includes(j + i * 3), this.props.winComb.includes(-1)));
      }
      tiles.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return <div>{tiles}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          move: null
        }
      ],
      xIsNext: true,
      stepNumber: 0
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculate_winner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          move: [Math.floor(i / 3) + 1, (i % 3) + 1]
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculate_winner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner[0];
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      let desc = move
        ? "Go to move #" + move + ", " + step.move
        : "Go to game start, ";
      if (move == this.state.stepNumber) desc = <b>{desc}</b>;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            winComb={winner?winner[1]:[]}
            squares={current.squares} 
            onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
