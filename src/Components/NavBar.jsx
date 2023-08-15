      {/* navbar-expand-lg is used to control when the nav bar should start expanding on larger screens */}
      {/* navbar-light sets the light color scheme for the navbar */}
      {/* bg-light sets the lightbackgorund color for the navigation bar */}
      {/* container is used to center and keep the content within a responsive container to ensure consistent spacing and readability */}
      {/* navbar-brand is usually applied to the logo or brand name of the nav bar typically containing a text or image to represent the webpage */}
      {/* navbar-collapse is used to group and collapse nav items for smaller screens and ml-auto adds a left margin on an item to push it right */}
      {/* navbar-nav styles the list items to appear horizontally in the nav bar */}
      {/* nav-item class ensure all navigation items have consistent styling. Without this each nav item might not have a consistent design. */}
      {/* nav-link is applied to anchor tags to style it into navigation links. */}

      const Nav = () => {

      return (
      <nav className="navbar navbar-expand-lg navbar-light bg-ight">
        <div className="container">
          <a className="navbar-brand" href="#">
            Travel Blog
          </a>
          <div className="navbar-collapse ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Popular Posts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
      }

      export default Nav;