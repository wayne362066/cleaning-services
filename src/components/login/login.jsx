import React from "react";
import { useRef, useState, useEffect, useContext } from 'react'
// import AuthContext from './AuthContext';


import axios from './axios'

const LOGIN_URL = '/login';







const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();


    const [email, setUseremail] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [cookielogin, setCookielogin] = useState(Boolean);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                }

            );


            // console.log(JSON.stringify(response?.data))
            // console.log(JSON.stringify(response))

            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;

            // setAuth({ email, password, roles, accessToken });
            setUseremail('');
            setPwd('');
            setSuccess(true);
            // 登入時設定一個cookie用來判斷是否登入狀態
            document.cookie = 'isLoggedIn=true; path=/;'
            // 從後端API抓取登入者資料
            let userInfo = await axios.get("http://localhost:4107/user", {
                withCredentials: true,
            });


            // 判斷登入的人是否為員工,管理員    如果是自動頁面導向管理訂單 不是則導向首頁
            if (userInfo.data.data.user[0].admin == 1) {
                window.location.href = "/dashboard";
            } else if (userInfo.data.data.user[0].admin == 0 || userInfo.data.data.user[0].admin == null) {
                window.location.href = "/";

                
                // } else if (userInfo.data.data.user[0].blacklist == 1) {
                //     alert("對不起我們無法為您服務")



            }


        } catch (err) {
            if (!err?.response) {
                setErrMsg('沒有伺服器服務')
            } else if (err.response?.status === 400) {
                setErrMsg('帳號或密碼錯誤!!!')
            } else if (err.response?.status === 401) {
                setErrMsg("帳號或密碼錯誤!!!")
            } else {
                setErrMsg('登入失敗!!')
            }
            errRef.current.focus();
        }
    }








    return (
        <>
            {success ? (
                <section>
                    <h1>登入成功!!</h1>
                    <br />
                    <p>
                        <a href="/">回首頁</a>
                    </p>
                </section>
            ) : (
                <div className="loginflex">


                    <p ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive">{errMsg}</p>


                    <img src="./images/loginimg.png" className="loginimg" />
                    <form action="" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <ul>
                            <li className="loginli">
                                <img src="./images/nameicon.png" className="loginicon" />
                                <p>帳號</p>
                                <input placeholder="請輸入帳號"
                                    type="text"
                                    ref={userRef}
                                    id="mail"
                                    autoComplete="off"
                                    onChange={(e) => setUseremail(e.target.value)}
                                    value={email}
                                    required></input>
                            </li>
                            <li className="loginli">
                                <img src="./images/password.png" className="loginicon" />
                                <p>密碼</p>
                                <input placeholder="請輸入密碼"
                                    type="password"
                                    id="password"
                                    autoComplete="off"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={password}
                                    required></input>
                            </li>
                        </ul>
                        <button className="signupbtn" style={{}} >登入</button>
                    </form>

                </div >

            )}
        </>
    )
}
export default Login;


