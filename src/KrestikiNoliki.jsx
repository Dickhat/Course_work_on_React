{/* React Hook, который позволяет добавлять переменную состояния */ }
import { useState } from 'react'
import maiLogo from './assets/MAI.svg'
import matiLogo from './assets/MATI.svg'
import './KrestikiNoliki.css'

{/* Создание квадратов для игры. Value - номер квадрата, onSquareClick - функция для передачи компоненту родителю Board*/ }
function Square({ value, onSquareClick }) {
    console.log(value)
    if (value) {
        return (
            <>
                {/* onSquareClick - функция для передачи компоненту родителю Board*/}
                <button className="square" onClick={onSquareClick}>
                    {value === null ?
                        ({ value })
                        :
                        value === 'X' ?
                            <img src={matiLogo} className="gamelogo" alt="MATI logo" />
                            :
                            <img src={maiLogo} className="gamelogo" alt="MAI logo" />

                    }
                </button>
            </>
        )
    }
    if (value === 3) {
        return
        (
          <button className="square" onClick={onSquareClick}>
          </button>
        )
    }

    return (
        <>
            <button className="square" onClick={onSquareClick}>
            </button>
        </>
    )
}


function Board({ xIsNext, squares, onPlay }) {
    {/* Функция для обновления клеток доски*/}
    function handleClick(i) {
        {/* Победа или все квадраты заполнены*/ }
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        {/* Создании копии доски для ее обновления*/ }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            {/* Передача значений каждому квадрату через props*/}
            <div className="board-row">
                {/* value - значение квадрата, squares[num] - num - номер квадрата*/}
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}
function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
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

export default Game