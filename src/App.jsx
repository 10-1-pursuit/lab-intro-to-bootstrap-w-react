import postData from "./data/posts.json";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Header from "../components/header";
import "./index.css";

function App() {
  console.log(postData);
  return (
    <main>
      <NavBar />
      <Header />
      <button className="btn">hi</button>
      <Footer />
    </main>
  );
}

export default App;
