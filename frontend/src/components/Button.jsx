
export const Button = (props) => {
    return (
        <div 
        className='button'
        onClick={() => props.controlClick(props.children)}>
            {props.children}
        </div>
    )
}
