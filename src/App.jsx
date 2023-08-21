import postData from "./data/posts.json";
// import {Container} from 'bootstrap'
import images from  "./images"
import { Row, Col } from 'react-bootstrap';

import NavBar from "./NavBar";

import Search from "./SearchBox";

import "./index.css"

import Cards from "./Card";


function App() {
  // console.log(postData);


  
  return (<>
 

  <div className="container" cl="true">
  
  <h1 ><NavBar/> </h1>
  <main>
<div className="text-center">
  <h1 className="script-font border">Travel is the only thing you buy that makes your richer..</h1>
  </div>
    <Search/>
    <div className="container col-8">
      <Row>
        <Col>
<div className="row">
    <div className=" card col"> 
    {/* <div className="container">
<div className="row">
    <div className="col-sm"></div>
    <h1>2nd</h1>

    </div>
    </div> */}
    <Cards/>


    </div>

    </div>
    </Col>
    <Col>
    
    
    </Col>
  </Row>
    </div>


    
  </main>



  </div>
 
  </>
   
    
  
  );
}

export default App;
