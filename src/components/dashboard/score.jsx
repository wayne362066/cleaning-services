import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
import Fraction from "./Fraction";
import axios from "axios";

const Score = ({ setModal, orderAPI, staffAPI, evaluateAPI, setUpdataScore}) => {
  const [counters, setCounters] = useState([]);
  const [comment, setComment] = useState("無評論內容");
  const { orderNumber } = useParams();
  {!comment && setComment("沒有評論")}
  useEffect(() => {
    const data = [
      { id: 1, name: "打掃點數：", value: 5 },
      { id: 2, name: "效率點數：", value: 5 },
      { id: 3, name: "態度點數：", value: 5 },
      { id: 4, name: "細心點數：", value: 5 },
    ];
    setCounters(() => {
      return data;
    });
  }, []);
  
  async function handleScoreUpdata() {
    try{
      await axios.put(
        `http://localhost:4107/member/updata/${orderNumber}`,
        { data: counters, comment: comment,orderAPI:orderAPI }
      );
      setModal(false);
      setUpdataScore(true)
      setTimeout(() => {
      setUpdataScore(false)
      window.scrollTo(0, 0)
      window.location.reload()
      }, 3000);
    } catch (error) {
      console.error("Error updata data:", error);
    }
  }

 const staffStar= Object.values(evaluateAPI).reduce((aa,bb) => { 
    aa+= bb/ 4
    return aa
 }, 0)
  

  return (
    <dialog open className="scoreOP">
      <div className="scoreTop">填寫評價</div>
      <div className="scoreBody">
        <img className="orderStaff" src={staffAPI.photo} alt="" />
      </div>
      <div className="scoreBody ">
        <img
          className="scoreStart"
          src="/images/staffInfo-star.png"
          alt="star"
          style={{ clipPath: `inset(0 ${100 - staffStar * 20}% 0 0)` }}
        />
      </div>
      <div className="scoreBody scoretext">
        <span>({staffStar.toFixed(1)}星){staffAPI.employeename}</span>
      </div>
      <div className="scoreBody scoretext">
        {counters.map((counter, index) => (
          <Fraction
            key={counter.id}
            name={counter.name}
            value={counter.value}
            order={index}
            counters={counters}
            setCounters={setCounters}
          />
        ))}
      </div>
      <input
        className="scoreBody scoreinput"
        type="text"
        placeholder="請寫下評論內容"
        onInput={(e) => {
          setComment(e.target.value);
        }}
      />
      <div className="scoreBody">
        <div className="orderBtns">
          <button className="orderBtn" onClick={() => setModal(false)}>
            略過
          </button>
          <button
            onClick={() => {
              handleScoreUpdata();
            }}
            className="orderBtn"
          >
            送出評論
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Score;
