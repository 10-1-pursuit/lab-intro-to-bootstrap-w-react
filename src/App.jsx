import postData from "./data/posts.json";
import NavBar from "./Components/NavBar";
import  './index.css'
import Footer from "./Components/Footer";


function App() {
  console.log(postData);
  return (
    <>
    {/* <header> */}
       <NavBar/>
    {/* </header> */}
    <main>
      <button className="btn">hi</button>
      <Footer/>
    </main>
    </>

  );
}

export default App;
