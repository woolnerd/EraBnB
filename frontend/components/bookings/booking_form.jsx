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
      hideCalendar: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  dateCheck() {
    // debugger
    return (
      Date.parse(this.state.booking.check_out.toISOString().slice(0, 10)) >
      Date.parse(this.state.booking.check_in.toISOString().slice(0, 10))
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.dateCheck()) {
      this.props
        .action(this.state.booking)
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
    booking['check_in'] = start;
    booking['check_out'] = end;
    this.setState({ booking });
  }

  toggleCalendar() {
    this.state.hideCalendar
      ? this.setState({ hideCalendar: false })
      : this.setState({ hideCalendar: true });
  }

  componentDidUpdate() {}

  render() {
    if (!this.props.booking) {
      return null;
    }
    let bookedDates = this.props.listing.booked_dates.map((date) =>
      parseISO(date)
    );

    const stringCheckIn = this.state.booking.check_in
      .toLocaleString()
      .split("/")
      .slice(0, 2)
      .join("/");

    const stringCheckOut = this.state.booking.check_out
      .toLocaleString()
      .split("/")
      .slice(0, 2)
      .join("/");

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
          calcTotal={() => this.calcTotal()}
          toggleCalendar={() => this.toggleCalendar()}
          hideCalendar={this.state.hideCalendar}
          update={(start, end) => this.update(start, end)}
        />
      </>
    );
  }
}

export default BookingForm;