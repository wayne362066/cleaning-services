import React from "react";
import './case.css';

const Memberscore = () => {
  return (
    <dialog open className="memberscoreOP">
      <div className="memberscoreTop">
        <u>員工資料</u>
      </div>
      <div className="scorebd scoretext">
        <div className="memberlevel">
          <p>李大媽</p>
          <p>Level 99</p>
        </div>
      </div>
      <div className="scorebd">
        <img className="memberimg" src="/images/orderStaff.png" alt="" />
        <div>
          <div className="scorepoint">
            <p>打掃技能</p>
            <img src="/images/staffInfo-star.png" alt="" />
          </div>
          <div className="scorepoint">
            <p>效率技能</p>
            <img src="/images/staffInfo-star.png" alt="" />
          </div>
          <div className="scorepoint">
            <p>態度技能</p>
            <img src="/images/staffInfo-star.png" alt="" />
          </div>
        </div>
      </div>
      <div className="scorecomment">
        <div className="customername">Cindy</div>
        <div className="customercomment">服務很好，很親切！</div>
      </div>
      <div className="scorecomment">
        <div className="customername">Hong</div>
        <div className="customercomment">有在約定的時間內完成工作，推！</div>
      </div>
      <div className="scorecomment">
        <div className="customername">Mii</div>
        <div className="customercomment">準時抵達，人很客氣 ～</div>
      </div>
    </dialog>
  );
};

export default Memberscore;