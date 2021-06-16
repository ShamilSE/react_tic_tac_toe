import React from "react";
import {Square} from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            sign: "X",
            winner: null,
        }
    }

    handleClick(squareNo) {
        let newSquares = this.state.squares.slice()
        newSquares[squareNo] = this.state.sign

        if (this.state.sign === "X")
            this.setState({sign: "O"})
        else
            this.setState({sign: "X"})

        this.setState({squares: newSquares})

        let winner = this.calculateWinner(this.state.squares)
        if (winner)
            this.setState({winner})
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    getStatus() {
        let status = 'Next player: ' + this.state.sign;
        let index = 0
        let counter = 0

        while (index < 9) {
            if (this.state.squares[index] != null)
                counter++
            index++
        }
        if (counter === 9 || this.state.winner)
            status = "Game over"
        return status
    }

    newGame() {
        let newSquares = this.state.squares.slice()

        newSquares.fill(null)
        this.setState({squares: newSquares, sign: "X", winner: null})
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const status = this.getStatus()

        return (
            <div>
                <div className="status">{status}</div>
                <div>{this.state.winner ? "winner is " + this.state.winner : null}</div>
                <button onClick={() => this.newGame()}>new game</button>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export {Board}