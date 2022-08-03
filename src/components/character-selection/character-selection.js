import { characters } from '../../data/characters.js';
import { useNavigate } from 'react-router-dom';
import './character-selection.css';

export default function CharacterSelection() {
    let navigate = useNavigate();
    const routeChange = (character) => {
      let path = '/game';
      let state = {state: {characterId: character.id, attributes: character.attributes}}
      navigate(path, state);
    };

    return (
      <div className='selection-body'>
        <h1>请选择游戏角色</h1>
          {characters.map(character => {
            return (
              <div key={character.id} className='character'>
                <img className='photo' src={character.profile} onClick={() => {routeChange(character)}}></img>
                <div className='details'>
                  <h3>{character.name}</h3>
                  <div className='detail'>
                    <h4>性别： {character.gender}</h4>
                    <h4>年龄： {character.age}</h4>
                    <h4>学历： {character.education}</h4>
                    <h4>家庭情况：{character.maritalStatus}</h4>
                    <h4>职业： {character.career}</h4>
                  </div>
                </div>
              </div>   
          )})}
      </div>
    );
}