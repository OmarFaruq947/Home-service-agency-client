import React from "react";
import bookingPicPending from '../../../images/booking.png';
import bookingPicDone from '../../../images/calendar.png';

const BookingListInfo = () => {
  return (
   <div>
        <div class="card mb-3" style={{maxWidth:"1000px", maxHeight:'200px'}}>
      <div class="row g-0">
        <div class="col-md-2">
          <img style={{width:'100px',marginLeft:'15px'}} src={bookingPicPending} alt="" />
        </div>
        <div class="col-md-10">
          <div class="card-body">
              <div className="d-flex justify-content-between"> 
              <h5 class="card-title">Office Interior Design</h5>
              <span class="badge bg-danger text-white">Pending</span>
              </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* done */}

    <div class="card mb-3" style={{maxWidth:"1000px", maxHeight:'200px'}}>
    <div class="row g-0">
      <div class="col-md-2">
        <img style={{width:'100px',marginLeft:'15px'}} src={bookingPicDone} alt="" />
      </div>
      <div class="col-md-10">
        <div class="card-body">
            <div className="d-flex justify-content-between"> 
            <h5 class="card-title">Showroom Design</h5>
            <span class="badge bg-info text-white"> Done </span>
            </div>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
   </div>
  );
};

export default BookingListInfo;
