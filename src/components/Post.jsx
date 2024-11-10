import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

const Post = ({ username, imageUrl, caption }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  const handleShare = () => {
    alert('Post shared!');
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="font-bold mb-2">@{username}</h2>
      <img src={imageUrl} alt={caption} className="w-full h-64 object-cover rounded-md mb-2" />
      <p className="mb-4">{caption}</p>

      <div className="flex items-center gap-4">
        <button onClick={handleLike} className="flex items-center gap-1">
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
          <span>{likes}</span>
        </button>
        
        <button onClick={() => setCommentInput((prev) => !prev)} className="flex items-center gap-1">
          <FontAwesomeIcon icon={faComment} />
          <span>{comments.length}</span>
        </button>
        
        <button onClick={handleShare} className="flex items-center gap-1">
          <FontAwesomeIcon icon={faShare} />
          <span>Share</span>
        </button>
      </div>

      {commentInput && (
        <div className="mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add a comment..."
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button onClick={handleComment} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Comment
          </button>
          <div className="mt-4">
            {comments.map((comment, index) => (
              <p key={index} className="border-b py-1">{comment}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;



