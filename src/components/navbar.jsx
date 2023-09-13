import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import axios from './login/axios';

const LOGOUT_URL = '/logout';

class navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }


    componentDidMount() {
        // 檢查是否存在名為 "isLoggedIn" 的 cookie
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith("isLoggedIn="));

        // 如果找到 "isLoggedIn" 的 cookie，將登入狀態設置為 true
        if (cookieValue) {
            this.setState({ isLoggedIn: true });
        }
    }


    handleLogout = () => {
        // 在此處執行登出邏輯，並設定 isLoggedIn 狀態為 false
        var cofirmed = window.confirm("確定登出嗎?");
        if (cofirmed == true) {
            document.cookie = 'isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            this.setState({ isLoggedIn: false });

            // 由後端自動產生的cookie名稱connect.sid 

            axios.get(LOGOUT_URL, {}, {
                headers: {
                    'Clear-Cookie': "connect.sid",
                },
            }).then(response => {

            }).catch(error => {

            })
        }







    };





    styles = {

        height: "6em",
    };

    btn = {
        backgroundColor: "#ffc107",
        color: "#664D03",



    };
    atagstyle = {
        color: "#664D03"
    };




    render() {
        // const { isLoggedIn } = this.state;
        return (
            <div>
                {/* 導覽列 */}
                <div className='container  d-md-none d-none d-lg-block '>
                    <nav style={this.styles} className='d-flex'>
                        {/* logo */}
                        <Navbar.Brand href="/"><img src='/images/logo.png' style={{ width: "10em", height: "6em" }} alt="" className='img-fluid' /></Navbar.Brand>
                        <div className='ms-auto d-flex align-items-center' >
                            <Link to="/about" style={this.atagstyle} className=' mx-3  text-decoration-none '>關於我們</Link>
                            <Link to="/service" style={this.atagstyle} className=' mx-3 text-decoration-none'>服務項目</Link>
                            <Link to="/case" style={this.atagstyle} className='mx-3   text-decoration-none'>案例分享</Link>
                            <Link to="/question" style={this.atagstyle} className='mx-3   text-decoration-none'>常見問題</Link>
                            <a href=""> <img src="images/info.png" alt=""
                                className='m-3'
                                style={{ width: "2rem" }} /></a>


                            {this.state.isLoggedIn ? (<button className=' px-4 mx-3 btn' style={this.btn} onClick={this.handleLogout}>
                                登出
                            </button>) : (<button className=' px-4 mx-3 btn' style={this.btn} >
                                <Link to="/loginpage" style={this.atagstyle} className='  text-decoration-none'>
                                    登入
                                </Link>
                            </button>)}


                        </div>
                    </nav >
                </div>
                {/* ///////////////////////// */}
                {/* RWD Navbar */}
                <div className=' container d-md-block  d-lg-none   '>

                    <Navbar expand="lg">
                        <Navbar.Brand href="/"><img src='/images/logo.png' style={{ width: "8em", height: "5em" }} alt="" className='img-fluid' /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarCollapse" />
                        <Navbar.Collapse id="navbarCollapse">

                            <Nav className="ml-auto">
                                <Nav.Link href="/about" style={this.atagstyle}>關於我們</Nav.Link>
                                <Nav.Link href="/service" style={this.atagstyle}>服務項目</Nav.Link>
                                <Nav.Link href="/case" style={this.atagstyle}>案例分享</Nav.Link>
                                <Nav.Link href="/question" style={this.atagstyle}>常見問題</Nav.Link>



                                {this.state.isLoggedIn ? (<button className=' btn  px-3 me-2' style={this.btn} onClick={this.handleLogout}>
                                    登出
                                </button>) : (<button className=' btn  px-3 me-2' style={this.btn} >
                                    <Link to="/loginpage" style={this.atagstyle} className='mx-3   text-decoration-none'>
                                        登入
                                    </Link>
                                </button>)}


                            </Nav>

                        </Navbar.Collapse>


                    </Navbar>

                </div>









            </div >
        );
    }

}

export default navbar;




