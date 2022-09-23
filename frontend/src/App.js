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

  const calculateResult = () => {
    if(input){
      setInput(evaluate(input))
    } else{
      alert('Por favor ingrese valores para realizar los cálculos')
    }

  }

  return (
    <div className='app'>
      <div className='container '>
        <div className="">
          <div className="">
            <h1 className='display-6 fw-bolder text-center text-primary'>
              calculator
            </h1>
            <hr />
          </div>
        </div>
        <Pantalla input={input} />
        <div className=" ">
          <div className="">
            <div className=' ' >
              <div className="">
                {/* <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value='' /> */}
                <div className=''>
                  <div className="">
                    <Button controlClick={addInput}>C/CE</Button>
                    <Button controlClick={addInput}>9</Button>
                    <Button controlClick={addInput}>8</Button>
                    <Button controlClick={addInput}>7</Button>
                  </div>
                  <div className="">
                    <Button controlClick={addInput}>-</Button>
                    <Button controlClick={addInput}>6</Button>
                    <Button controlClick={addInput}>5</Button>
                    <Button controlClick={addInput}>4</Button>
                  </div>
                </div>
                <div className=''>
                  <div className="">
                    <Button controlClick={addInput}>/</Button>
                    <Button controlClick={addInput}>3</Button>
                    <Button controlClick={addInput}>2</Button>
                    <Button controlClick={addInput}>1</Button>
                  </div>
                </div>
                <div className=''>
                  <div className="">
                    <Button controlClick={addInput}>+</Button>
                    <Button controlClick={addInput}>.</Button>
                    <Button controlClick={addInput}>0</Button>
                    <Button controlClick={addInput}>,</Button>
                  </div>
                </div>
                <div className=''>
                  <div className="">
                    <Button controlClick={addInput}>(</Button>
                    <Button controlClick={addInput}>)</Button>
                    <Button controlClick={addInput}>*</Button>
                    <Button controlClick={calculateResult}>=</Button>
                  </div>
                  <div>
                    <ButtonClear controlClickClear={() => setInput('')}> Clear </ButtonClear> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator