import React from 'react';
import './case.css';

const CommentItem = (props) => {
  return (
    <div>
      <div className="commentitem">
        <div className="commentpeople">
          <img src={props.imgSrc} className="people" alt="People" />
          <b className='marq-name'>{props.name}</b>
          <div className='marq-stars'><img
            src="images\staffInfo-star.png"
            alt="start"
            style={{ clipPath: `inset(0 ${100 - props.stars * 20}% 0 0)` }}
          /></div>
        </div>
        <p>{props.content}</p>
      </div>

    </div>
  )
};

export default CommentItem;
