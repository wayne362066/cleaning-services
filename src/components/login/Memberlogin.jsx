import React from "react";
import { useEffect, useState } from "react";
import './login.css'
import "../../components/dashboard/dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const Memberlogin = () => {
  const { userid } = useParams();
  const [memberData, setMemberData] = useState({});
  const [edit, setEdit] = useState(false);
  // 編輯變數
  const [upPhone, setUpPhone] = useState("")
  const [upAddress, setUpAddress] = useState("")
  const [upRural, setUpRural] = useState("")
  const [dist, setdist] = useState("")


  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`http://localhost:4107/member/memberinfo/${userid}`);
        if (result.data && result.data.data && result.data.data[0]) {
          setMemberData(result.data.data[0]);
          setUpPhone(result.data.data[0].phone);
          setUpAddress(result.data.data[0].address);
          setUpRural(result.data.data[0].rural);
          setdist(result.data.address);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [userid]);

  // 資料更新送出
  async function handleSendEdit() {
    try {
      await axios.put(
        `http://localhost:4107/member/memberinfo/update/${userid}`,
        {
          upPhone: upPhone,
          upRural: upRural,
          upAddress: upAddress,
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updata data:", error);
    }
  }



  const adreessDist = [
    {
      dist: "中區",
      v: "Central",
    },
    {
      dist: "北區",
      v: "North",
    },
    {
      dist: "南區",
      v: "South",
    },
    {
      dist: "西區",
      v: "West",
    },
    {
      dist: "東區",
      v: "Eastern",
    },
    {
      dist: "北屯區",
      v: "Beitun",
    },
    {
      dist: "南屯區",
      v: "Nantun",
    },
    {
      dist: "西屯區",
      v: "Xitun",
    },
    {
      dist: "豐原區",
      v: "Fengyuan",
    },
    {
      dist: "大里區",
      v: "Dali",
    },
    {
      dist: "太平區",
      v: "Taiping",
    },
    {
      dist: "烏日區",
      v: "Uri",
    },
    {
      dist: "大雅區",
      v: "Daya",
    },
    {
      dist: "潭子區",
      v: "Tanzi",
    },
    {
      dist: "新社區",
      v: "Xinshe",
    },
    {
      dist: "神岡區",
      v: "Shengang",
    },
    {
      dist: "龍井區",
      v: "Longjing",
    },
    {
      dist: "沙鹿區",
      v: "Shalu",
    },
  ];



  const {
    name,
    birthday,
    phone,
    email,
    id,
    city,
    rural,
    address
  } = memberData;

  const btd = new Date(birthday).toLocaleDateString('en-CA')


  // 如果處於編輯模式，渲染編輯表單，否則渲染會員資料
  return (
    <div className="membercontainer">
      <div className="loginrightbox">
        <div className="loginflex">
          {edit ? 

            // 編輯模式下的表單
            <ul>
              <li className="loginli">
                <img src="/images/nameicon.png" className="loginicon" />
                <p>姓名</p>
                <input value={name} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/date.png" className="loginicon" />
                <p>生日</p>
                <input value={btd} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/idnumber.png" className="loginicon" />
                <p>身分證字號</p>
                <input value={id} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/tet.png" className="loginicon" />
                <p>手機號碼</p>
                <input
                  type="tel"
                  placeholder="請輸入手機號碼"
                  onChange={(e) => setUpPhone(e.target.value)} pattern="^09[0-9]{8}$" required={true} />
              </li>
              <li className="loginli">
                <img src="/images/icon-4.png" className="loginicon" />
                <p>信箱</p>
                <input value={email} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/icon-6.png" className="loginicon" />
                <p>地址</p>
                <input type="text" defaultValue={city} disabled={true} />
                <select defaultValue={upRural} required={true} onChange={(e) => setUpRural(e.target.value)} >
                  {dist.map((dist, index) => {
                    return (
                      <option value={dist.dist} key={index}>
                        {dist.dist}
                      </option>
                    );
                  })}
                </select> <input type="text" defaultValue={address} onChange={(e) => setUpAddress(e.target.value)} required={true} />
              </li>
            </ul>
           : 
            // 顯示會員資料
            <ul>
              <li className="loginli">
                <img src="/images/nameicon.png" className="loginicon" />
                <p>姓名</p>
                <input value={name} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/date.png" className="loginicon" />
                <p>生日</p>
                <input value={btd} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/idnumber.png" className="loginicon" />
                <p>身分證字號</p>
                <input value={id} disabled="disabled" />
              </li>
              <li className="loginli">
                <img src="/images/tet.png" className="loginicon" />
                <p>手機號碼</p>
                <input
                  value={phone}
                  disabled="disabled"
                ></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-4.png" className="loginicon" />
                <p>信箱</p>
                <input value={email} disabled="disabled"></input>
              </li>
              <li className="loginli">
                <img src="/images/icon-6.png" className="loginicon" />
                <p>地址</p>
                <input
                  type="text"
                  value={city}
                  id="cleaning-city"
                  disabled="disabled"
                />
                <input
                  type="text"
                  value={rural}
                  id="cleaning-city"
                  disabled="disabled"
                />
                <input
                  type="text"
                  value={address}
                  id="detail-address"
                  required
                  disabled="disabled"
                />
              </li>
            </ul>
          }

          <div>
            {edit ? 
              // 顯示儲存和取消按鈕
              <>
                <button className="cancelbtn" onClick={() => setEdit(!edit)}>
                  取消
                </button>
                <button className="signupbtn" onClick={handleSendEdit}>
                  確認修改
                </button>
              </>
             : 
              // 顯示編輯按鈕
              <button className="revisebtn" onClick={() => setEdit(!edit)}>
                修改
              </button>
            }
          </div>
        </div>
      </div>
      <div className="loginbg">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};



export default Memberlogin;