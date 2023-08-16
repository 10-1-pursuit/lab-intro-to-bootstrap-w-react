import postData from "./data/posts.json";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Header from "../components/header";
import CityCard from "../components/CityCard";
import "./index.css";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  console.log(postData);
  return (
    <>
      <Router>
        <main>
          <NavBar />
          <Header />
          <button className="btn">hi</button>
          <div>
            {<CityCard />}
          </div>
          <Routes>

            <Route path="/" element={<h1>Go to Post</h1>} />
          </Routes>
          <Footer />
        </main>
      </Router >
    </>

  );
}

export default App;
