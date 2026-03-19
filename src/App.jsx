import "./App.scss";
function App(){
  return (
    <div class="page">
    <content class="wrapper">
      <div class="content-card">
        <p class="my-name">Murari Lakshman</p>
      </div>
      <div class="typewriter content-card">
        <span class="placeholder"></span>
      </div>
    </content>
    <content class="wrapper">
      <div class="content-card">
        <div>
          <p class="side-head">About me...</p>
          <div class="">
          <h1 class="my-name">Hello, you can call me <span>Murari</span>!</h1>
          <p>
            I am a passionate about learning new things in technology and applying it in real-life.
            Working on projects and building applications that provide value to people is what fuels me. 
            I am currently pursuing Masters in Information Systems at Saint Louis University.
            My goal is to be a developer, watching and contributing to the everchanging technology.
          </p>
          </div>
        </div>
      </div>
    </content>
    </div>
  )
}

export default App
