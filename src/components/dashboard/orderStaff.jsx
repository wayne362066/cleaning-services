import "./order.css";

function ContactCard({staffAPI,evaluateAPI}) {  

const {employeeid,employeename,photo,employeephone,employeeemail}=staffAPI

  return (
    <div style={{backgroundColor: "#FFF8E1"}}>
      <table className="contact-table tbody_def">
        <tbody>
        <tr>
          <td rowSpan={5}>
            <img src={photo} alt="staffImage" className="contact-image" />
          </td>
        </tr>
        <tr>
          <td>浣熊專員：{employeename}</td>
          <td>謹慎細心：</td>
          <td>{evaluateAPI?.careful?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.careful * 20}% 0 0)` }}/>:""}</td>
        </tr>
        <tr>
          <td>浣熊編號：{employeeid}</td>
          <td>清潔程度：</td>
          <td>{evaluateAPI?.clean?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.clean * 20}% 0 0)` }}/>:""}</td>
        </tr>
        <tr>
          <td>聯絡電話：{employeephone}</td>
          <td>清潔效率：</td>
          <td>{evaluateAPI?.efficiency?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.efficiency * 20}% 0 0)` }}/>:""}</td>
        </tr>
        <tr>
          <td>聯絡信箱：{employeeemail}</td>
          <td>服務態度：</td>
          <td>{evaluateAPI?.manner?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.manner * 20}% 0 0)` }}/>:""}</td>
        </tr>
        </tbody>
      </table>
      <table className="tbody_RWD contact-table">
        <thead>
          <tr>
            <td rowSpan={5}>
              <img src={photo} alt="staffImage" className="contact-image" />
              </td>
            <td>浣熊專員：{employeename}</td>
          </tr>
          <tr>
            <td>浣熊編號：{employeeid}</td>
          </tr>
          <tr>
            <td>聯絡電話：{employeephone}</td>
          </tr>
          <tr>
            <td>聯絡信箱：{employeeemail}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>謹慎細心：</td>
            <td>{evaluateAPI?.careful?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.careful * 20}% 0 0)` }}/>:""}</td>
          </tr>
          <tr>
            <td>清潔程度：</td>
            <td>{evaluateAPI?.clean?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.clean * 20}% 0 0)` }}/>:""}</td>
          </tr>
          <tr>
            <td>清潔效率：</td>
            <td>{evaluateAPI?.efficiency?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.efficiency * 20}% 0 0)` }}/>:""}</td>
          </tr>
          <tr>
            <td>服務態度：</td>
            <td>{evaluateAPI?.manner?<img src="/images/staffInfo-star.png" alt="star" style={{ clipPath: `inset(0 ${100 - evaluateAPI.manner * 20}% 0 0)` }}/>:""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactCard;
