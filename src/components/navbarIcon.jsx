import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class navbar extends Component {
  state = {};

  styles = {
    // backgroundColor: "#ffc107",
    height: "6em",
  };

  btn = {
    backgroundColor: "#ffc107",
    height: "2em",
    color: "#664D03",
  };
  atagstyle = {
    color: "#664D03",
  };

  render() {
    return (
      <div>
        {/* 導覽列 */}
        <div className="container d-md-none d-none d-lg-block ">
          <nav style={this.styles} className="d-flex">
            {/* logo */}
            <a href="/#"><img
              src="/images/logo.png"
              style={{ width: "10em", height: "6em" }}
              alt=""
              className="img-fluid"
            /></a>

            <div className="ms-auto d-flex align-items-center">
              <Link to="/about" style={this.atagstyle} className=' mx-3  text-decoration-none '>關於我們</Link>
              <Link to="/service" style={this.atagstyle} className=' mx-3 text-decoration-none'>服務項目</Link>
              <Link to="/case" style={this.atagstyle} className='mx-3   text-decoration-none'>案例分享</Link>
              <Link to="/question" style={this.atagstyle} className='mx-3   text-decoration-none'>常見問題</Link>
              {/* icon */}
              <Link to="">
                <img
                  src="images/info.png"
                  alt=""
                  className="m-3"
                  style={{ width: "2rem" }}
                />
              </Link>

              <Link to="" >
                <img src="images/login.png" alt="" style={{ width: "2rem" }} />
              </Link>
            </div>
          </nav>
        </div>

        {/* RWD */}
        <div className=' container d-md-block  d-lg-none   '>
          <Navbar expand="lg" >
            <Navbar.Brand href="/"><img src='/images/logo.png' style={{ width: "8em", height: "5em", marginRight: "0", justifyItems: "start" }} alt="" className='img-fluid' /></Navbar.Brand>
            {/* <Link><img src='/images/logo.png' style={{ width: "5em", height: "3em", marginRight: "0", justifyItems: "start" }} alt="" className='img-fluid' /></Link> */}



            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">


              <Nav className="mx-auto">
                <Nav.Link href="/about" style={this.atagstyle}>關於我們</Nav.Link>
                <Nav.Link href="/service" style={this.atagstyle}>服務項目</Nav.Link>
                <Nav.Link href="/case" style={this.atagstyle}>案例分享</Nav.Link>
                <Nav.Link href="/question" style={this.atagstyle}>常見問題</Nav.Link>
                <Nav.Link href="/question" style={this.atagstyle} >
                  <img
                    src="images/info.png"
                    alt=""
                    className=""
                    style={{ width: "1rem", padding: 0 }}
                  />訂單查詢
                </Nav.Link>

                <Nav.Link href="/question" style={this.atagstyle}>
                  <img src="images/login.png" alt="" style={{ width: "1rem" }} />
                  會員專區
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>


        </div>




      </div>
    );
  }
}

export default navbar;

// #ffc107
