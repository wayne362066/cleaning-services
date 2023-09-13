import React, { useState } from "react";
import "./order.css";
import data from "./orderFake.json";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const limitCount = 2;
  const [number, setNumber] = useState(limitCount);
  const [start, setStart] = useState(0); //從哪開始
  const navigate = useNavigate();

  // 換頁
  const prevPageClick = () => {
    setNumber(number - limitCount > 0 ? number - limitCount : limitCount);
    setStart(start - limitCount > 0 ? start - limitCount : 0);
  };
  const nextPageClick = (data) => {
    setNumber(start + limitCount < data.length ? number + limitCount : number);
    setStart(start + limitCount < data.length ? start + limitCount : start);
  };

  return (
    <div className="dashOrder">
      <div className="orderInfo">
        <span className="orderCard">
          <img src="/images/order.png" alt="" />
          <p className="orderText ">訂單成立</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderGoing.png" alt="" />
          <p className="orderText ">已送達</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaning.png" alt="" />
          <p className="orderText ">清掃中</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaned.png" alt="" />
          <p className="orderText ">完成清潔</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderDone.png" alt="" />
          <p className="orderText ">完成訂單</p>
        </span>
      </div>
      <table>
        <thead className="orderThead">
          <tr>
            <th>訂單編號</th>
            <th>訂單內容</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody className="orderTbody">
          {data
            .slice(start, number)
            .map(({ index, orderNumber, content, orderStatus }) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    navigate(`/member/${orderNumber}`);
                  }}
                >
                  <td>{orderNumber}</td>
                  <td>{content}</td>
                  <td>
                    {orderStatus === "0"
                      ? "新訂單"
                      : orderStatus === "1"
                      ? "處理中"
                      : orderStatus === "99"
                      ? "已完成"
                      : "未知狀態"}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="orderBtn-group">
        <button onClick={() => prevPageClick()} className="orderBtn">
          上一頁
        </button>
        <button onClick={() => nextPageClick(data)} className="orderBtn">
          下一頁
        </button>
      </div>
    </div>
  );
};

export default Order;
