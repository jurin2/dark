// ----------------------------- 원본 ----------------------------
import './App.css';

// props => Object 개체
function Header(props){
  return (
    <header>
      <h1 className="mainTit"><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onMsClick();
      }}>{ props.title }</a></h1>
    </header>
  )
}
function Nav(props){
  let navList = [];
  props.topics.map((item,idx)=>{
    // navList[idx] = <li key={item.id}><a href="#">{ item.title }</a><p>{ item.content }</p></li>

    // push문
    navList.push(
      <li key={item.itemNum}>
        <a id={item.itemNum} href={'/detail/'+ item.itemNum} onClick={
          (event)=>{
            event.preventDefault();
            props.onMsClick(event.target.id);
        }}>{ item.title }</a>
      </li>
    );

    // for문
    // for(let idx=0; idx<props.topics.length; idx++){
    //   navList[idx]=<li><a href="#">{props.topics[idx].title}</a></li>;
    // }

  });
  return ( 
    <nav>
      <ol>
        { navList }
      </ol>
    </nav>
  )
}
function Section(props){
  return (
    <section>
      <h2>{ props.title }</h2>
      <p>
        { props.content }
      </p>
    </section> 
  )
}

function App() {
  let topic = [
    {title:'HTML', itemNum:'0001', content:'html 설명'},
    {title:'CSS', itemNum:'0002', content:'css 설명'},
    {title:'javaScript', itemNum:'0003', content:'javascript 설명'}
  ]
  return (
    <div className='App'>
      <Header title="WEB" onMsClick={()=>{console.log('welcome');}}/>
      <Nav topics={ topic } onMsClick={(id)=>{alert(id)}}/>
      <Section 
        title="WEB이란 무엇인가?" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam aliquid ullam, eius cum voluptatum, molestiae magni sit atque soluta, id voluptas impedit nulla? Cumque impedit eius aliquam ipsa quidem.
        Incidunt, pariatur! Impedit, dolores qui excepturi suscipit vel nam provident modi corporis sapiente incidunt similique delectus numquam possimus dolor totam quaerat. Laudantium aliquid praesentium mollitia, exercitationem explicabo non minus. Nemo?
        Eum nemo deleniti vero odio, alias provident quidem repellendus minus accusamus voluptate architecto ipsa, dolore adipisci. Eos culpa ut sapiente unde repudiandae ipsam cum doloremque rerum, quisquam sint, repellendus quam?
        Laudantium distinctio molestiae nobis. "/>  


    </div>
  );
}

export default App;







