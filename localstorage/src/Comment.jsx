import React, { useState, useEffect } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState(() => JSON.parse(localStorage.getItem("comments")) || []);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const clearComments = () => {
    setComments([]);
  };

  return (
    <div className="container mt-4">
      <h2>Comment Section</h2>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={addComment} disabled={!newComment}>
        Add Comment
      </button>
      {comments.length > 0 && (
        <button className="btn btn-danger mx-2" onClick={clearComments}>
          Clear All
        </button>
      )}

      <ul className="list-group mt-3">
        {comments.map((comment, index) => (
          <li key={index} className="list-group-item">{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
