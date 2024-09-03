import React from "react";

const BidReview = () => {
  return (
    <>
      <div className="main_Bid">
        <div className="Bid_Review">
        <div className="BidReview_input1">
          <h3>Logistics_tender</h3>
          <select>
            <option value="">Select tender name</option>
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
          <div className="BIDOR">
            <span>|</span>
            <span>or</span>
            <span>|</span>
          </div>
          <div className="BidReview_input2">
            <h3>User Search by Tender name, instead</h3>
            <div className="input-with-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div>
        <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default BidReview;
