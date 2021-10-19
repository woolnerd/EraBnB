import React from "react";
// import { DateRange } from "react-date-range";
import { parseISO } from "date-fns";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import CalendarDropDown from './calendar_dropdown'

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: this.props.booking,
      showError: false,
      showCalendar: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  dateCheck(){
    // debugger
    return (
      Date.parse(this.state.booking.check_out.toISOString().slice(0, 10)) >
      Date.parse(this.state.booking.check_in.toISOString().slice(0, 10))
    )
  }
  
  handleSubmit(e) { 
    e.preventDefault();
    if (this.dateCheck()) {
      this.props
        .action(this.state.booking)
        .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
      this.setState({ showError: false });
    } else {
      this.setState({showError: true })
    }
  }

  calcTotal() {
    const { clean_fee, service_fee, price } = this.props.listing;
    const { check_in, check_out } = this.state.booking;
    const diff =
      (check_out.getTime() - check_in.getTime()) / (24000 * 3600);
    const total = diff * price + (clean_fee + service_fee);
    const booking = {...this.state.booking}
    booking["total_price"] = (total * 0.039 + total).toFixed(2);  
    this.setState({ booking });
  }


  handleDate(e) {
    let { startDate, endDate } = e.selection;
    const booking = { ...this.state.booking };
    booking["check_in"] = startDate;
    booking["check_out"] = endDate;
    this.setState({ booking }, () =>
      this.calcTotal()
    );
  }

  update(field) {
    const booking = {...this.state.booking}
    return (e) => {
      booking[field] = e.target.value 
      this.setState({ booking });
    }
  }

  render() {
    if (!this.props.booking) {
      return null;
    }
    let bookedDates = this.props.listing.booked_dates.map(date=> parseISO(date))
    return (
      <>
        <div className="booking-form-container">
          <div className="bk-rate-review-cont">
            <div className="bk-rate-review">
              <span>
                <p>
                  <span id="room-price">$229</span>/ night
                </p>
              </span>
              <span>
                <p>#</p>
                <p>
                  5.0 <span>(22 reviews)</span>
                </p>
              </span>
            </div>
          </div>
          <div className="guests-dates-cont">
            <div className="bookings-guests-cont">
              <div className="top-container-booking">
                <div className="check-in-cont-border">
                  <div className="checkin-checkout-cont">
                    <div className="check-in-cont">
                      <p id="bk-form-input">CHECK-IN</p>
                      <h4>Add date</h4>
                    </div>
                  </div>
                </div>
                <div className="check-out-cont-border">
                  <div className="check-out-cont">
                    <p id="bk-form-input">CHECK-OUT</p>
                    <h4>Add date</h4>
                  </div>
                </div>
              </div>
              <div className="guests-dropdown">
                <div className="guests-cont">
                  <p id="bk-form-input">GUESTS</p>
                  <h4>1 guest</h4>
                </div>
                <h4>^</h4>
              </div>
            </div>
          </div>
          <div className="btn-cont">
            <button>Check availability</button>
          </div>
        </div>
        <CalendarDropDown 
          bookedDates={bookedDates} 
          booking={this.state.booking}
          calcTotal={this.calcTotal}
          showCalendar={this.state.showCalendar}
        />
      </>
      /* <h3>Want to Book it?</h3>
        <p>Price per night: {this.props.listing.price}</p>
        <p>Cleaning fee: {this.props.listing.clean_fee}</p>
        <p>Service fee: {this.props.listing.service_fee}</p>
        <p>Total: {this.state.booking.total_price}</p>
        <form onSubmit={this.handleSubmit} className="login-form">
          <p>Number of Guests: {this.state.booking.guests}</p>
          <input
            type="number"
            placeholder="1"
            value={this.state.booking.guests}
            onChange={this.update("guests")}
            min="1"
            max="10"
            required
          />
          <button className="session-submit">Book it</button>
        </form>
        <div className="booking-errors">
          <p className={`booking-error ${this.state.showError ? "" : "hide"}`}>
            Please choose a valid check-out day
          </p>
        </div>
        <div>
          <DateRange
            ranges={[selectionRange]}
            onChange={this.handleDate}
            editableDateInputs={true}
            showSelectionPreview={true}
            months={1}
            direction="vertical"
            showDateDisplay={false}
            showMonthAndYearPickers={true}
            minDate={new Date()}
            rangeColor={["#ff5a91"]}
            disabledDates={bookedDates}
          />
        </div> */
    );
  }
}

export default BookingForm;