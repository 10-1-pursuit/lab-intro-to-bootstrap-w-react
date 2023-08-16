import React from "react";
import { useState } from "react";
import posts from "../src/data/posts.json"
import "./Searchbar.css"



const Searchbar = () => {

    const [searchByLocation, setSearchByLocation] = useState("");

    const locations = [];


    const handleChange = (e) => {
        e.preventDefault();
        setSearchByLocation(e.target.value);


    };

    if (searchByLocation.length > 0) {

        posts.filter((location) => {


            return location.match(searchByLocation);

        });

    }

    return (
        <div className="searchbar-style">
            <button> Search </button>
            <input
                type="text"
                placeholder="Search by Location"
                onChange={handleChange}
                value={searchByLocation} />
        </div>
    )

}

export default Searchbar;