import React, { useState ,useEffect} from "react";
import "./order.css";
import OrderStaff from "./orderStaff";
import Score from "./score";
import axios from "../login/axios";
import { useParams } from "react-router-dom";





const OrderDone = () => {
  const [modal, setModal] = useState(false)
  const [orderAPI, setOrderAPI] = useState('')
  const [staffAPI, setStaffAPI] = useState('')
  const [evaluateAPI, setEvaluateAPI] = useState({})
  const [isClose, setIsclose] = useState("")
  const [updataScore, setUpdataScore] = useState(false);
  const {orderNumber}=useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `/member/${orderNumber}`
        );
        setOrderAPI(() =>result.data.results1[0]);//訂單資料
        setStaffAPI(()=>result.data.results2[0])//員工資料
        setEvaluateAPI(()=>result.data.results3[0])//評價
        setIsclose(()=>result.data.results4[0]?.reply)//評價
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [orderNumber]);

const {note,time,donetime,weeks,ornumber,orcity,orrural,oraddress,money,state,orderdone,ordertime,pay}=orderAPI

function handleTime(time){
  if(time===0)return "08:00"
  if(time===1)return "13:00"
  if(time===2)return "18:00"
}

  return (
    <>
    <h3 className="m-0 h3_DEF">會員訂單</h3>
    <div className="dashOrder">
      <h3 className="m-0 h3_RWD">會員訂單</h3>
       {updataScore && <div className="updataScore">
        <div className="updataScoreTOP">評價完成!!</div>
      </div>}
      {modal && <Score  
        setUpdataScore={setUpdataScore} setModal={setModal} orderAPI={orderAPI} evaluateAPI={evaluateAPI} staffAPI={staffAPI} />}
      <div className="orderInfo">
        <span className="orderCard">
          <img src="/images/order.png" alt=""  className="animated-image"/>
          <p className="orderText ">預約快速</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderGoing.png" alt="" className="animated-car"/>
          <p className="orderText ">使命必達</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaning.png" alt=""className="animated-clear" />
          <p className="orderText ">專業清掃</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderCleaned.png" alt="" className="animated-price" />
          <p className="orderText ">價格實惠</p>
        </span>
        <p className="line"></p>
        <span className="orderCard">
          <img src="/images/orderDone.png" alt="" className="animated-check"/>
          <p className="orderText ">嚴格把關</p>
        </span>
      </div>
      <div className="contact-table">
        <table border={1} className="w-100">
          <thead className="orderThead tbody_def">
            <tr>
              <th>訂單編號</th>
              <th>清潔地點</th>
              <th>成立時間</th>
              <th>時段</th>
              <th>備註</th>
            </tr>
          </thead>
          <tbody className="doneTbody orderDn tbody_def">
            <tr>
              <td>{ornumber}</td>
              <td>{orcity+orrural+oraddress}</td>
              <td>{new Date(ordertime).toLocaleDateString("en-CA")}</td>
              <td>{handleTime(time)}</td>
              <td>{note||"無備註"}</td>
            </tr>
          </tbody>
          <thead className="orderThead orderDn tbody_RWD">
            <tr>
              <td>訂單編號:</td>
              <td>{ornumber}</td>
            </tr>
            <tr>
              <td>清潔地點:</td>
              <td>{orcity+orrural+oraddress}</td>
            </tr>
            <tr>
              <td>成立時間:</td>
              <td>{new Date(ordertime).toLocaleDateString("en-CA")}</td>
            </tr>
            <tr>
              <td>時段:</td>
              <td>{handleTime(time)}</td>
            </tr>
            <tr>
              <td>備註:</td>
              <td>{note||"無備註"}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div className="contact-table">
        <table border={1} className="w-100">
          <thead className="orderThead tbody_def">
            <tr>
              <th>服務次數</th>
              <th>訂單金額</th>
              <th>付款方式</th>
              <th>訂單狀態</th>
              <th>完成時間</th>
            </tr>
          </thead>
          <tbody className="doneTbody orderDn tbody_def">
                <tr>
                  <td><span className="text-danger">{donetime}</span>{`/${weeks}次`}</td>
                  <td>{money}元</td>  
                  <td>{pay?"信用卡":"其他"}</td>
                  <td>{state === 2 && isClose ? <span className="text-success fw-bold">已完成</span> :!isClose && state === 2?<button onClick={() => { setModal(true) }} className="orderBtn p-0 ps-2 pe-2">給評價</button>:<span className="text-danger fw-bold">進行中</span>}</td>
                  <td>{orderdone?new Date(orderdone).toLocaleDateString("en-CA"):"尚未完成"}</td>
                </tr>
          </tbody>
          <thead className="orderThead orderDn tbody_RWD">
            <tr>
              <td>訂單金額:</td>
              <td>{money}元</td>
            </tr>
            <tr>
              <td>付款方式:</td>
              <td>{pay?"信用卡":"其他"}</td>
            </tr>
            <tr>
              <td>完成狀態:</td>
              <td>{state === 2 && isClose ? <span className="text-success fw-bold">已完成</span> :(!isClose && state === 2?<button onClick={() => { setModal(true) }} className="orderBtn p-0 ps-2 pe-2">給評價</button>:<span className="text-danger fw-bold">進行中</span>)}</td>
            </tr>
            <tr>
              <td>服務次數:</td>
              <td><span className="text-danger">{donetime}</span>{`/${weeks}次`}</td>
            </tr>
            <tr>
              <td>完成時間:</td>
              <td>{orderdone?new Date(orderdone).toLocaleDateString("en-CA"):"尚未完成"}</td>
            </tr>
          </thead>
        </table>
      </div>
      <OrderStaff
        staffAPI={staffAPI}
        evaluateAPI={evaluateAPI} />
      {isClose && state === 2 &&
        <div className="contact-table">
          <h3 className="contact-table">訂單評論:{isClose || "訂單尚未完成"}</h3>
        </div>}
    </div>
 </> );
};

export default OrderDone;
