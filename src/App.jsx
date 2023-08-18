import Nav from "./Components/NavBar";
import postData from "./data/posts.json";
import "./App.css"
import SearchBar from "./Components/SearchBar";
import PostsCard from "./Components/PostsCard";
import { useState } from "react";



function App() {
  // console.log(postData);
const [postMappedData, setPostMappedData] = useState(postData)

  const dataFromPosts = postMappedData.map((eachPost)=> eachPost)

console.log(dataFromPosts)

  return (
    <>
      <Nav />
      <header>
        <h1>Travel is the only thing you buy that makes you richer</h1>
      </header>

   {/* should allow for searching by post title and location aka filter */}
      <SearchBar />
      
      <main className="d-flex flex-column min-vh-100">
   {/* A series of posts. These posts include the post title, the location, and an abbreviated version of the post content. Finally, a button is at the bottom.  */}
   <PostsCard postMappedData={postMappedData}/>
     
      <footer class="mt-auto">Footer</footer>
      </main>
    </>
  );
}

export default App;
