// ----------------------------- State ----------------------------
import './App.css';
import {useState} from 'react';

function App(){
  let oldMode = ['html','css','javascript'];
  let [mode,modeChange] = useState(oldMode);

  return(
    <div className='App'>
      <button onClick={
        (event)=>{
          event.preventDefault();
          modeChange(oldMode);
          console.log(mode);
        }
      }>클릭</button>
      <ol>
        <li>
          <a href="/" onClick={(event)=>{
            event.preventDefault();
            let newMode = [...mode];
            newMode[0] ='에이치티엠엘';
            modeChange(newMode);
          }}>{mode[0]}</a>
        </li>
        <li>
          <a href="/" onClick={(event)=>{
            event.preventDefault();
            let newMode = [...mode];
            newMode[1] = '씨에스에스';
            modeChange(newMode);
          }}>{mode[1]}</a>
        </li>
        <li>
          <a href="/" onClick={(event)=>{
            event.preventDefault();
            let newMode = [...mode];
            newMode[2] = '자바스크립트';
            modeChange(newMode); 
          }}>{mode[2]}</a>
        </li>
      </ol>
    </div>
  )
}
export default App;