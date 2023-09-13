import React from "react";
import { useEffect, useState } from "react";
import './login.css'
import "../../components/dashboard/dashboard.css";
import axios from "axios";
import { useParams } from "react-router-dom";


const ChangePwd = () => {
  const { userid } = useParams();
  const [PWData, setPWData] = useState({});
  // 定義密碼的狀態變數
  const [uppassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //接收資料
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(`http://localhost:4107/member/changepwd/${userid}`);
        if (result.data && result.data.data && result.data.data[0]) {
          setPWData(result.data.data[0]);
          setPassword(result.data.data[0].password);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [userid]);

  // 儲存按鈕的點擊事件
  const handleSaveClick = async () => {
    if (uppassword === confirmPassword) {
      updatePassword();
    } else {
      alert("密碼請一致");
    }
  };

  // 取消按鈕的點擊事件處理函數
  const handleCancelClick = () => {
    setPassword("");
    setConfirmPassword("");
  };


  // 實際更新密碼的函數
  const updatePassword = async () => {
    try {
      await axios.put(
        `http://localhost:4107/member/changepwd/update/${userid}`,
        {
          uppassword: uppassword,
        }
      );
      window.location.reload();
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <div className="membercontainer">
      <div className="loginrightbox">
        <div className="loginflex">
          <ul>
            <li className="loginli">
              <p>新密碼</p>
              <input
                type="password"
                placeholder="請輸入新密碼"
                value={uppassword}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className="loginli">
              <p>確認密碼</p>
              <input
                type="password"
                placeholder="請再次輸入新密碼"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </li>
          </ul>
          <div>
            <button className="cancelbtn" onClick={handleCancelClick}>
              取消
            </button>
            <button className="signupbtn" onClick={handleSaveClick}>
              確認修改
            </button>
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

export default ChangePwd;
