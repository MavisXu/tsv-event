import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { plots1, plots2, plots3, plots4, plots5 } from '../../data/';
import Choice from '../choice/choice';
import Ending from '../ending/ending';
import './game.css'

export default function Game() {
    const { characterId, attributes } = useLocation().state;
    const [ plotId, setPlotId ] = useState(0);
    const [ plots ] = useState(choosePlots(characterId));
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
        if (attributesChange) {
            Object.entries(attributesChange).forEach(([key, value]) => {
                attributes[key] += value;
            });
        }
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

    function validateShowConditions(option) {
        if (!option.showConditions) return true;

        const ops = new Map([
            ['>=', (num1, num2) => num1 >= num2],
            ['>', (num1, num2) => num1 > num2],
            ['<=', (num1, num2) => num1 <= num2],
            ['<', (num1, num2) => num1 < num2],
            ['==', (num1, num2) => num1 === num2]
        ]);
        for (let i in option.showConditions) {
            let {operation, attributeName, attributeValue} = option.showConditions[i];
            if (ops.get(operation)(attributes[attributeName], attributeValue)) continue;
            return false;
        }
        return true;
    }

    function showChoices(data) {
        if (data && data.options) {
            let filteredData = data.options.filter(validateShowConditions);
            let choices = filteredData.map(option => {
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