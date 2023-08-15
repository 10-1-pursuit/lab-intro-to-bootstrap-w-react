import postData from "./data/posts.json";
// import {Container} from 'bootstrap'

import NavBar from "./NavBar";

import Search from "./SearchBox";

import "./index.css"

function App() {
  // console.log(postData);
  return (<>
 

  <div className="btn-5" cl="true">
  
  <h1 ><NavBar/> </h1>
  <main>
<div className="text-center">
  <h1 className="script-font border">Travel is the only thing you buy that makes your richer..</h1>
  </div>
    <Search/>



    
  </main>



  </div>
  </>
   
    
  
  );
}

export default App;
