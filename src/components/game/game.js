import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { plots1 } from '../../data/plots1';
import Choice from '../choice/choice';

export default function Game() {
    const { characterId } = useLocation().state;
    const [ plotId, setPlotId ] = useState(0);
    const [ plots, setPlots ] = useState(plots1);
    const [ text, setText] = useState('');

    useEffect(() => {
        console.log('plotId', plotId);
        setText(text + ' ' + plots[plotId].text);
    }, [plotId]);

    function changePlot(reponseText, to) {
        setText(reponseText);
        setPlotId(to);
    }

    function resetGame() {
        setPlotId(0);
    }

    return (
        <div>
            <div>
                <h3>{text}</h3>
            </div>
            <div>
                {plots[plotId].options.map((option) => (
                    <Choice
                        key={option.id}
                        details={option}
                        changePlot={changePlot}
                    />
                ))}
            </div>
        </div>
    )
}