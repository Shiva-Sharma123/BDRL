import React from "react";

const PaymentManagement = () => {
  return (
    <>
      <div className="Report_butt2">
        <button className="report_butt">Client User</button>
        <button className="report_butt">Vendor User</button>
      </div>
      <div className="payment_input">
        <input type="text" placeholder="Clients ID" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <hr />
      <div className="payment_img">
        <div>
          <img src="/images/image6.png" alt="img" width={"100px"}></img>
        </div>
        <div className="payment_data">
          <div>Company Name <span className="payfont">NXY Company</span></div> 
          <div>Client Name <span className="payfont">leslie Alexander</span></div>
          <div>Company Status <span className="payfont1">P-PROPERIETOR</span> </div>
          <div>Comany Address 1901 Thomridge Cir.Shiloh Hawaii 81063</div>
           <div>Contact No 12345690</div>
          <div> Staff Contact No 908765432 </div>
          <div>Email NXY@gmail.com</div>
        </div>
      </div>
      <div className="content_inputA">
        <div className="content_input1">
          Client Tender
          <input type="text" placeholder="" />
        </div>
        <div className="content_input1">
          Balance Payment
          <input type="text" placeholder="" />
        </div>
        <div className="content_input1">
          Total Payment
          <input type="text" placeholder="" />
        </div>
      </div>
      <div className="content_inputB">
        <div className="content_input2a">
          Payment Mode
          <select>
            <option value=""></option>
          <option value="option1">Cash</option>
            <option value="option2">Card</option>
            <option value="option3">Check</option>
          </select>
        </div>
        <div className="content_input2">
          Remaining Payment
          <input type="text" placeholder="" />
        </div>
        <div className="content_input2">
          Advace Payment
          <input type="text" placeholder="" />
        </div>
      </div>
      <div className="payment_button">
        <button className="paybutt1">Save</button>
        <button className="paybutt2">Cancel</button>
      </div>
    </>
  );
};

export default PaymentManagement;
