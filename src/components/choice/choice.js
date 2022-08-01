export default function Choice(props) {
    function clickHandler(event){
        props.changePlot(props.details.text, props.details.to);
    }

    return (
        <button onClick={clickHandler}>
            {props.details.label}
        </button>
    )
}