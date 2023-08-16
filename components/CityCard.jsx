import React from "react";
import { useState } from "react";
import posts from "../src/data/posts.json"
import "./CityCard.css"


// const posts = posts.json;

function CityCard() {
    const [trackSelectedPostID, setTrackSelectedPostID] = useState(null);
    const citiesToRender = posts.map(
        (eachPost) => (

            <div className="card-container" key={eachPost.id}>

                <img src={eachPost.imgSrc} alt={`Image of City: ${eachPost.location}`} />
                <h4>{`Title: ${eachPost.title}`}</h4>
                <h6>{`Location: ${eachPost.location}`}</h6>
                <br />
                <h6> {`${eachPost.content}`}</h6>

                <button type="submit" onClick={() => setTrackSelectedPostID(trackSelectedPostID === eachPost.id ? null : eachPost.id


                )
                }
                >
                    {trackSelectedPostID === eachPost.id ? "Go to Post" : "Return to Main Page"}
                </button>

            </div >

        )
    )

};

export default CityCard;
