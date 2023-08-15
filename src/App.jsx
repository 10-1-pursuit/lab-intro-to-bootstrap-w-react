import postData from "./data/posts.json";
import Nav from "./Components/NavBar";
import Hero from "./Components/Hero"


function App() {
  console.log(postData);

  
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}

export default App;
