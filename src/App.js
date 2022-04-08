// ----------------------------- 원본 ----------------------------
// import './App.css';

// props => Object 개체
// function Header(props){
//   return (
//     <header>
//       <h1 className="mainTit"><a href="/" onClick={(event)=>{
//         event.preventDefault();
//         props.onMsClick();
//       }}>{ props.title }</a></h1>
//     </header>
//   )
// }
// function Nav(props){
//   let navList = [];
//   props.topics.map((item,idx)=>{
//     // navList[idx] = <li key={item.id}><a href="#">{ item.title }</a><p>{ item.content }</p></li>

//     // push문
//     navList.push(
//       <li key={item.itemNum}>
//         <a id={item.itemNum} href={'/detail/'+ item.itemNum} onClick={
//           (event)=>{
//             event.preventDefault();
//             props.onMsClick(event.target.id);
//         }}>{ item.title }</a>
//       </li>
//     );

//     // for문
//     // for(let idx=0; idx<props.topics.length; idx++){
//     //   navList[idx]=<li><a href="#">{props.topics[idx].title}</a></li>;
//     // }

//   });
//   return ( 
//     <nav>
//       <ol>
//         { navList }
//       </ol>
//     </nav>
//   )
// }
// function Section(props){
//   return (
//     <section>
//       <h2>{ props.title }</h2>
//       <p>
//         { props.content }
//       </p>
//     </section> 
//   )
// }

// function App() {
//   let topic = [
//     {title:'HTML', itemNum:'0001', content:'html 설명'},
//     {title:'CSS', itemNum:'0002', content:'css 설명'},
//     {title:'javaScript', itemNum:'0003', content:'javascript 설명'}
//   ]
//   return (
//     <div className='App'>
//       <Header title="WEB" onMsClick={()=>{console.log('welcome');}}/>
//       <Nav topics={ topic } onMsClick={(id)=>{alert(id)}}/>
//       <Section 
//         title="WEB이란 무엇인가?" 
//         content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam aliquid ullam, eius cum voluptatum, molestiae magni sit atque soluta, id voluptas impedit nulla? Cumque impedit eius aliquam ipsa quidem.
//         Incidunt, pariatur! Impedit, dolores qui excepturi suscipit vel nam provident modi corporis sapiente incidunt similique delectus numquam possimus dolor totam quaerat. Laudantium aliquid praesentium mollitia, exercitationem explicabo non minus. Nemo?
//         Eum nemo deleniti vero odio, alias provident quidem repellendus minus accusamus voluptate architecto ipsa, dolore adipisci. Eos culpa ut sapiente unde repudiandae ipsam cum doloremque rerum, quisquam sint, repellendus quam?
//         Laudantium distinctio molestiae nobis. "/>  


//     </div>
//   );
// }

// export default App;



// ----------------------------- State ----------------------------
// import './App.css';
// import {useState} from 'react';

// function App(){
//   let oldMode = ['html','css','javascript'];
//   let [mode,modeChange] = useState(oldMode);

//   return(
//     <div className='App'>
//       <button onClick={
//         (event)=>{
//           event.preventDefault();
//           modeChange(oldMode);
//           console.log(mode);
//         }
//       }>클릭</button>
//       <ol>
//         <li>
//           <a href="/" onClick={(event)=>{
//             event.preventDefault();
//             let newMode = [...mode];
//             newMode[0] ='에이치티엠엘';
//             modeChange(newMode);
//           }}>{mode[0]}</a>
//         </li>
//         <li>
//           <a href="/" onClick={(event)=>{
//             event.preventDefault();
//             let newMode = [...mode];
//             newMode[1] = '씨에스에스';
//             modeChange(newMode);
//           }}>{mode[1]}</a>
//         </li>
//         <li>
//           <a href="/" onClick={(event)=>{
//             event.preventDefault();
//             let newMode = [...mode];
//             newMode[2] = '자바스크립트';
//             modeChange(newMode); 
//           }}>{mode[2]}</a>
//         </li>
//       </ol>
//     </div>
//   )
// }
// export default App;


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