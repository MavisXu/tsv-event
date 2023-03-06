import './choice.css'
import { Option } from '../../common/types.ts'


export default function Choice(props : Option) {
    function clickHandler(){
        props.changePlot(props.details.text, props.details.to, props.details.attributesChange);
    }

    return (
        <div className='choice'>
            <button className='choiceButton' onClick={clickHandler}>
                {props.details.label}
            </button>
        </div>
    )
}