
export const Button = (props) => {

    const isOperator = value =>{
        return isNaN(value) && (value != '.') && (value != '=')
    }
    return (
        <div 
        className={`button-container ${isOperator(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.controlClick(props.children)}>
            {props.children}
        </div>
    )
}
