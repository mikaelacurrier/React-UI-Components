import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';
import BigButton from '../ButtonComponents/BigButton';

const numbers = [
    {
        position: 7
    }, {
        position: 8
    }, {
        position: 9
    }, {
        position: 4
    }, {
        position: 5
    }, {
        position: 6
    }, {
        position: 1
    }, {
        position: 2
    }, {
        position: 3
    },
];

const actions = [
    {
        position: "÷"
    }, {
        position: "x"
    }, {
        position: "-"
    }, {
        position: "+"
    }, {
        position: "="
    },
]

const CalculatorDisplay = props => {
    return (

        <div className="calcContainer">
            <div className="topDisplay"><div className="topNum">0</div></div>
            <div className="buttons">
                <div className="numButtons">
                    <BigButton text='clear' />
                    <div className="number">
                        {numbers.map(number => {
                            return (
                                <NumberButton number={number} />
                            )
                        })}
                    </div>

                    <BigButton text='0' />
                </div>
                <div className='action'>
                    {actions.map(action => {
                        return (
                            <ActionButton action={action} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CalculatorDisplay;