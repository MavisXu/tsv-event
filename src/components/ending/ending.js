import { useNavigate } from 'react-router-dom'
import './ending.css';

export default function Ending(props) {
    let navigate = useNavigate();

    function resetGame() {
        let path = '/character-selection';
        navigate(path);     
    }
    
    console.log(props)
    return (
        <div>
            <div><h3>{props?.ending}</h3></div>
            <button className='button' onClick={resetGame}>重玩一遍</button>
        </div>
    )
}