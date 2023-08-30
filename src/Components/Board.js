import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [XisNext, setXisNext] = useState(true);

    const winner = Calculateinner(squares);
        let status;

        if(winner){
            status = "Winner is : " + winner
        }else{
            status = "Next Player is : " + (XisNext ? "x" : "O")
        }


    const handleClick = (i) =>{

         
        if(Calculateinner(squares) || squares[i]){
            return;
        }

        const nextSquare = squares.slice();

        if(XisNext){
            nextSquare[i] = "X";
        } else{
            nextSquare[i] = "O";
        }


        setSquares(nextSquare);

        setXisNext(!XisNext);

    }


    return (
        <>


            <div className='boardRow'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>

            <div className='boardRow'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

            </div>

            <div className='boardRow'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>

            <h2>{status}</h2>


        </>

        



    )
}

function Calculateinner(squares){
    const lines =[
        [0,1,2,],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i<lines.length; i++){
        // ussed here destructuring
        const [a,b,c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }

    }
    return null;
}

export default Board