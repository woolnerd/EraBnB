import React from "react";
import { parseISO, differenceInCalendarDays } from "date-fns";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { getAvgRating } from "../listings/listing_index_item"; 
import CalendarDropDown from './calendar_dropdown'
import { AiFillStar } from "react-icons/ai";
import {BsFillExclamationCircleFill} from "react-icons/bs";


class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: this.props.booking,
      showError: false,
      hideCalendar: true,
      currentUser: this.props.currentUser,
      errors: this.props.errors
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
    if (!this.props.currentUser) {
      this.props.login();
    }
        this.props
          .createBooking(this.state.booking)
          .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
        this.props.clearErrors();

  }

  calcTotal() {
    const { clean_fee, service_fee, price } = this.props.listing;
    const { check_in, check_out } = this.state.booking;
    const diff = (check_out.getTime() - check_in.getTime()) / (24000 * 3600);
    const total = diff * price + (clean_fee + service_fee);
    const booking = { ...this.state.booking };
    booking["total_price"] = ((total * 0.039 + total)* 0.1 * 10).toFixed(2) ;
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

  updateGuests(e) {
    const booking = { ...this.state.booking };
    booking["guests"] = e.target.value;
    this.setState({ booking });
  }

  toggleCalendar() {
    this.state.hideCalendar
      ? this.setState({ hideCalendar: false }, this.props.enlargeBookingForm())
      : this.setState({ hideCalendar: true }, this.props.enlargeBookingForm());
  }

  clearDates() {
    const booking = { ...this.state.booking };
    booking["check_in"] = "";
    booking["check_out"] = "";
    this.setState({ booking });
  }

  handleErrors() {
    if (
      this.state.booking.check_out !== "" &&
      this.state.booking.check_in !== "" &&
      this.state.booking.check_in !== this.state.booking.check_out
    ) {
      this.setState({ errors: [] });
    } else {
      const errors = this.state.errors.slice()
      if (!errors.includes("Please enter valid dates")) {
        errors.push("Please enter valid dates");
        this.setState({errors})
      }
    }
  }

  renderErrors() {
    return this.state.errors.length ? (
      <div key={`booking-error-${Math.random()}`}className="error-container">
        <ul key={`booking-error-${Math.random()}`}className="form-errors">
          {this.state.errors.map((error, i) => (
              <div key={`booking-error-${i}`} className="error-item">
                <BsFillExclamationCircleFill className="exclamation" />
                <li>{error}</li>
              </div>
          ))}
        </ul>
      </div>
    ) : null;
  }

  checkAvail() {
    if (
      this.state.booking.check_out !== "" &&
      this.state.booking.check_in !== "" &&
      this.state.booking.check_in !== this.state.booking.check_out &&
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
      const guestCharge = 50 * this.state.booking.guests;
      const total =
        guestCharge + rate * nights + cleanFee + Number((rate * 0.085).toFixed(2)) + servFee;
      const taxesFees = Number((rate * 0.085).toFixed(2));
        //Dollar signs are not for string interpolation, but to be rendered as prices
      return (
        <div className="reserve">
          <div>
            <h4>
              ${rate} x {nights} nights
            </h4>
            <h4>{rate * nights}</h4>
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
      )
    }
  }

  componentDidUpdate() {
    if (this.state.booking.booker_id !== this.props.currentUser) {
      const booking = {...this.state.booking}
      booking.booker_id = this.props.currentUser
      this.setState({booking})
      this.props.clearErrors();
    }

    if (this.state.errors !== this.props.errors) {
      this.setState({errors: this.props.errors})
    }


  }

  render() {
    if (!this.props.booking) {
      return null;
    }
    let bookedDates = this.props.listing.booked_dates ?  
      this.props.listing.booked_dates.map((date) =>
      parseISO(date)) : [];
    

    const stringCheckIn = this.state.booking.check_in
      .toLocaleString()
      .split(",")[0];

    const stringCheckOut = this.state.booking.check_out
      .toLocaleString()
      .split(",")[0];

    const rate = this.props.listing.price;
    const avgReview = this.props.listing.reviews.length
      ? getAvgRating(this.props.listing.reviews)
      : 0;
      
    return (
      <>
        <div className="booking-form-container" >
          <div className="bk-rate-review-cont">
            <div className="bk-rate-review">
              <span>
                <p>
                  <span id="room-price">${rate}</span>/ night
                </p>
              </span>
              <span className="review-bk-span">
                <AiFillStar className="review-star" />
                <p>
                  {avgReview}{" "}
                  <span>({this.props.listing.reviews.length} reviews)</span>
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
                      <p id="bk-form-input-check-in">CHECK-IN</p>
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
                    <p id="bk-form-input-check-out">CHECK-OUT</p>
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
                  <p id="bk-form-input-guests">GUESTS</p>
                  <h4>{this.state.booking.guests || 2} {this.state.booking.guests === 1 ? "guests" : "guest"}</h4>
                </div>
                <div className="guest-ctrls-cont">
                  <div className="guest-ctrls">
                    <input
                      type="number"
                      max="10"
                      min="1"
                      onChange={(e) => this.updateGuests(e)}
                      value={this.state.booking.guests}
                      placeholder="2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.renderErrors()}
          {this.props.currentUser === this.props.listing.host_id ? 
          <div className="btn-cont">
           <button id="unavailable">Cannot book own listing</button>
          </div> :
          <div className="btn-cont">
            {this.state.booking.check_in !== "" &&
            this.state.booking.check_out !== "" &&
            this.state.booking.check_in !== this.state.booking.check_out &&
            !this.props.errors.length
            ? (
              <button onClick={() => this.handleSubmit()}>Reserve</button>
            ) : (
              <button onClick={() => this.handleSubmit()}>
                Check availability
              </button>
            )}
          </div>
        }
        </div>
        <CalendarDropDown
          bookedDates={bookedDates}
          booking={this.state.booking}
          calcTotal={() => this.calcTotal()}
          toggleCalendar={() => this.toggleCalendar()}
          hideCalendar={this.state.hideCalendar}
          update={(start, end) => this.update(start, end)}
          clearDates={() => this.clearDates()}
          handleErrors={() => this.handleErrors()}
        />
        {this.checkAvail()}
      </>
    );
  }
}

export default BookingForm;