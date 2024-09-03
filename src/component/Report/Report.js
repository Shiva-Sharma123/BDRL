import React from "react";

const Report = () => {
  return (
    <div class="Report">
      <div className="Filters">
        <span>Filters:</span>
        <button className="main_butt">This Month</button>
        <button className="main_butt">This Week</button>
        <input type="date" placeholder="Select Date" id="select_date" />
        <div class="dropdown1">
          <select>
            <option value="">Select Branch Officer</option>
            <option value="option1">Delhi to Banglore</option>
            <option value="option2">Delhi to UP</option>
            <option value="option3">Delhi to Kolkata</option>
            <option value="option3">Delhi to Mumbai</option>
            <option value="option3">Delhi to Gujarat</option>
            <option value="option3">Delhi to UP</option>
            <option value="option3">Delhi to Banglore</option>
            <option value="option3">Delhi to Kolkata</option>
            <option value="option3">Delhi to Mumbai</option>
            <option value="option3">Delhi to Mumbai</option>
            <option value="option3">Delhi to UP</option>
            <option value="option3">Delhi to Kolkata</option>
          </select>
        </div>
      </div>

      <div className="Filters Filters1">
        <span>Metrices:</span>
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
      <div>
        <hr />

        <div className="Main_reportloader">
          <div className="main_report">
            <div className="Report_loader"></div>
            <div className="graph_loader">
              <div className="color_report">
                <div className="color1"></div>
                <div>Total Revenue</div>
              </div>
              <div className="Report_Rupees">
                <i class="fa-solid fa-indian-rupee-sign"></i>12,20,000
              </div>
            </div>
            <div className="graph_loader">
              <div className="color_report">
                <div className="color2"></div>
                <div>Cost</div>
              </div>
              <div className="Report_Rupees">
                <i class="fa-solid fa-indian-rupee-sign"></i>2,20,000
              </div>
            </div>
            <div className="graph_loader">
              <div className="color_report">
                <div className="color3"></div>
                <div>Profit</div>
              </div>
              <div className="Report_Rupees">
                <i class="fa-solid fa-indian-rupee-sign"></i>4,20,000
              </div>
            </div>
          </div>
          <div class="container1">
            <div class="line"></div>
          </div>
          <div className="main_report">
            <div className="Report_loader"></div>
            <div className="graph_loader">
              <div className="color_report">
                <div>Total Revenue</div>
              </div>
              <div>15%</div>
            </div>
          </div>
          <div class="container1">
            <div class="line"></div>
          </div>
          <div className="main_report">
            <div className="Report_loader"></div>
            <div className="color1"></div>
            <div className="graph_loader">
              <div className="color_report">
                <div>Pending Payments</div>
              </div>
              <div>
                <i class="fa-solid fa-indian-rupee-sign"></i>12,20,000
              </div>
            </div>
          </div>
        </div>

        <div class="table1">
          <div className="report_heading">
            <h4>Transaction History</h4>
            <input type="text" placeholder="Search" className="navbar_input" />
          </div>
          <table class="content_table">
            <tr>
              <th>S.No</th>
              <th>Report Name</th>
              <th>Actions </th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Pick-up & Drop-off Location Master file</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Vendor Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Material Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Employee Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Desiel & Advance Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Comission Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Client Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Branch Master File</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Pick-up & Drop-off Location Master file</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>10.</td>
              <td>Pick-up & Drop-off Location Master file</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
            <tr>
              <td>11.</td>
              <td>Pick-up & Drop-off Location Master file</td>
              <td>
                <div className="table2_fullbtn">
                  {" "}
                  <button>
                    Download <i class="fa-solid fa-download"></i>
                  </button>{" "}
                  <button className="table2_Button">
                    View<i class="fa-regular fa-eye"></i>
                  </button>{" "}
                </div>{" "}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
