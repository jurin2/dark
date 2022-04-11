import {useState} from 'react';
import './App.css';
function Header(props){
  return (
    <header>
      <h1 className="mainTit">
        <a href="/" onClick={props.onMsClick}>WEB</a>
      </h1>
    </header>
  );
}
function Nav(props){  
  let liList = [];
  for(let idx=0;idx<props.navs.length;idx++){
    liList.push(<li key={props.navs[idx].id}><a id={props.navs[idx].id} href={props.navs[idx].id} onClick={props.onMsClick}>{props.navs[idx].title}</a></li>);
  }      
  return (
    <nav>
      <ol>
        {liList}
      </ol>
    </nav>
  );
  
}
function Section(props){
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  );
}
function App() {
  let navList = [
    {id:1, title:'HTML'},
    {id:2, title:'CSS'},
    {id:3, title:'javaScript'},
  ];
  let [idx,idxChange]=useState(0);  
  let [title,titleChange]=useState(['WEB','HTML','CSS','javaScript']);
  let [content,contentChange]=useState(['WEB의 내용 WEB의 내용 WEB의 내용','HTML의 내용 HTML의 내용 HTML의 내용','CSS의 내용 CSS의 내용 CSS의 내용','javaScript의 내용 javaScript의 내용']);

  return (
    <div className="App">      
      <Header onMsClick={(event)=>{event.preventDefault();idxChange(0)}}/>
      <Nav navs={navList} onMsClick={(event)=>{event.preventDefault();idxChange(event.target.id)}}/>
      <Section title={title[idx]} content={content[idx]}/>
    </div>    
  );
}

export default App;