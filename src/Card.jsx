import { useState } from "react"
import postData from "./data/posts.json"

import images from "./images/index"


const Cards=()=>{

    const[expanded,SetExpanded]=useState(false);

    const toggleExpanded=()=>{
            SetExpanded(!expanded)

    };


    for(let i=0;i<images.length;i++){

        if (images[i]== el.location){

            return [i]
        }


    }




    const photo= postData.map((el)=>
    
    
    
    
    
    {return <>

<div className=" card">
        <div className="border col " >
      
      <div className=" " >
          <h1 >{el.title}</h1>
          <h2 ><img src={images.chicago}/></h2>
          <h3 >{el.content}</h3>
          <button onClick={toggleExpanded}>
        {/* {expanded ? 'Read Less' : 'Read More'} */}
      </button>
      
      
      
          </div>
          <div className=""></div>
      
      
        </div>

        </div>
      
        
        
        
        
        
        
        
        </>
      
      
      
        })


        return (<>{photo}</>);
      





}


export default Cards