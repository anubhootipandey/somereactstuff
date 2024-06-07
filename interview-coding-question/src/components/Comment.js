import React, { useState } from 'react';

const Comment = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <>
      <div>
      <input 
      type='text' 
      placeholder='Leave a comment...'
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Comment</button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
    </>
  )
}

export default Comment;