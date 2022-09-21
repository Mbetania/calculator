import React from 'react'
import { useEffect, useState } from 'react'
import './App.scss'
import { Boton } from './components/Boton'



const Calculator = () => {

  return (
    <div className='app'>
      <div className='container my-2'>
        <div className="row">
          <div className="col-12">
            <h1 className='display-6 fw-bolder text-center text-primary'>
              calculator
            </h1>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4">
            <div className='card mb-3 pt-3 shadow ' >
              <div className="card-body text-primary">
                <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value='' />
                <div className='row'>
                  <div className="col-3">
                    <Boton>C/CE</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>9</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>8</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>7</Boton>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className="col-3">
                    <Boton>-</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>6</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>5</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>4</Boton>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className="col-3">
                    <Boton>/</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>3</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>2</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>1</Boton>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className="col-3">
                    <Boton>+</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>.</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>0</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>,</Boton>
                  </div>
                </div>
                <div className='row mt-2'>
                  <div className="col-3">
                    <Boton>(</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>)</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>*</Boton>
                  </div>
                  <div className="col-3">
                    <Boton>=</Boton>
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