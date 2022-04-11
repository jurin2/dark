// ----------------------------- State Props Component start ----------------------------

import {useState} from 'react';

function Modal(props){
  return(
    <section>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
}

function App(){
  let [idx,idxChange] = useState(0); 
  let [title,titleChange] = useState(['html','css','javascript']);
  let [content,contentChange] = useState(['htmlhtmlhtmlhtmlhtml','csscsscsscsscss','javascriptjavascriptjavascriptjavascriptjavascript']);

  return(
    <div className='App'>
      <button onClick={()=>{
        idxChange(0);
      }}>버튼1</button>
      <button onClick={()=>{
        idxChange(1);
      }}>버튼2</button>
      <button onClick={()=>{
        idxChange(2);
      }}>버튼3</button>
      <Modal title={title[idx]} content={content[idx]}/>
    </div>
  );
}

export default App;