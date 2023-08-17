import React, { useState } from "react";
import postData from "./data/posts.json";
import images from "./images/index.js"
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import NavBar from "./components/NavBar.jsx"

function PostCard({ content, location, title }) {
  const normalizedLocation = location
    .toLowerCase()
    .split(' ')
    .join('-')

  return (
    <div className="col-12 col-md-6">
      <div className="card">
        <img
          src={images[normalizedLocation]}
          className="card-img-top post-image-height object-fit-cover"
          alt="Post Image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle text-muted mb-2">{location}</h6>
          <p className="card-text text-truncate">{content}</p>
          <button type="button" className="btn btn-warning float-end">
            Go To Post ⤴
          </button>
        </div>
      </div>
    </div>
  );
}

function PostsByLocation() {
  const postCounts = {};
  for (const post of postData) {
    if (postCounts[post.location]) {
      postCounts[post.location]++;
    } else {
      postCounts[post.location] = 1;
    }
  }

  const tableRows = [];
  for (const location in postCounts) {
    const count = postCounts[location];
    tableRows.push(
      <tr key={location}>
        <th scope="row">{location}</th>
        <td className="text-center">
          <span className="badge bg-secondary text-white">
            {count} Posts
          </span>
        </td>
      </tr>
    );
  }

  return (
    <div className="col-12 col-lg-4">
      <h2>
        Posts by <span className="text-warning">Location</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Location</th>
            <th scope="col" className="text-center">
              Posts
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState(postData);

  function handlePostFilter(search) {
    let filteredPosts = postData.filter((post) => {
      return (
        post.location.toLowerCase().includes(search) ||
        post.title.toLowerCase().includes(search)
      );
    });

    setPosts(filteredPosts);
  }

  return (
    <main>
      <NavBar />
      <div id="hero" className="bg-body-tertiary border-top border-bottom d-none d-md-block">
        <div className="container">
          <blockquote className="blockquote m-0 py-5 text-center">
            <p className="script-font h2 m-0">
              Travel is the only thing you buy that makes you richer...
            </p>
          </blockquote>
        </div>
      </div>
      <SearchBar handlePostFilter={handlePostFilter} />
      <div className="row g-3 g-xxl-4">
        <div className="col-lg-8">
          <div className="row g-3 g-xxl-4">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
        <PostsByLocation />
      </div>
      <Footer />
    </main>
  );
}

export default App;
