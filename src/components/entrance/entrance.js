import './entrance.css';
import { useNavigate } from 'react-router-dom';

export default function Entrance() {
    let navigate = useNavigate();
    const routeChange = () => {
      let path = 'character-selection';
      navigate(path);
    };
  
    return (
      <div className="Entrance">
        <h1><b>[心理游戏]</b> 唐山围殴事件：如果你在现场，你会是谁？ 你会怎么做？ 结局是否会不一样？</h1>
        <h3 className='Sub-header'>西瓜新闻 2022-06-16 22:14</h3>
        <hr/>
        <h3 className='Sub-header'>西瓜新闻记者 XXX</h3>
        <h3 className='Sub-header'>编辑 XXX</h3>
        <p className='Body-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='Game-start' onClick={routeChange}>进入游戏</button>
      </div>
    );
  }