import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculadora.css';

function Calculadora() {
    const [input, setInput] = useState('');
    const [expresion, setExpresion] = useState('');
    const [calculado, setCalculado] = useState(false);

    const handleClick = (valor) => {
            setExpresion(input + valor);
            setInput(input + valor);
            setCalculado(false);
    };

    const handleCalcular = () => {
        try {
            const res = evaluate(input);
            setExpresion(expresion + '=');
            setInput(res);
            setCalculado(true);
        } catch {
            setExpresion('Error');
            setInput('Error');
        }
    };

    const handleBorrarTodo = () => {
        setExpresion('');
        setInput('');
        setCalculado(false);
    };

    const handleBorrarUltimo = () => {
        if (calculado) {
            setExpresion('');
            setInput('');
            setCalculado(false);
        } else {
            setExpresion(input.slice(0, -1));
            setInput(input.slice(0, -1));
        }
    };

    return (
        <div className='container'>
            <div className='entradas'>
                <input className='entrada entrada-expresion' type="text" value={expresion} disabled />
                <input className='entrada entrada-input' type="text" value={input} disabled/>
            </div>

            <div className='botones'>
                <button className='boton boton-operador' onClick={() => handleClick('%')}>&#37;</button> {/* Porcentaje */}
                <button className='boton boton-operador' onClick={handleBorrarTodo}>AC</button>
                <button className='boton boton-operador boton-borrar' onClick={handleBorrarUltimo}>&#9003;</button> {/* Borrar */}

                <button className='boton boton-operador' onClick={() => handleClick('^2')}>x&#178;</button> {/* Potencia cuadrada */}
                <button className='boton boton-operador' onClick={() => handleClick('(')}>&#40;</button> {/* Paréntesis apertura */}
                <button className='boton boton-operador' onClick={() => handleClick(')')}>&#41;</button> {/* Paréntesis clausura */}
                <button className='boton boton-operador' onClick={() => handleClick('/')}>&#247;</button> {/* División */}

                <button className='boton boton-numero' onClick={() => handleClick('7')}>7</button>
                <button className='boton boton-numero' onClick={() => handleClick('8')}>8</button>
                <button className='boton boton-numero' onClick={() => handleClick('9')}>9</button>
                <button className='boton boton-operador' onClick={() => handleClick('*')}>&#215;</button> {/* Multiplicación */}

                <button className='boton boton-numero' onClick={() => handleClick('4')}>4</button>
                <button className='boton boton-numero' onClick={() => handleClick('5')}>5</button>
                <button className='boton boton-numero' onClick={() => handleClick('6')}>6</button>
                <button className='boton boton-operador' onClick={() => handleClick('-')}>&#8722;</button> {/* Resta */}

                <button className='boton boton-numero' onClick={() => handleClick('1')}>1</button>
                <button className='boton boton-numero' onClick={() => handleClick('2')}>2</button>
                <button className='boton boton-numero' onClick={() => handleClick('3')}>3</button>
                <button className='boton boton-operador' onClick={() => handleClick('+')}>&#43;</button> {/* Suma */}

                <button className='boton boton-operador' onClick={() => handleClick('.')}>&#8729;</button> {/* Punto */}
                <button className='boton boton-numero' onClick={() => handleClick('0')}>0</button>
                <button className='boton boton-igual' onClick={handleCalcular}>&#61;</button> {/* Igual */}
            </div>
        </div>
    )
}

export default Calculadora;