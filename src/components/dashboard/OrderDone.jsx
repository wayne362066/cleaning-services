import React, { useState } from "react";
import "./order.css";
import OrderStaff from "./orderStaff";
import data from "./orderDonefake.json";
import Score from "./score";

function orderDonetime(orderDonetime) {
  const date = new Date(orderDonetime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}



const OrderDone = () => {
  const [modal, setModal] = useState(false)


  return (
    <div className="dashOrder">
      {modal && <Score setModal={setModal} />}
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
            <th>訂單完成</th>
            <th>派遣專員</th>
            <th>完成清潔</th>
            <th>完成狀態</th>
          </tr>
        </thead>
        <tbody className="doneTbody orderDn">
          {data.map(({
            index,
            doneTime,
            orderStaff,
            content,
            orderStatus }) => {
            return (
              <tr key={index}>
                <td dangerouslySetInnerHTML={{ __html: orderDonetime(doneTime) }}></td>
                <td>{orderStaff}</td>
                <td>{content}</td>
                <td>
                  {orderStatus === "99" ? (//按鈕要改成發送評論後要還可以點進去看歷史評論但無法更改
                    <button onClick={() => { setModal(true) }} className="orderDnbtn">完成訂單</button>
                  ) : (
                    orderStatus === "0" ? "新訂單" : "處理中"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <OrderStaff />
      {/* <div className="orderBtn-group">
        <button
          onClick={() => {
            alert("AAAAAAAAAAAAAAAAAA");
          }}
          className="orderBtn"
        >
          上一頁
        </button>
        <button
          onClick={() => {
            alert("AAAAAAAAAAAAAAAAAA");
          }}
          className="orderBtn"
        >
          下一頁
        </button>
      </div> */}
    </div>
  );
};

export default OrderDone;
