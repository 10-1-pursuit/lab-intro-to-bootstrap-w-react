import postData from "./data/posts.json";
import NavBar from "./Components/NavBar";



function App() {
  console.log(postData);
  return (
    <>
    <nav> <NavBar/>
    </nav>
    <main>
      <button className="btn">hi</button>
    </main>
    </>

  );
}

export default App;
