import React from "react";

const Home = () => {
  return (
    <>
      <div className="Home_card">
        <div className="Home_content">
          <div className="line">Total Revenue</div>
          <div className="line2">
            <i className="fa-solid fa-indian-rupee-sign"></i>12,20,000
          </div>
          <div className="line">By Year 2023-24</div>
        </div>
        <div className="Home_content">
          <div className="line">Total Bids</div>
          <div className="line2 line_2">
            <span> 10,000</span> <h4>Bids</h4>
          </div>
          <div className="line">By Year 2023-24</div>
        </div>
        <div className="Home_content">
          <div className="line">Total Transit orders</div>
          <div className="line2 line_2">
            <span> 1000</span>
            <h4>Orders</h4>
          </div>
          <div className="line">By Year 2023-24</div>
        </div>
        <div className="Home_content">
          <div className="line">Total Id Creation</div>
          <div className="line2 line_2">
            <span> 100</span> <h4>Users</h4>
          </div>
          <div className="line">By Year 2023-24</div>
        </div>
      </div>

      <div className="Graph-Loader">
        <div className="graph">
          <img src="/images/graphimg.jpg" alt="Graph Image" />
        </div>
        <div className="Loader-Tag">
          <div className="graph1">
            <div className="graph1_tag graph1_tag1">Active Shipments</div>
            <div className="loading-indicator graph1_tag graph11_tag"></div>
            <div className="graph1_tag">
              <div className="graph_tag2">
                <div className="graph_tag21">
                  <div className="color1"></div>
                  <p>On-Time:40%</p>
                </div>
                <div className="graph_tag21">
                  <div className="color2"></div>
                  <p>Running-Late:8%</p>
                </div>
              </div>
              <div className="graph_tag2">
                <div className="graph_tag21">
                  <div className="color3"></div>
                  <p>In-Transit:35%</p>
                </div>
                <div className="graph_tag21">
                  <div className="color4"></div>
                  <p>Running Ahead:9%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home_card2">
            <div className="Home_content2">
              <div className="line">
                <h3>1,20,000</h3>
              </div>
              <div className="line2">
                <h5>Pending Payments</h5>
              </div>
              <div className="Home_line3">
                <div className="line3">In Months</div>
                <div className="Home_span">
                  Vendor:<span>4</span>
                </div>
              </div>
            </div>
            <div className="Home_content2">
              <div className="line">
                <h3>135</h3>
              </div>
              <div className="line2">
                <h3>New Onboard</h3>
              </div>
              <div className="Home_line3">
                <div className="line3">In Number</div>
                <div className="Home_span">
                  Trending:<span>N/A</span>
                </div>
              </div>
            </div>
            <div className="Home_content2">
              <div className="line">
                <h3>48</h3>
              </div>
              <div className="line2">
                <h3>On Time Delivery</h3>
              </div>
              <div className="Home_line3">
                <div className="line3">
                  OTP/Total:<span>0.00%</span>
                </div>
                <div className="Home_span">
                  Trending:<span>N/A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Tag-Table">
        <div className="home_card22">
          <div className="Home_content2">
            <div className="line">
              <h3>1,20,000</h3>
            </div>
            <div className="line2">
              <h4>Pending Payments</h4>
            </div>
            <div className="Home_line3">
              <div className="line3">In Months</div>
              <div className="Home_span">
                Vendor:<span>4</span>
              </div>
            </div>
          </div>
          <div className="Home_content2">
            <div className="line">
              <h3>135</h3>
            </div>
            <div className="line2">
              <h4>New Onboard</h4>
            </div>
            <div className="Home_line3">
              <div className="line3">In Number</div>
              <div className="Home_span">
                Trending:<span>N/A</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title1">Shipments by states</h3>
          <div class="card-content1">
            <div className="progress_load">
              <p>Delhi</p>
              <p class="progress-label">10%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="card-content1">
            <div className="progress_load">
              <p>Punjab</p>
              <p class="progress-label">13%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="card-content1">
            <div className="progress_load">
              <p>J&K</p>
              <p class="progress-label">14%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="card-content1">
            <div className="progress_load">
              <p>Haryana</p>
              <p class="progress-label">33%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="card-content1">
            <div className="progress_load">
              <p>U.P</p>
              <p class="progress-label">62%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
          <div class="card-content1">
            <div className="progress_load">
              <p></p>
              <p class="progress-label">44%</p>
            </div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
          </div>
        </div>

        <div className="table1 table15">
          <h4>Transaction History</h4>
          <table className="content_table overview_table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Vendor Id</th>
                <th>Vendor Name</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tr>
              <td>1.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>#12345</td>
              <td>Jacob Jones</td>
              <td>#123SADCHVB</td>
              <td>12/4/17</td>
              <td>10,000</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
