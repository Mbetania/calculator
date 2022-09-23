import React from 'react'

const ButtonClear = (props) => {
return (
    <div
    className='button-clear' 
    onClick={props.controlClickClear}>
        {props.children}
    </div>
)
}

export default ButtonClear