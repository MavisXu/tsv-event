import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { plots1, plots2, plots3, plots4, plots5, plots6 } from '../../data/';
import Choice from '../choice/choice';
import './game.css'

export default function Game() {
    const { characterId } = useLocation().state;
    const [ plotId, setPlotId ] = useState(0);
    const [ plots, setPlots ] = useState(choosePlots(characterId));
    const [ text, setText] = useState('');

    useEffect(() => {
        console.log('plotId', plotId);
        let optionText = text ? text: '';
        setText(optionText + ' ' + plots[plotId].text);
    }, [plotId]);

    function changePlot(reponseText, to) {
        setText(reponseText);
        setPlotId(to);
    }

    function resetGame() {
        setPlotId(0);
    }

    function choosePlots(characterId) {
        switch (characterId) {
            case 1:
                return plots1;
            case 2:
                return plots2;
            case 3:
                return plots3;
            case 4:
                return plots4;
            case 5:
                return plots5;
            case 6:
                return plots6;
        }
    }

    function showChoices(data) {
        if (data && data.options) {
            let choices = data.options.map(option => {
                return (
                    <Choice
                        key={option.id}
                        details={option}
                        changePlot={changePlot}
                    />
                )
            })
            return choices;
        }
    }

    return (
        <div className='text'>
            <div>
                <h3>{text}</h3>
            </div>
            <div>
                {showChoices(plots[plotId])}
            </div>
        </div>
    )
}