import React, { useEffect, useState } from "react";
import "./Comment.css";
import COMMENTS from "../../fake-data/comments";

const CommentItem = (props) => {
  const { profileUrl, username, text, timestamp } = props;
  return (
    <div className='comment__item__container'>
      <div className='comment__item__profile'>
        <img src={profileUrl} className='comment__profile__img' alt='Profile' />
      </div>
      <div className='comment__item__content'>
        <div className='comment__author'>{username}</div>
        <div className='comment__text'>{text}</div>
        <div className='comment__timestamp'>{timestamp}</div>
      </div>
    </div>
  );
};

const Comment = (props) => {
  const [comments, setComments] = useState(COMMENTS);

  return (
    <div className='comment__container'>
      {comments.map((comment) => (
        <CommentItem
          profileUrl={comment.profileUrl}
          username={comment.username}
          text={comment.text}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
};

export default Comment;
