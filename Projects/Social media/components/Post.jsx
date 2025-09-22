import { useContext } from "react";
import { PostData } from "../store/post-data";

function Post({ items }) {
  const { removePost } = useContext(PostData);

  return (
    <div
      className="card shadow-lg border-0 rounded-3 my-3"
      style={{ width: "22rem" }}
    >
      <div className="card-header bg-primary text-white fw-bold">
        Post #{items.id}
      </div>

      <div className="card-body">
        <h5 className="card-title text-dark">{items.title}</h5>
        <p className="card-text text-muted">{items.body}</p>

        {items.tags && items.tags.length > 0 && (
          <div className="mb-2">
            {items.tags.map((tag, index) => (
              <span key={index} className="badge bg-info me-1">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {items.reactions && (
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="text-success">
              👍 {items.reactions.likes || 0}
            </span>
            <span className="text-danger">
              👎 {items.reactions.dislikes || 0}
            </span>
          </div>
        )}

        <div className="small text-muted mb-3">
          👁 {items.views || 0} views | 👤 User {items.userId || "N/A"}
        </div>

        <button
          type="button"
          className="btn btn-danger w-100"
          onClick={() => removePost(items.id)}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default Post;
