import './App.css';

function Header(props){
  return(
    <header>
      <h1 className='mainTit'><a href="/">WEB</a></h1>
    </header>
  )
}
function Nav(props){
  let navList = [];
  props.topics.map((item,idx)=>{
    navList[idx] = 
    <li>
      <a href="#">{item.title}</a>
    </li>
  })
  return(
    <nav>
      <ol>
        {navList}
      </ol>
    </nav>
  )
}
function Section(props){
  return(
    <section>
      <h2>WEB이란?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum at natus labore quidem magni accusamus dicta accusantium amet explicabo, ullam a impedit atque distinctio nam blanditiis odio animi voluptates.
        In at, aperiam maiores ducimus accusantium nulla voluptatem repudiandae ex nemo, quia deleniti, fugit cum ipsam. Officia adipisci cum asperiores eum vitae dolorum, molestiae quos tenetur eaque modi magni laboriosam?
        Voluptas placeat esse corrupti similique rerum consequatur fugit tempore delectus necessitatibus rem porro, eum tenetur nobis impedit ullam quisquam beatae laboriosam? Eos unde harum dicta culpa! Est placeat ad voluptate.
        Adipisci at minima libero, laboriosam iste commodi, possimus corrupti tenetur, optio ratione quod et. Eveniet aliquid cupiditate et reiciendis sed repellat voluptates quod illum rerum, sunt, laudantium a, reprehenderit amet.
        Dolor, tempora! Perferendis cumque veritatis consequatur? Illo quis odit aliquam est impedit eveniet necessitatibus temporibus omnis, porro praesentium, qui natus voluptatum magnam voluptas fugiat atque rem aliquid, tenetur ex error.   
      </p>
    </section>
  )
}

function App() {
  let topic = [
    {title:'WEB'},
    {title:'CSS'},
    {title:'javaScript'}
  ]
  let content = [
    {title:'WEB이란?', con:'WEB의 대한 설명 WEB의 대한 설명 WEB의 대한 설명 WEB의 대한 설명 WEB의 대한 설명'},
    {title:'CSS이란?', con:'CSS의 대한 설명 CSS의 대한 설명 CSS의 대한 설명 CSS의 대한 설명 CSS의 대한 설명'},
    {title:'javaScript이란?', con:'javaScript의 대한 설명 javaScript의 대한 설명 javaScript의 대한 설명 javaScript의 대한 설명 javaScript의 대한 설명'}
  ]
  return(
    <div className='App'>
      <Header/>
      <Nav topics={topic}/>
      <Section/>
    
    </div>
  )
}

export default App;







