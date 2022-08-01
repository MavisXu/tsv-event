import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { plots1 } from '../../data/plots1';
import Choice from '../choice/choice';

export default function Game() {
    const { characterId } = useLocation().state;
    const [ plotId, setPlotId ] = useState(0);
    const [ plots, setPlots ] = useState(plots1);

    function changePlot(to) {
        setPlotId(to);
    }

    function resetGame() {
        setPlotId(0);
    }

    function showChoices(data) {
        if (data.options) {
            let choices = data.options.map((data) => {
                return (
                    <Choice
                    key={data.id}
                    details={data}
                    changePlot={changePlot}
                    />
                )
            })
        } else if (data.ending) {
            return (
                <div>Ending</div>
            )
        }
    } 





    // return (
            // <div><h3>{plots[plotId].text}</h3></div>
            // <div>{showChoices(plots[plotId].options)}</div></>
    // )
}