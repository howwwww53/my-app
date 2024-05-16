import React from "react";
import './calculator.css';

function MyButton(props){
    const handleclick = (e) =>{buttClicked(e.target.value)}
    return(
        <div className="button">
            <div>
                <button className='btn btn-action' onClick={handleclick} value="c">C</button>
                <button className='btn btn-action' onClick={handleclick} value="+/-">+/-</button>
                <button className='btn btn-action' onClick={handleclick} value="%">%</button>
                <button className='btn btn-action' onClick={handleclick} value="/">/</button>
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="7">7</button>
                <button className='btn' onClick={handleclick} value="8">8</button>
                <button className='btn' onClick={handleclick} value="9">9</button>
                <button className='btn btn-action' onClick={handleclick} value="*">*</button>
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="4">4</button>
                <button className='btn' onClick={handleclick} value="5">5</button>
                <button className='btn' onClick={handleclick} value="6">6</button>
                <button className='btn btn-action' onClick={handleclick} value="-">-</button>
                
            </div>
            <div>
                <button className='btn' onClick={handleclick} value="1">1</button>
                <button className='btn' onClick={handleclick} value="2">2</button>
                <button className='btn' onClick={handleclick} value="3">3</button>
                <button className='btn btn-action' onClick={handleclick} value="+">+</button>
            </div>
        </div>
    )
}
export default MyButton;