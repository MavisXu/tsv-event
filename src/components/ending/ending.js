import { useNavigate } from 'react-router-dom'
import './ending.css';

export default function Ending() {
    let navigate = useNavigate();

    function resetGame() {
        let path = '/character-selection';
        navigate(path);     
    }
    
    return (
        <div>
            <button className='button' onClick={resetGame}>重玩一遍</button>
        </div>
    )
}