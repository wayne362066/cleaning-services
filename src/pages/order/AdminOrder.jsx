import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../../components/member/member.css";
const Member = () => {
  const { ornumber } = useParams();
  const [orderData, setOrderData] = useState({});
  const {
    userid,
    orname,
    oremail,
    orphone,
    orcity,
    orrural,
    oraddress,
    money,
    pay,
    ordertime,
    orderdone,
    state,
    note,
    employeeid,
    date,
    time,
    weeks,
    donetime,
    employeename,
    employeephone,
    employeeemail,
  } = orderData;

  async function handleOrderUpdata(data) {
    try {
      await axios.put(`http://localhost:4107/AdminOrder/updata/${ornumber}`, {
        data,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `http://localhost:4107/AdminOrder/${ornumber}`
        );
        setOrderData(result.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [ornumber]);

  const handleOrderStatus = (state) => {
    if (state === 0) {
      return "新訂單";
    } else if (state === 1) {
      return "進行中";
    }
    return "已完成";
  };

  const handleTime = (time) => {
    if (time === 0) {
      return "08:00";
    } else if (time === 1) {
      return "13:00";
    }
    return "18:00";
  };

  return (
    <div>
      <div className="Container">
        <h3 className="orderh3">管理訂單</h3>
        <div
          className={`orderContainer bgdone ${state === 2 ? "complete" : ""}`}
        >
          <div className="orderContent">
            <table border={1}>
              <tr>
                <th style={{ fontWeight: "600" }}>
                  <Link
                    to={`/dashboard/PersonalInfo/${userid}`}
                    className="Link-decoration"
                  >
                    訂購人資料
                  </Link>
                </th>
              </tr>
              <tr>
                <td>會員編號:{userid}</td>
              </tr>
              <tr>
                <td>訂購人姓名:{orname}</td>
              </tr>
              <tr>
                <td>聯絡方式:{orphone}</td>
              </tr>
              <tr>
                <td>Email:{oremail}</td>
              </tr>
            </table>
            <table border={1}>
              <tr>
                <th style={{ fontWeight: "600" }}>
                  <Link
                    to={`/dashboard/StaffList/${employeeid}`}
                    className="Link-decoration"
                  >
                    清潔員
                  </Link>
                </th>
              </tr>
              <tr>
                <td>員工編號:{employeeid}</td>
              </tr>
              <tr>
                <td>姓名:{employeename}</td>
              </tr>
              <tr>
                <td>聯絡方式:{employeephone}</td>
              </tr>
              <tr>
                <td>Email:{employeeemail}</td>
              </tr>
            </table>
          </div>
          {/* 訂單資訊 */}
          <table border={1}>
            <tr>
              <th style={{ fontWeight: "600" }}>訂單資料</th>
              <th></th>
            </tr>
            <tr>
              <td>訂單編號:{ornumber}</td>
              <td>服務日期:{new Date(date).toLocaleDateString("en-CA")}</td>
            </tr>
            <tr>
              <td>訂單狀態:{handleOrderStatus(state)}</td>
              <td>服務時段:{handleTime(time)}</td>
            </tr>
            <tr>
              <td>付款方式:{pay ? "信用卡" : "無"}</td>
              <td>服務週數:{weeks}</td>
            </tr>
            <tr>
              <td>訂單金額:{money}元</td>
              <td>服務次數:{donetime}</td>
            </tr>
            <tr>
              <td>清潔地址:{orcity + orrural + oraddress}</td>
              <td>
                完成次數:<span style={{ color: "red" }}>{donetime}</span>/
                {weeks}
              </td>
            </tr>
            <tr>
              <td>訂單日期:{new Date(ordertime).toLocaleString("en-CA")}</td>
              <td>
                完成時間:
                {orderdone ? new Date(orderdone).toLocaleString("en-CA") : ""}
              </td>
            </tr>
          </table>
          <div className="orderContent">備註:{note ?? "無"}</div>
        </div>
        {/* 按鈕 */}
        {state !== 2 ? (
          <div className="btncontain">
            <button
              className={weeks !== donetime ? "notClear" : ""}
              disabled={weeks !== donetime ? true : false}
              onClick={() => {
                setOrderData((prevStatus) => ({
                  ...prevStatus,
                  state: 2,
                  orderdone: new Date(orderdone).toLocaleString("en-CA"),
                }));

                handleOrderUpdata({
                  ...orderData,
                  state: 2,
                  orderdone: new Date().toLocaleString("en-CA"),
                });
              }}
            >
              訂單完成
            </button>
            <button
              onClick={() => {
                setOrderData((count) => {
                  return {
                    ...count,
                    donetime:
                      count.donetime + 1 <= weeks
                        ? count.donetime + 1
                        : count.donetime,
                    state:count.state=1
                  };
                });
                handleOrderUpdata({
                  ...orderData,
                  donetime:
                    orderData.donetime + 1 <= weeks
                      ? orderData.donetime + 1
                      : orderData.donetime,
                      state:orderData.state=1
                });
              }}
            >
              打掃完成
            </button>
          </div>
        ) : (
          <div className="orderContent">訂單完成</div>
        )}
      </div>
    </div>
  );
};

export default Member;
