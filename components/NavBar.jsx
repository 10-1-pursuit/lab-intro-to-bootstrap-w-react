import React from "react";



import { Link } from "react-router-dom";




function NavBar() {

    return (
        <>
            <div className="header-img" img src="#" alt="TravelBlog logo">
                <h1 className="Travel-style">TravelBlog</h1>


                <div className="NavBar-style">


                    <nav>
                        <Link to="/"> About Us </Link>
                        <Link to="/"> Popular Posts </Link>

                    </nav>


                </div>


            </div>

        </>
    )


}


export default NavBar;