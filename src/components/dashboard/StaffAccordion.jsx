import "./dashboard.css";

function StaffAccordion({ staffListData, active, onClick }) {
  const {
    ornumber,
    employeeid,
    efficiency, //效率
    clean, //整潔
    careful, //細心
    manner, //態度
    reply, //留言
    orphone,
    oremail,
    orcity,
    orrural,
    oraddress,
    uid,
    orname,
    money,
    pay,
    ordertime,
    orderdone,
    state,
    note//備註
  } = staffListData;

  // 判斷訂單狀態
  const handleOrderStatus = (state) => {
    if (state === "0") {
      return "新訂單";
    } else if (state === "1") {
      return "未完成";
    }
    return "已完成";
  };

  // 時間格式化
  const ordt = new Date(ordertime).toLocaleString()
  const ordd = new Date(orderdone).toLocaleString()

  return (
    <div
      className={`staff-accordion ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="staff-header">
        {ornumber}_{orname}_{orcity}
        {orrural}
        {oraddress}_{money}元_{ordt}
      </div>
      {active && (
        <div className="staff-content">
          <ol>
            <li>員工編號:{employeeid}</li>
            <li>訂單編號:{ornumber}</li>
            <li>會員手機:{orphone}</li>
            <li>訂單金額:{money}</li>
            <li>付款方式:{pay ? "信用卡" : "其他"}</li>
            <li>會員信箱:{oremail}</li>
            <li>訂單狀態:{handleOrderStatus(state)}</li>
            <li>
              訂單會員:{uid}.{orname}
            </li>
            <li>
              服務地址:{orcity}
              {orrural}
              {oraddress}
            </li>
          </ol>
          <ol>
            <li>
              效率:{efficiency}
              <img
                src="/images/staffInfo-star.png"
                alt="start"
                style={{ clipPath: `inset(0 ${100 - efficiency * 20}% 0 0)` }}
              />
            </li>
            <li>
              清潔:{clean}
              <img
                src="/images/staffInfo-star.png"
                alt="start"
                style={{ clipPath: `inset(0 ${100 - clean * 20}% 0 0)` }}
              />
            </li>
            <li>
              細心:{careful}
              <img
                src="/images/staffInfo-star.png"
                alt="start"
                style={{ clipPath: `inset(0 ${100 - careful * 20}% 0 0)` }}
              />
            </li>
            <li>
              態度:{manner}
              <img
                src="/images/staffInfo-star.png"
                alt="start"
                style={{ clipPath: `inset(0 ${100 - manner * 20}% 0 0)` }}
              />
            </li>
            <li>訂單日期:{ordt}</li>
            <li>完成時間:{ordd}</li>
          </ol>
          <h3>評論:{reply}</h3>
        </div>
      )}
    </div>
  );
}

export default StaffAccordion;
