import React from "react";

const SignUp = () => {
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

  return (
    <div className="loginflex">
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ul>
          <li className="loginli">
            <img src="./images/nameicon.png" className="loginicon" />
            <p>姓名</p>
            <input
              placeholder="請輸入帳號">
            </input>
          </li>


          <li className="loginli">
            <img src="./images/date.png" className="loginicon" />
            <p>生日</p>
            <input
              type="date"
              placeholder="請輸入密碼">

            </input>
          </li>


          <li className="loginli">
            <img src="./images/tet.png" className="loginicon" />
            <p>手機號碼</p>
            <input
              placeholder="請輸入手機號碼">

            </input>
          </li>


          <li className="loginli">
            <img src="./images/icon-4.png" className="loginicon" />
            <p>信箱</p>
            <input
              type="email"
              placeholder="請輸入信箱">

            </input>
          </li>


          <li className="loginli">
            <img src="./images/idnumber.png" className="loginicon" />
            <p>身分證字號</p>
            <input
              placeholder="請輸入身分證字號">

            </input>
          </li>


          <li className="loginli">
            <img src="./images/icon-6.png" className="loginicon" />
            <p>地址</p>
            <input
              type="text"
              value="台中市"
              id="cleaning-city" />


            <select name="cleaningAddress" id="userAddress">
              {adreessDist.map((item, index) => {
                return (
                  <option value={item.v} key={index}>
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
            />
          </li>


          <li className="loginli">
            <img src="./images/password.png" className="loginicon" />
            <p>密碼</p>
            <input
              placeholder="請輸入密碼">
            </input>
          </li>



        </ul>

        <button className="signupbtn">註冊</button>
      </form>


    </div>
  );
};

export default SignUp;

