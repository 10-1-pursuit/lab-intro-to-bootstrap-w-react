import React, {useState} from "react";
import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Search from "./components/Search"
 import PostsList from "./components/Posts";
import RigthTable from "./components/RigthTable";
import Footer from "./components/Footer" 
  
function App() {
  const [posts, setPosts] = useState(postData);


function PostsContainer({ children }) {
  return (
    <div className="container">
      <div className="row g-3 g-xxl-4">{children}</div>
    </div>
  );
}

  function handlePostFiltering(searchTerm) {
    let filteredPosts = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(searchTerm) ||
        post.title.toLowerCase().includes(searchTerm)
      );
    });

    setPosts(filteredPosts);
  }

  return (
    <main>
      <NavBar />
      <Header />
      <Search handlePostFiltering={handlePostFiltering} />
      <PostsContainer>
        <PostsList posts={posts} />
        <RigthTable />
      </PostsContainer>
      <Footer />
    </main>
  );
}

export default App;