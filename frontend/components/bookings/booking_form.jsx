import React from "react";
// import { DateRange } from "react-date-range";
import { parseISO, differenceInCalendarDays } from "date-fns";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { getAvgRating } from "../listings/listing_index_item"; 
import CalendarDropDown from './calendar_dropdown'

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: this.props.booking,
      showError: false,
      hideCalendar: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  dateCheck() {
    return (
      Date.parse(this.state.booking.check_out.toISOString().slice(0, 10)) >
      Date.parse(this.state.booking.check_in.toISOString().slice(0, 10))
    );
  }

  handleSubmit() {
    if (this.dateCheck()) {
      this.props
        .createBooking(this.state.booking)
        .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
      this.setState({ showError: false });
    } else {
      this.setState({ showError: true });
    }
  }

  calcTotal() {
    const { clean_fee, service_fee, price } = this.props.listing;
    const { check_in, check_out } = this.state.booking;
    const diff = (check_out.getTime() - check_in.getTime()) / (24000 * 3600);
    const total = diff * price + (clean_fee + service_fee);
    const booking = { ...this.state.booking };
    booking["total_price"] = (total * 0.039 + total).toFixed(2);
    this.setState({ booking });
  }

  handleDate(e) {
    let { startDate, endDate } = e.selection;
    const booking = { ...this.state.booking };
    booking["check_in"] = startDate;
    booking["check_out"] = endDate;
    this.setState({ booking }, () => this.calcTotal());
  }

  update(start, end) {
    const booking = { ...this.state.booking };
    booking["check_in"] = start;
    booking["check_out"] = end;
    this.setState({ booking });
  }

  updateGuests(e){
    const booking = {...this.state.booking}
    booking['guests'] = e.target.value
    this.setState({booking})
  }

  toggleCalendar() {
    this.state.hideCalendar
      ? this.setState({ hideCalendar: false })
      : this.setState({ hideCalendar: true });
  }

  clearDates() {
    const booking = { ...this.state.booking };
    booking["check_in"] = "";
    booking["check_out"] = "";
    this.setState({ booking });
  }

  checkAvail(){
    if (this.state.booking.check_out !== "" && 
        this.state.booking.check_in !== "" && 
        this.state.booking.check_in !==
        this.state.booking.check_out &&
        this.state.hideCalendar === true 
        ) {

      const checkin = parseISO(
        this.state.booking.check_in.toISOString().slice(0, 10)
      );
      const checkout = parseISO(
        this.state.booking.check_out.toISOString().slice(0, 10)
      );
      const nights = differenceInCalendarDays(checkout, checkin);
      const rate = this.props.listing.price;
      const cleanFee = this.props.listing.clean_fee;
      const servFee = this.props.listing.service_fee;
      const total =
        rate * nights +
        cleanFee +
        Number((rate * 0.085).toFixed(2)) +
        servFee;
      const taxesFees = Number((rate * 0.085).toFixed(2));
          debugger
          return (
            <div className="reserve">
              <div>
                <h4>
                  ${rate} x {nights} nights
                </h4>
                <h4>${rate * nights}</h4>
              </div>
              <div>
                <h4>Cleaning fee</h4>
                <h4>${cleanFee}</h4>
              </div>
              <div>
                <h4>Occupancy taxes and fees</h4>
                <h4>${Number((servFee + taxesFees).toFixed(2))}</h4>
              </div>
              <div className="total">
                <h3>Total</h3>
                <h3>${total}</h3>
              </div>
            </div>
          );
        }
    
  }

  render() {
    if (!this.props.booking) {
      return null;
    }
    let bookedDates = this.props.listing.booked_dates.map((date) =>
      parseISO(date)
    );

    const stringCheckIn = this.state.booking.check_in
      .toLocaleString()
      .split(",")[0];

    const stringCheckOut = this.state.booking.check_out
      .toLocaleString()
      .split(",")[0];

      const rate = this.props.listing.price;
      const avgReview = getAvgRating(this.props.listing.reviews)
    return (
      <>
        <div className="booking-form-container">
          <div className="bk-rate-review-cont">
            <div className="bk-rate-review">
              <span>
                <p>
                  <span id="room-price">${rate}</span>/ night
                </p>
              </span>
              <span>
                <p>#</p>
                <p>
                  {avgReview} <span>({this.props.listing.reviews.length} reviews)</span>
                </p>
              </span>
            </div>
          </div>
          <div className="guests-dates-cont">
            <div className="bookings-guests-cont">
              <div
                className="top-container-booking"
                onClick={() => this.toggleCalendar()}
              >
                <div className="check-in-cont-border">
                  <div className="checkin-checkout-cont">
                    <div className="check-in-cont">
                      <p id="bk-form-input">CHECK-IN</p>
                      <h4>
                        {this.state.booking.check_in === ""
                          ? "Add date"
                          : stringCheckIn}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="check-out-cont-border">
                  <div className="check-out-cont">
                    <p id="bk-form-input">CHECK-OUT</p>
                    <h4>
                      {this.state.booking.check_out === "" ||
                      this.state.booking.check_out ===
                        this.state.booking.check_in
                        ? "Add date"
                        : stringCheckOut}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="guests-dropdown">
                <div className="guests-cont">
                  <p id="bk-form-input">GUESTS</p>
                  <h4>{this.state.booking.guests} guest</h4>
                </div>
                <div className="guest-ctrls-cont">
                  <div className="guest-ctrls">
                    <input 
                      type="number" 
                      min="1"
                      onChange={(e)=>this.updateGuests(e)}
                      value={this.state.booking.guests}
                    />
                    {/* <div className="minus-guest">
                      <p>-</p>
                    </div>
                    <div className="guest-count">4</div>
                    <div className="add-guest">
                      <p>+</p> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-cont">
            {this.state.booking.check_in !== "" && this.state.booking.check_out !== "" &&
            this.state.booking.check_in !== this.state.booking.check_out 
            ?
              <button onClick={()=>this.handleSubmit()}>Reserve</button> :
              <button>Check availability</button>
            }
          </div>
        </div>
        <CalendarDropDown
          bookedDates={bookedDates}
          booking={this.state.booking}
          calcTotal={() => this.calcTotal()}
          toggleCalendar={() => this.toggleCalendar()}
          hideCalendar={this.state.hideCalendar}
          update={(start, end) => this.update(start, end)}
          clearDates={() => this.clearDates()}
        />
        {this.checkAvail()}
      </>
    );
  }
}

export default BookingForm;