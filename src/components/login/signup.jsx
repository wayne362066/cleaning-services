
import React, { useRef, useState, useEffect } from 'react'
import AuthContext, { AuthProvider } from './AuthContext';
import { validPhone, validPassWord, validEmail, validName, validAge, validId } from "../dashboard/RegEx"
// 日期選擇套件跟CSS樣式
import DatePicker from 'react-date-picker';
import './DatePicker.css';
import './Calendar.css';

// 設定日期選擇器語言

// import dateFns from "date-fns";
// import TW from 'date-fns/locale/zh-TW';




import axios from './axios'


const SignUp = () => {


  const [upname, setName] = useState("")
  const [upbirthday, setBirthday] = useState("");
  const [upemail, setEmail] = useState("")
  const [upphone, setPhone] = useState("")
  const [uprural, setRural] = useState("")
  const [upid, setId] = useState("") //身分證字號
  const [upaddress, setAddress] = useState("")
  const [uppassword, setPassword] = useState("")
  const [staffDate, setStaffData] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
    id: "",
    address: "",
    password: "",
    rural: "中區",
  })



  // 送出註冊資料 
  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 驗證密碼是否滿足要求
    if (true) {
      try {
        // 使用 Axios 將使用者資料發送到後端
        await axios.post('/signup', JSON.stringify(staffDate), {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        window.location.href = 'http://localhost:3000/loginpage'
        // 可以在這裡添加處理成功響應的程式碼
      } catch (error) {
        // 處理錯誤
        console.log(JSON.stringify(staffDate));
        console.error("註冊錯誤：", error);
      }
    } else {
      // 密碼不符合要求，可以在此處添加相應的錯誤處理邏輯
      console.log("密碼不符合要求");
    }
  };

  // 轉換日期
  function formatDate(e) {
    const originalDate = new Date(e);

    if (isNaN(originalDate.getTime())) {
      // 檢查是否解析日期成功
      return "無效的日期";
    }

    const year = originalDate.getFullYear();
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // 月份從0開始，所以要加1，並補0
    const day = originalDate.getDate().toString().padStart(2, '0'); // 補零

    return `${year}-${month}-${day}`;
  }






  const adreessDist = [
    {
      dist: "中區",
      value: "中區",
    },
    {
      dist: "北區",
      value: "北區",
    },
    {
      dist: "南區",
      value: "南區",
    },
    {
      dist: "西區",
      value: "西區",
    },
    {
      dist: "東區",
      value: "東區",
    },
    {
      dist: "北屯區",
      value: "北屯區",
    },
    {
      dist: "南屯區",
      value: "南屯區",
    },
    {
      dist: "西屯區",
      value: "西屯區",
    },
    {
      dist: "豐原區",
      value: "豐原區",
    },
    {
      dist: "大里區",
      value: "大里區",
    },
    {
      dist: "太平區",
      value: "太平區",
    },
    {
      dist: "烏日區",
      value: "烏日區",
    },
    {
      dist: "大雅區",
      value: "大雅區",
    },
    {
      dist: "潭子區",
      value: "潭子區",
    },
    {
      dist: "新社區",
      value: "新社區",
    },
    {
      dist: "神岡區",
      value: "神岡區",
    },
    {
      dist: "龍井區",
      value: "龍井區",
    },
    {
      dist: "沙鹿區",
      value: "沙鹿區",
    },
  ];

  // 表單資料變更
  async function formDataChange(e) {
    const { name, value } = e.target;
    // const inputValue = type === 'checkbox' ? checked : value;
    setStaffData({
      ...staffDate,
      [name]: value
    })
  }

  async function birthdayDataChange(e) {
    const { name, value } = formatDate(e);
    setStaffData({
      birthday: formatDate(e)
    })
  }


  const maxDate = new Date()









  // 正規表達驗證
  function RexgeValid(name) {
    return name ? <span className='text-success fs-6'><i className="bi bi-check-circle">Success</i></span> : <span className='text-danger fs-6'><i className="bi bi-x-circle">Failed</i></span>;
  }


  return (
    <div className="loginflex">
      <form
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        onSubmit={handleSubmit}
      >
        <ul>
          <li className="loginli">
            <img src="./images/nameicon.png" className="loginicon" />
            <p>姓名</p>
            <input
              type="text"
              placeholder="請輸入姓名"
              name='name'
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => {
                const newName = e.target.value;
                setName(newName);
                setStaffData(() => ({
                  ...staffDate,
                  name: e.target.value
                }));
              }}
            >
            </input>
            {RexgeValid(upname)}
          </li>


          <li className="loginli">
            <img src="./images/date.png" className="loginicon" />
            <p>生日</p>
            <div>
              {/* 當選取滿18歲的年紀時 再換選取未滿18的日期時會跳錯誤 */}
              {/* 原因可能為正規表示法的規則? */}
              <DatePicker
                name='birthday'
                maxDate={maxDate}
                value={upbirthday}
                clearIcon={null}
                onChange={(e) => {
                  const isAgeValid = validAge(formatDate(e));
                  setStaffData(() => ({
                    ...staffDate,
                    birthday: formatDate(e)
                  }));

                  console.log(staffDate);
                  setBirthday(isAgeValid ? formatDate(e) : alert("很抱歉,必須年滿18歲"));
                }} />
            </div>
            {RexgeValid(upbirthday)}
          </li>

          <li className="loginli">
            <img src="./images/tet.png" className="loginicon" />
            <p>手機號碼</p>
            <input
              type="phone"
              placeholder="請輸入手機號碼"
              name='phone'
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => setPhone(validPhone.test(e.target.value))}
            >

            </input>{RexgeValid(upphone)}
          </li>


          <li className="loginli">
            <img src="./images/icon-4.png" className="loginicon" />
            <p>信箱</p>
            <input
              type="email"
              placeholder="請輸入信箱"
              name='email'
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => setEmail(validEmail.test(e.target.value))}
            >

            </input>{RexgeValid(upemail)}
          </li>


          <li className="loginli">
            <img src="./images/idnumber.png" className="loginicon" />
            <p>身分證字號</p>
            <input
              placeholder="請輸入身分證字號"
              name='id'
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => setId(validId(e.target.value))}
            >

            </input>{RexgeValid(upid)}
          </li>


          <li className="loginli">
            <img src="./images/icon-6.png" className="loginicon" />
            <p>地址</p>
            <input
              type="text"
              value="臺中市"
              id="cleaning-city" />


            <select
              name="rural"
              id="userAddress"
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => setRural(e.target.value)}
            >
              {adreessDist.map((item, index) => {
                return (
                  <option value={item.value} key={index} >
                    {item.dist}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              placeholder="請輸入詳細地址"
              id="detail-address"
              required
              name='address'
              autoComplete="off" onInput={formDataChange}
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>


          <li className="loginli">
            <img src="./images/password.png" className="loginicon" />
            <p>密碼</p>
            <input
              type='password'
              placeholder="請輸入密碼"
              name='password'
              autoComplete="off" required onInput={formDataChange}
              onChange={(e) => setPassword(validPassWord.test(e.target.value))}
            >
            </input>{RexgeValid(uppassword)}
          </li>



        </ul>

        <button className="signupbtn">註冊</button>
      </form>


    </div >
  );
};

export default SignUp;

