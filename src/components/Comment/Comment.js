import React from "react";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div className='comment__container'>
      <ul class='nav nav-tabs' id='myTab' role='tablist'>
        <li class='nav-item'>
          <a
            class='nav-link active'
            id='home-tab'
            data-toggle='tab'
            href='#comment'
            role='tab'
            aria-controls='home'
            aria-selected='true'
          >
            Home
          </a>
        </li>
        <li class='nav-item'>
          <a
            class='nav-link'
            id='document-tab'
            data-toggle='tab'
            href='#document'
            role='tab'
            aria-controls='document'
            aria-selected='false'
          >
            Tài liệu
          </a>
        </li>
      </ul>
      <div class='tab-content' id='myTabContent'>
        <div
          class='tab-pane fade show active'
          id='comment'
          role='tabpanel'
          aria-labelledby='comment-tab'
        >
          ...
        </div>
        <div
          class='tab-pane fade'
          id='document'
          role='tabpanel'
          aria-labelledby='document-tab'
        >
          ...
        </div>
      </div>
    </div>
  );
};

export default Comment;
