import React from "react";

const UserOverview = () => {
  return (
    <>
      <div class="Report">
        <div className="Filters">
          <span>Filters:</span>
          <button className="main_butt">This Month</button>
          <button className="main_butt">This Week</button>
          <input type="date" placeholder="Select Date" id="select_date" />
        </div>

        <div className="Filters Filters1">
          <span>Filters:</span>
          <button className="main_butt">Revenue</button>
          <button className="main_butt">Vendors Details</button>
          <button className="main_butt">Employee Master</button>
          <button className="main_butt">
            Pick-up & Drop-off location master
          </button>
        </div>

        <div className="Report_Button">
          <button className="Report_Butt">Create Report</button>
          <button className="main_butt1">Cancel</button>
        </div>
        <div className="Report_butt1">
          <button className="report_butt">Client User</button>
          <button className="report_butt">Vendor User</button>
        </div>
        
        <div class="table1 useroverview_table">
          <table class="content_table ">
            <thead>
            <tr>
              <th>S.No</th>
              <th>Client Name</th>
              <th>Company Name </th>
              <th>Company Status</th>
              <th>Client Address</th>
              <th>Contact No.</th>
              <th>Email Id</th>
              <th>Staff Contact No.</th>
              <th>Aadhaar No.</th>
              <th>Aadhaar Photo</th>
              <th>PAN no.</th>
              <th>PAN Photo</th>
              <th>GSTIN No.</th>
              <th>GSTIN Photo</th>
            </tr>
            </thead>
            <tr>
              <td>1.</td>
              <td>Lesile Alexander </td>
              <td>Rhyret Company</td>
              <td>P-properitor</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  width={"100px"}
                  height={"50px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Jenny Willison</td>
              <td>GYJ Company</td>
              <td>C-COMPANY</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  width={"100px"}
                  height={"50px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Darlene Robertsone</td>
              <td>FGHJN Company</td>
              <td>F-FIRM</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Floyd Miles</td>
              <td>NXY Company</td>
              <td>O-OTHER</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Jeorme Bell</td>
              <td>ASDF Company</td>
              <td>F-FIRM</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Arlene McCopy</td>
              <td>DFG Company</td>
              <td>F-FIRM</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Jane Cooper</td>
              <td>CFG Company</td>
              <td>F-FIRM</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Jacobes Jones</td>
              <td>NJKMG Company</td>
              <td>F-FIRM</td>
              <td>8502 Preston Rd.Ingleeewood,Main 98380</td>
              <td>1234567890</td>
              <td>PXY@gmail.com</td>
              <td>9087654321</td>
              <td>FHGH566UY7R</td>
              <td>
                {" "}
                <img
                  src="/images/aadharimg.png"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>4C765EVR7BT8T</td>
              <td>
                {" "}
                <img
                  src="/images/pancardimg.jpg"
                  alt="img"
                  width={"100px"}
                ></img>{" "}
              </td>
              <td>8V76BBTBRV6</td>
              <td>
                {" "}
                <img
                  src="/images/GSTINimg.png"
                  alt="img"
                  height={"50px"}
                  width={"100px"}
                ></img>{" "}
              </td>
            </tr>
          </table>
        </div>
        
      </div>
    </>
  );
};

export default UserOverview;
