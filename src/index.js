import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Board} from './Board'
import {Login} from './Login'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: []
        }
    }

    historyUpdate(newEl) {
        let history = this.state.history
        history.push(newEl)
        this.setState({history})
    }

    clearHistory() {
        let history = []
        this.setState({history})
    }

    getHistoryEl(i) {return this.state.history[i]}

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/*<Board*/}
                    {/*    historyUpdate={(i) => this.historyUpdate(i)}*/}
                    {/*    clearHistory={() => this.clearHistory()}*/}
                    {/*    getHistoryEl={(i) => this.getHistoryEl(i)}*/}
                    {/*/>*/}
                    <Login/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
