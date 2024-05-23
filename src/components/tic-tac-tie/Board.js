import React from "react";
import Square from "./Square";
import './tictactoe.css';

function Board({saures}){
    const handleClick=(i)=>{

    }
    return(
    <>
    <div className="board-row">
        <Square value="1" onSquareClick={()=>handleClick(0)}/>
        <Square value="2" onSquareClick={()=>handleClick(1)}/>
        <Square value="3" onSquareClick={()=>handleClick(2)}/>
    </div>
    </>);

}
export default Board;