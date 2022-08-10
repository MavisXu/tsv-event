import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { plots1, plots2, plots3, plots4, plots5 } from '../../data/';
import Choice from '../choice/choice';
import Ending from '../ending/ending';
import './game.css'

export default function Game() {
    const { characterId, attributes } = useLocation().state;
    const [ plotId, setPlotId ] = useState(0);
    const [ plots, setPlots ] = useState(choosePlots(characterId));
    const [ text, setText] = useState('');


    useEffect(() => {
        console.log('plotId', plotId);
        console.log('attributes', attributes);
        let optionText = text ? text: '';
        let plot = getPlots(plotId);
        let plotText = plot.text ? plot.text : '';
        setText(optionText + ' ' + plotText);
    }, [plotId]);

    function getPlots(plotId) {
        return plots.filter(plot => plot.id === plotId)[0];
    }

    function changePlot(reponseText, to, attributesChange) {
        setText(reponseText);
        setPlotId(to);
        Object.entries(attributesChange).forEach(([key, value]) => {
            attributes[key] += value;
        });
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
        } else if (data && data.ending) {
            return (
                <Ending
                    key={data.ending.id}
                    ending={data.ending.text}
                />
            )
        }
    }

    return (
        <div className='text'>
            <div>
                <h3>{text}</h3>
            </div>
            <div>
                {showChoices(getPlots(plotId))}
            </div>
        </div>
    )
}