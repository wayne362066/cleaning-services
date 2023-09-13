import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./order.css";
import Fraction from "./Fraction";
import axios from "axios";
import staff from "./scoreFake.json";

const Score = ({ setModal }) => {
  const score = staff[0];
  const [counters, setCounters] = useState([]);
  const [comment, setComment] = useState("");
  const { orderNumber } = useParams();
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
    try {
      const result = await axios.put(
        `http://localhost:4107/member/updata/${orderNumber}`,
        { data: counters, comment: comment }
      );
      console.log(result);
    } catch (error) {
      console.error("Error updata data:", error);
    }
  }

  return (
    <dialog open className="scoreOP">
      <div className="scoreTop">填寫評價</div>
      <div className="scoreBody">
        <img className="orderStaff" src={score.img} alt="" />
      </div>
      <div className="scoreBody ">
        <img
          className="scoreStart"
          src={score.starImg}
          alt=""
          style={{ clipPath: `inset(0 ${100 - score.score * 20}% 0 0)` }}
        />
      </div>
      <div className="scoreBody scoretext">
        <span>{score.orderStaff}</span>
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
              setModal(false);
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
