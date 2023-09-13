import React from "react";

const Topic = () => {
    return (
        <div className="Topic-team">

            <div className="dr">
                <div className="row">
                    <div className="col-md-3 col-lg-2"> <b>321+</b><br/><p>Happy Customers</p></div>
                    <div className="col-md-3 col-lg-1"><h1>|</h1></div>
                    <div className="col-md-3 col-lg-2"><b>30</b> <br /><p>Team Members</p></div>
                    <div className="col-md-3 col-lg-1"><h1>|</h1></div>
                    <div className="col-3 col-lg-2"><b>8</b><br /><p>Award Winning</p></div>
                    <div className="col-3 col-lg-1"><h1>|</h1></div>
                    <div className="col-3 col-lg-2"><b>100+</b><br /><p>Project Complete</p></div>
                    <div className="col-3 col-lg-1"></div>
                </div>
            </div>

            <div className="reserve container">
                <p>立即了解預約</p>
                心動不如馬上行動，趕快讓浣熊管家陪伴您有個乾淨的家 !
                <br />
                <br />
                <br />
                <a href="/book"><button className="inp">立即預約</button></a>
            </div>
        </div>
    );
};
export default Topic;