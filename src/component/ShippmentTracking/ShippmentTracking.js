import React from 'react'

const ShippmentTracking = () => {
  return (
    <>
    <div className="main_Bid">
      <div className="Bid_Review">
      <div className="BidReview_input1">
        <h3>Branch Office</h3>
        <select>
          <option value="">Select Branch Office</option>
          <option value="option1">Delhi </option>
          <option value="option2">UP</option>
          <option value="option3">Kolkata</option>
          <option value="option3">Mumbai</option>
          <option value="option3">Gujarat</option>
          <option value="option3">Bihar</option>
          <option value="option3">Banglore</option>
          <option value="option3">Surat</option>
          <option value="option3">Noida</option>
          <option value="option3">Kerala</option>
          <option value="option3">Chattisgarh</option>
          <option value="option3">Goa</option>
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
  )
}

export default ShippmentTracking