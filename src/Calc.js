import React from 'react'
import Buttons from './Buttons'

class Calc extends React.Component {
    state = {
        display: '0',
        pending: '',
        evalArr: []
    }

    updateEvalArr = (val) => {
        const display = this.state.display
        let array = [...this.state.evalArr]
        array.push(display)
        array.push(val)
        this.setState({
            evalArr: [...array]
        })
    }

    handleEval = () => {
        const display = this.state.display
        let array = [...this.state.evalArr]
        array.push(display)
        this.setState({
            evalArr: [...array]
        },
        () => {
            this.calc()
        })
    }

    calc = () => {
        let str = this.state.evalArr.join(' ').slice()
        let newDisplay = eval(str)
        this.setState({
            display: newDisplay,
            evalArr: []
        })
    }


    clearDisplay = () => {
        this.setState({
            display: '0',
            evalArr: []
        })
    }

    updateDisplay = (val) => {
        const display = this.state.display

        if(this.state.display === '0' || this.state.evalArr.length > 1){
            this.setState({
                display: val
            })
        }
        else {this.setState({
            display: display + val
        })}
        
    }

    handleDecimal = (val) => {
        const display = this.state.display
        if(!this.state.display.includes(val)){
            this.setState({
                display: display + val
            })
        }
    }

    render() {
        const display = this.state.display
        return(
            <div className="container">
                <div className="row">
                    <Buttons display={display} updateDisplay={this.updateDisplay} clear={this.clearDisplay}
                    decimal={this.handleDecimal}
                    updateEvalArr={this.updateEvalArr}
                    handleEval={this.handleEval}
                    />
                </div>
            </div>
        )
    }
}

export default Calc