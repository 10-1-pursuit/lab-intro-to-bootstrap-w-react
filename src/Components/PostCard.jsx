import images from "../images/index.js"
import { useState } from "react";

const PostCard = ({ post }) => {
const [showFullContent, setShowFullContent] = useState(false);

    console.log("Images object:", images);
    console.log("Post image key:", post.location);
    return (
        <div className="card">
            <img 
            src={images[post.location]} 
            alt={post.title}
            className="post-image-height"
            />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-location">{post.location}</p>
                {showFullContent ? (
                <p className="card-text">{post.content}</p>
                ) : (
                    <p className="card-text">{post.content.slice(0, 25)}...</p>
                )}
                <button className="btn btn-primary" 
                onClick={() => setShowFullContent(!showFullContent)}
                >
                    {showFullContent ? "Show Less" : "Go to Post"}
                    </button>
            </div>
        </div>
    )
}

export default PostCard