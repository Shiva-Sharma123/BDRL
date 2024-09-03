import React from "react";

const UserCreation = () => {
  return (
    <>
      <div className="Report">
        <div className="Filters">
          <span>Filters:</span>
          <button className="main_butt">This Month</button>
          <button className="main_butt">This Week</button>
          <input type="date" placeholder="Select Date" id="select_date" />
        </div>
        <div className="Filters Filters1">
          <span>Metrics:</span>
          <button className="main_butt">Revenue</button>
          <button className="main_butt">Vendors Details</button>
          <button className="main_butt">Employee Master</button>
          <button className="main_butt">Pick-up & Drop-off location master</button>
        </div>
        <div className="Report_Button">
          <button className="Report_Butt">Create Report</button>
          <button className="main_butt1">Cancel</button>
        </div>
        <hr />
      </div>
      <div className="Usercreation_butt1">
          <button className="report_butt">Client User</button>
          <button className="report_butt">Vendor User</button>
        </div>
      <div className="UserCreation_input">
        <div className="input-with-icon">
          <i class="fa-solid fa-plus"></i>
          <input type="text" placeholder="Create New Vendor" />
        </div>
      </div>

      <div className="UserCreation_table1">
        <table className="content_table">
          <tr>
            <th>Series</th>
            <th>vendor Name</th>
            <th>Company Name</th>
            <th>Contact No.</th>
            <th>Email id</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          {/* <div className="UserCreation_Button">
            <button className="UserCreation_Button1">
              <i class="fa-regular fa-eye"></i> View
            </button>{" "}
            <button className="UserCreation_Button1">
              <i class="fa-solid fa-check"></i> Approve
            </button>{" "}
            <button className="UserCreation_Button1">
              <i class="fa-solid fa-ban"></i> Deny
            </button>{" "}
          </div> */}
          <tr>
            <td>2.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>Leslie Alexander</td>
            <td>SD Logistics co.</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>Leslie Alexander</td>
            <td>ASDF Company</td>
            <td>9087654321</td>
            <td>PXY@gmail.com</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default UserCreation;
