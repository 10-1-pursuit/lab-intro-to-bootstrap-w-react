// function PostsContainer({ children }) {
//   return (
//     <div className="container">
//       <div className="row g-3 g-xxl-4">{children}</div>
//     </div>
//   );
// }

// export default PostsContainer;

// leftover code:

// const [posts, setPosts] = useState(postData);

// function handlePostFiltering(searchTerm) {
//   console.log(searchTerm);
//   let filteredPosts = postData.filter((post) => {
//     return (
//       post.location.toLowerCase().includes(searchTerm) ||
//       post.title.toLowerCase().includes(searchTerm)
//     );
//   });

//   console.log(filteredPosts);

//   setPosts(filteredPosts);
// }

// excess ConvolverNode
// function Hero() {
//   return (
//     <div
//       id="hero"
//       className="bg-body-tertiary border-top border-bottom d-none d-md-block"
//     >
//       <div className="container">
//         <blockquote className="blockquote m-0 py-5 text-center">
//           <p className="script-font h2 m-0">
//             Travel is the only thing you buy that makes you richer...
//           </p>
//         </blockquote>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// function Header() {
//   return (
//     <header id="header">
//       <nav className="navbar navbar-expand">
//         <div className="container">
//           <a className="navbar-brand fs-1 fw-bold" href="#">
//             Travel <span className="script-font text-warning">Blog</span>
//           </a>

//           <ul className="navbar-nav me-auto ms-5">
//             <li className="nav-item">
//               <a className="nav-link" aria-current="page" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Popular posts
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// }

// return (
//   <main>
//     <Header />
//     <Hero />
//     <Search handlePostFiltering={handlePostFiltering} />

//     <PostsContainer>
//       <PostsList posts={posts} />
//       <PostsByLocation />
//     </PostsContainer>

//     <Footer />
//   </main>
// );

// export default App;
