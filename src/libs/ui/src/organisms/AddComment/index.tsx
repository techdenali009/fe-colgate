import React, { useState, useEffect } from 'react';
import { Send, UserCircle2 } from 'lucide-react';
import { formatTimeAgo } from '@utils/appFunctions';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

interface Comment {
  _id: string;
  userId: User;
  message: string;
  createdAt: string;
}

interface AddCommentProps {
  comments: Comment[];

  hadleComment?: (newComment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({
  comments: initialComments = [],

  hadleComment,
}) => {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.map((comment) => ({
      ...comment,
      likes: 0,
    }))
  );

  const [newComment, setNewComment] = useState('');

  // Update comments when initialComments prop changes
  useEffect(() => {
    setComments(
      initialComments.map((comment) => ({
        ...comment,
        likes: 0,
      }))
    );
  }, [initialComments]);

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const commentToAdd: Comment = {
        _id: `comment-${Date.now()}`, // Temporary ID
        userId: {
          _id: 'current-user-id', // Replace with actual user ID
          firstName: 'Current',
          lastName: 'User',
        },
        message: newComment,
        createdAt: new Date().toISOString(),
      };

      setComments((prevComments) => [...prevComments, commentToAdd]);
      setNewComment('');
      if (hadleComment) {
        hadleComment(newComment);
      }
    }
  };

  // Helper method to get full name
  const getFullName = (user: User) => {
    return `${user.firstName} ${user.lastName}`.trim();
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 mt-5">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        Comments
      </h3>

      {/* Comments List */}
      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div
            key={comment._id}
            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <UserCircle2 className="w-10 h-10 text-gray-500" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-gray-600 capitalize">
                  {getFullName(comment.userId)}
                </h4>
                <span className="text-xs text-gray-500">
                  {formatTimeAgo(comment.createdAt)}
                </span>
              </div>
              <p className="text-gray-900 mb-2 font-HeroNewSemiBold">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input */}
      <div className="flex items-center space-x-3">
        <UserCircle2 className="w-10 h-10 text-gray-500" />
        <div className="flex-1">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 resize-none"
            rows={3}
          />
        </div>
        <button
          onClick={handleSubmitComment}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          disabled={!newComment.trim()}
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AddComment;
