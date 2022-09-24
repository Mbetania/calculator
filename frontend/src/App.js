import React from 'react'
import { useEffect, useState } from 'react'
import './App.scss'
import { Button } from './components/Button'
import ButtonClear from './components/ButtonClear'
import { Pantalla } from './components/Pantalla'
import { evaluate } from 'mathjs';



const Calculator = () => {
  const [input, setInput] = useState('')

  const addInput = (value) => {
    setInput(input + value)
  }

  function calculateResult() {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  return (
    <div className='app'>
        <h1 className=' text-center text-primary'>
          calculator
        </h1>
      <div className='calculator-container'>
          <Pantalla input={input} />
          {/* <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value='' /> */}
          <div className="my-row">
            <Button controlClick={addInput} id='7'>7</Button>
            <Button controlClick={addInput} id='8'>8</Button>
            <Button controlClick={addInput} id='9'>9</Button>
            <Button controlClick={addInput} id='multiply'>*</Button>
          </div>
          <div className='my-row'>
            <Button controlClick={addInput} id='4'>4</Button>
            <Button controlClick={addInput} id='5'>5</Button>
            <Button controlClick={addInput} id='6'>6</Button>
            <Button controlClick={addInput} id='subtract'>-</Button>
          </div>
          <div className='my-row'>
            <Button controlClick={addInput} id='1'>1</Button>
            <Button controlClick={addInput} id='2'>2</Button>
            <Button controlClick={addInput} id='3'>3</Button>
            <Button controlClick={addInput} id='add'>+</Button>
          </div>
          <div className='my-row'>
            <Button controlClick={addInput} id='0'>0</Button>
            <Button controlClick={addInput} id='.'>.</Button>
            <Button controlClick={calculateResult} id='equals'>=</Button>
            <Button controlClick={addInput} id='divide'>/</Button>
          </div>
          <div className='my-row'>
            <ButtonClear controlClickClear={() => setInput('0')}> 
              Clear 
            </ButtonClear>
          </div>
      </div>
    </div>                                                                                                                                     
  )
}

export default Calculator