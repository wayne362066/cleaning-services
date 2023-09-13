import "./order.css";
import data from "./orderStafffake.json";

function ContactCard() {
  const orderStaff = data[0];

  return (
    <div>
      <table className="contact-table">
        <tr>
          <td>
            <img src={orderStaff.img} alt="" className="contact-image" />
          </td>
          <td>
            <p>聯絡負責人：{orderStaff.orderStaff}</p>
            <p>聯絡電話：{orderStaff.staffPhone}</p>
            <p>聯絡信箱：{orderStaff.staffEmail}</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ContactCard;
