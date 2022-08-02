import './choice.css'

export default function Choice(props) {
    function clickHandler(event){
        props.changePlot(props.details.text, props.details.to);
    }

    return (
        <div className='choice'>
            <button className='button' onClick={clickHandler}>
                {props.details.label}
            </button>
        </div>
    )
}