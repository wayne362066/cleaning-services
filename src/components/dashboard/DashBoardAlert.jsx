import React from 'react';

const DashBoardAlert = ({ message, onClose }) => {
  return (
    <div className='DashBoardAlert-shell'>
      <div className="DashBoardAlert orderTbody">
        {message==="success"?<p className='text-success fs-6'><i className="bi bi-check-circle">註冊成功</i></p>:<p className='text-danger fs-6'><i className="bi bi-x-circle">註冊失敗</i></p>}
        <button className='orderBtn' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DashBoardAlert;
