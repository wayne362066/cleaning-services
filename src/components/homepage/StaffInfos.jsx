import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StaffInfo from "./StaffInfo";
import "swiper/css";
const staffInfos = () => {
  // 假資料
  const staffDB = [
    {
      name: "林正秉",
      covid: 0,
      star: 4.4,
      number: "A01",
      caseCount: "123",
      levle: "2",
      img: "/images/staffInfo-staff.png",
    },
    {
      name: "林正秉",
      covid: 0,
      star: 2.5,
      number: "A01",
      caseCount: "123",
      levle: "2",
      img: "/images/staffInfo-staff.png",
    },
    {
      name: "林正秉",
      covid: 0,
      star: 4.4,
      number: "A01",
      caseCount: "123",
      levle: "2",
      img: "/images/staffInfo-staff.png",
    },
    {
      name: "林正秉",
      covid: 0,
      star: 4.4,
      number: "A01",
      caseCount: "123",
      levle: "2",
      img: "/images/staffInfo-staff.png",
    },
    {
      name: "林正秉",
      covid: 0,
      star: 4.4,
      number: "A01",
      caseCount: "123",
      levle: "2",
      img: "/images/staffInfo-staff.png",
    },
  ];
  return (
    <div className="container">
      <div className="process-top staffInfo-title">
        <h3 className="title">員工評價 Staff evaluation</h3>
        <img src="images/flower.png" alt="" />
      </div>
      <Swiper
        loop={false}
        // 物件間距
        spaceBetween={0}
        // 顯示個數
        slidesPerView={1}
        freeMode={true}
        // 斷點
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        }}
      >
        {staffDB.map((staffDB) => {
          return (
            <SwiperSlide>
              <StaffInfo
                name={staffDB.name}
                covid={staffDB.covid}
                star={staffDB.star}
                number={staffDB.number}
                caseCount={staffDB.caseCount}
                levle={staffDB.levle}
                img={staffDB.img}
              ></StaffInfo>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default staffInfos;
