/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classnames from 'classnames'

class TicTacToe extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPlayer: 'X',
            board: ['', '', '', '', '', '', '', '', '']
        }
    }

    play(index) {
        if (this.state.currentPlayer === 'X') {
            this.state.board.splice(index, 1, 'X')
            this.setState({
                board: this.state.board,
                currentPlayer: 'O'
            })
        } else {
            this.state.board.splice(index, 1, 'O')
            this.setState({
                board: this.state.board,
                currentPlayer: 'X'
            })
        }
    }

    playAgain() {
        this.setState({
            currentPlayer: 'X',
            board: ['', '', '', '', '', '', '', '', '']
        })
    }

    render() {
        let message = 'Player ' + this.state.currentPlayer + " - your turn";
        let gameOver = false;
        let b = this.state.board;
        if (b[0] === 'X' && b[1] === 'X' && b[2] === 'X' || b[3] === 'X' && b[4] === 'X' && b[5] === 'X' || b[6] === 'X' && b[7] === 'X' && b[8] === 'X' || b[0] === 'X' && b[3] === 'X' && b[6] === 'X' || b[1] === 'X' && b[4] === 'X' && b[7] === 'X' || b[2] === 'X' && b[5] === 'X' && b[8] === 'X' || b[0] === 'X' && b[4] === 'X' && b[8] === 'X' || b[2] === 'X' && b[4] === 'X' && b[6] === 'X') {
            message = 'X wins';
            gameOver = true;

        }
        if (b[0] === 'O' && b[1] === 'O' && b[2] === 'O' || b[3] === 'O' && b[4] === 'O' && b[5] === 'O' || b[6] === 'O' && b[7] === 'O' && b[8] === 'O' || b[0] === 'O' && b[3] === 'O' && b[6] === 'O' || b[1] === 'O' && b[4] === 'O' && b[7] === 'O' || b[2] === 'O' && b[5] === 'O' && b[8] === 'O' || b[0] === 'O' && b[4] === 'O' && b[8] === 'O' || b[2] === 'O' && b[4] === 'O' && b[6] === 'O') {
            message = 'O wins';
            gameOver = true;
        }

        return (
            <div className="main">
                <div className={classnames('board', {'disabled' : gameOver===true})}>
                    {this.state.board.map((square, index) =>
                        <div key={index}
                            className={classnames('square', {'disabled' : square!= ''})}
                            onClick={()=> this.play(index)}>
                            {this.state.board[index]}
                        </div>
                    )}
                    <div>{message}</div>
                </div>
                {gameOver ? <button onClick={() => this.playAgain()}>Play Again?</button> : <br/>}
            </div>
        )
    }
}


ReactDOM.render(<TicTacToe/>, document.getElementById('root'));
