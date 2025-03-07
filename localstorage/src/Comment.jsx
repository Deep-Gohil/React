import React, { useState, useEffect } from "react";

const CommentSection = () => {
  // Get initial comments from localStorage or default to an empty array
  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem("comments")) || [];
  });
  
  const [newComment, setNewComment] = useState("");

  // Update localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment
  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  // Delete a specific comment
  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // Clear all comments
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

      <button className="btn btn-primary" onClick={addComment}>
        Add Comment
      </button>
      {comments.length > 0 && (
        <button className="btn btn-danger mx-2" onClick={clearComments}>
          Clear All
        </button>
      )}

      <ul className="list-group mt-3">
        {comments.map((comment, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {comment}
            <button className="btn btn-sm btn-danger" onClick={() => deleteComment(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
