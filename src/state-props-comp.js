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
  let [btnNum,btnNumChange] = useState(0); 
  let [제목,제목변경] = useState(['html','css','javascript']);
  let [내용,내용변경] = useState(['dfsaffwfwefkjnhskjnfjksndfjkd','afljmqmkamfldsjflelwef','bxjmiemkmlmqlkwmdkvo']);

  return(
    <div className='App'>
      <button onClick={()=>{
        btnNumChange(0);
      }}>버튼1</button>
      <button onClick={()=>{
        btnNumChange(1);
      }}>버튼2</button>
      <button onClick={()=>{
        btnNumChange(2);
      }}>버튼3</button>
      <Modal title={제목[btnNum]} content={내용[btnNum]}/>
    </div>
  );
}

export default App;