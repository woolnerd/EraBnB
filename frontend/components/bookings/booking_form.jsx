import React from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { findSelectionRange } from '../../util/selectors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: this.props.booking,
      showError: false,
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
    debugger
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
    console.log(this.state.booking.check_in)
    console.log(this.state.booking.check_out);

    let selectionRange = findSelectionRange(this.state.booking.check_in, this.state.booking.check_out)
    return (
      <div className="booking-form-container">
        <h3>Want to Book it?</h3>
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
          <p className={`booking-error ${this.state.showError ? "" : "hide"}`}>Please choose a valid check-out day</p>
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
          />
        </div>
      </div>
    );
  }
}

export default BookingForm;