import postData from "./data/posts.json";
import "./index.css"

function App(postData) {
  console.log(postData);
  return (

    <>
      <main>
        <header>
          <h1> <a >Travel Blog</a>   </h1>
          <aside>
            <a href="/about">About</a>  <br />
            <a href="/contact">Contact</a>
          </aside>



        </header>


        <h1>Travel is the only thing u buy that makes u richer</h1>

        <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Search post by location" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">cancel</button>
        </div>
      </main>
    </>
  );
}

export default App;
