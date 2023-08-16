import PostCard from "./PostCard";

const PostList = ({ posts, setSearchQuery }) => {
    return (
        <div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Search by title or location..." onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="row">
                {posts.map((post) => (
                    <div key={post.id} className="col-md-6 mb-4">
                        <PostCard post={post} />
                        </div>
                ))}
            </div>
        </div>
    )
}

export default PostList