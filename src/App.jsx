import postData from "./data/posts.json";
import Nav from "./Components/NavBar";

function App() {
  console.log(postData);
  return (
    <main>
      <Nav />
    </main>
  );
}

export default App;
