
export const Button = (props) => {
    
    const isOperator = value =>{
        return isNaN(value) && (value != '.') && (value != '=')
    }
    return (
        <div 
        className='button'
        onClick={() => props.controlClick(props.children)}>
            {props.children}
        </div>
    )
}
