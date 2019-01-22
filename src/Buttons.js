import React, { Fragment } from 'react'


const Buttons = ({display, updateDisplay, clear, decimal, updateEvalArr, handleEval}) => {

    return(
            <Fragment>
                    <div id='display' className="col s12">{display}</div>
                    <div id='clear' className="col s9 calc-btn" onClick={() => clear()}>AC</div>
                    <div id='divide' className="col s3 calc-btn calc-op" onClick={() => updateEvalArr("/")}>&divide;</div>
                    <div id='seven' value='7' className="col s3 calc-btn calc-num" onClick={() => updateDisplay('7')}>7</div>
                    <div id='eight' value='8' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("8")}>8</div>
                    <div id='nine' value='9' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("9")}>9</div>
                    <div id='multiply' className="col s3 calc-btn calc-op" onClick={() => updateEvalArr("*")}>&times;</div>
                    <div id='four' value='4' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("4")}>4</div>
                    <div id='five' value='5' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("5")}>5</div>
                    <div id='six' value='6' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("6")}>6</div>
                    <div id='minus' className="col s3 calc-btn calc-op" onClick={() => updateEvalArr("-")}>-</div>
                    <div id='one' value='1' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("1")}>1</div>
                    <div id='two' value='2' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("2")}>2</div>
                    <div id='three' value='3' className="col s3 calc-btn calc-num" onClick={() => updateDisplay("3")}>3</div>
                    <div id='add' className="col s3 calc-btn calc-op" onClick={() => updateEvalArr("+")}>+</div>
                    <div id='zero' value='0' className="col s6 calc-btn calc-num" onClick={() => updateDisplay("0")}>0</div>
                    <div id='decimal' className="col s3 calc-btn calc-num" onClick={() => decimal(".")}>.</div>
                    <div id='equal' className="col s3 calc-btn calc-op" onClick={handleEval}>=</div>
                    
                    
            </Fragment>
    )
}

export default Buttons