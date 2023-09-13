import React from 'react';
import { useState } from 'react';
import './case.css';
import Memberscore from './memberscore';

function CommentItem({ imgSrc, stars, content }) {
  const [showMemberscore, setShowMemberscore] = useState(false);

  const toggleMemberscore = () => {
    // 使用 setShowMemberscore 的前一個狀態值來切換 showMemberscore 的值
    setShowMemberscore((prevShowMemberscore) => !prevShowMemberscore);
  };

  return (
    <div className="commentitem" onClick={toggleMemberscore}>
      <div className="commentpeople">
        <img src={imgSrc} className="people" alt="People" />
        {Array.from({ length: stars }).map((_, starIndex) => (
          <img
            key={starIndex}
            src="images/icon-star.png"
            className="caseicon"
            alt="Star Icon"
          />
        ))}
      </div>
      <p>{content}</p>

      {showMemberscore && (
        <div className="memberscore-overlay">
          <Memberscore onClose={toggleMemberscore} />
        </div>
      )}
    </div>
  );
}

export default CommentItem;
