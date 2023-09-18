import "./dashboard.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderList = (props) => {
  const limitCount = 8; //顯示幾筆
  const [number, setNumber] = useState(limitCount);
  const [start, setStart] = useState(0); //從哪開始
  const navigate = useNavigate(); //導向
  const [data, setData] = useState([]); //資料變數
  const [searchInput, setSearchInput] = useState(""); //搜尋變數
  const [orderAPI, setOrderAPI] = useState([]); //API變數

  // 訂單API
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://localhost:4107/orderlist");
        setOrderAPI(() => {
          return result.data.filter((data) => data.state === 2)
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  
  // 搜尋訂單
  const searchItem = (searchvalue) => {
    setSearchInput(searchvalue);
    if (searchvalue !== "") {
      const filterData = orderAPI.filter((obj) => {
        return Object.values(obj).some((value) =>
          String(value).toLowerCase().includes(searchvalue.toLowerCase())
        );
      });
      setData(filterData);
    } else {
      setData(orderAPI);
    }
  };

  // 消除搜尋內容
  const handleClear = (e) => {
    e.target.value = "";
    setSearchInput("");
  };

  // 判斷訂單狀態
  const handleOrderStatus = (state) => {
    if (state === "0") {
      return "新訂單";
    } else if (state === "1") {
      return "進行中";
    }
    return "已完成";
  };

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
      <div className="orderHead">
        <h3>已完成訂單</h3>
        <div style={{ position: "relative" }}>
          <img
            src="/images/search.png"
            alt="img-button"
            className="aside-img-button"
          />
          <input
            className="aside-input"
            type="text"
            placeholder="訂單查詢"
            onClick={handleClear}
            onChange={(e) => {
              searchItem(e.target.value);
            }}
          />
        </div>
      </div>
      <table>
        <thead className="orderThead">
          <tr id="orderTh">
            <th>訂單編號</th>
            <th>員工編號</th>
            <th>訂單日期</th>
            <th>清潔週數</th>
            <th>剩餘次數</th>
            <th>訂單金額</th>
            <th>訂單狀態</th>
          </tr>
        </thead>
        <tbody className="orderTbody">
          {searchInput.length > 1
            ? data
              .slice(start, number)
              .map(
                ({
                  ornumber,
                  employeeid,
                  weeks,
                  ordertime,
                  donetime,
                  money,
                  state,
                }) => {
                  return (
                    <tr
                      key={ornumber}
                      onClick={() => {
                        navigate(`/dashboard/AdminOrder/${ornumber}`);
                      }}
                    >
                      <td>{ornumber}</td>
                      <td>{employeeid}</td>
                      <td>{new Date(ordertime).toLocaleDateString('en-CA')}</td>
                      <td>{weeks}週</td>
                      <td>{donetime}次</td>
                      <td>{money}</td>
                      <td>{handleOrderStatus(state)}</td>
                    </tr>
                  );
                }
              )
            : orderAPI
              .slice(start, number)
              .map(
                ({
                  ornumber,
                  employeeid,
                  weeks,
                  donetime,
                  ordertime,
                  money,
                  state,
                }) => {
                  return (
                    <tr
                      key={ornumber}
                      onClick={() => {
                        navigate(`/dashboard/AdminOrder/${ornumber}`);
                      }}
                    >
                      <td>{ornumber}</td>
                      <td>{employeeid}</td>
                      <td>{new Date(ordertime).toLocaleDateString('en-CA')}</td>
                      <td>{weeks}週</td>
                      <td>{donetime}次</td>
                      <td>{money}</td>
                      <td>{handleOrderStatus(state)}</td>
                    </tr>
                  );
                }
              )}
        </tbody>
      </table>
      <div className="orderBtn-group">
        <div className="orderBtn" onClick={() => prevPageClick()}>
          上一頁
        </div>
        <div className="orderBtn" onClick={() => nextPageClick(orderAPI)}>
          下一頁
        </div>
      </div>
    </div>
  );
};
export default OrderList;
