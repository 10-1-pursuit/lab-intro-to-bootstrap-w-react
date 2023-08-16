import { useState } from "react";
import postData from "./data/posts.json";
import Nav from "./Components/NavBar";
import Hero from "./Components/Hero";
import PostList from "./Components/PostList";


function App() {
  const [searchQuery, setSearchQuery] =  useState("");
  const filteredPosts = postData.filter(
    (post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.location.toLowerCase().includes(searchQuery.toLowerCase())
  )
  console.log(postData);

  
  return (
    <main>
      <Nav />
      <Hero />
      <div className="container mt-4">
        <PostList posts={filteredPosts} setSearchQuery={setSearchQuery} />
      </div>
    </main>
  );
}

export default App;
