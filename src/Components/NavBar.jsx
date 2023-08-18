/* eslint-disable jsx-a11y/anchor-is-valid*/
// <!-- ************************** -->
// <!-- Bonus! Use documentation to style the nav -->
// <!-- ************************** -->
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* nav-collapse collapse */}
      {/* navbar navbar-expand-lg navbar-light bg-light */}
      <div className="">
        <ul>

          <li>
            <Link to={"/travel"}>
              <span>Travel</span> Blog
            </Link>
          </li>

          <li>
            <Link to={"/About"}>About</Link>
          </li>

          <li>
            <Link to={"/travel"}>Travel</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
