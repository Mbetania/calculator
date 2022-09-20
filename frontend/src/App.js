import React from 'react'
import { useEffect, useState } from 'react'
import './App.scss'



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
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className='card mb-3 pt-3 shadow ' >
              <div className="card-body text-primary">
                <input type="text" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value='.' />
                <div className='row'>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                </div>

                <div className='row mt-2'>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                </div>

                <div className='row mt-2'>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                </div>

                <div className='row mt-2'>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                </div>

                <div className='row mt-2'>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

                  </div>
                  <div className="col-3">

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