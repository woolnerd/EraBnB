import React from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { findSelectionRange } from '../../util/selectors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.booking;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  
  handleSubmit(e) { 
    e.preventDefault();
    this.props
      .action(this.state)
      .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
  }

  calcTotal() {
    const { clean_fee, service_fee, price } = this.props.listing;
    const { check_in, check_out } = this.state;
    const diff =
      (check_out.getTime() - check_in.getTime()) / (24000 * 3600);
    const total = diff * price + (clean_fee + service_fee);
    this.setState({
      ["total_price"]: ((total * .039) + total).toFixed(2)  
    });
  }

  handleDate(e) {
    let { startDate, endDate } = e.selection;
    this.setState({ ["check_in"]: startDate, ["check_out"]: endDate }, () =>
      this.calcTotal()
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    if (!this.props.booking) {
      return null;
    }

    let selectionRange = findSelectionRange(this.state.check_in, this.state.check_out)

    return (
      <div className="booking-form-container">
        <h3>Want to Book it?</h3>
        <p>Number of Guests: {this.state.guests}</p>
        <p>Price per night: {this.props.listing.price}</p>
        <p>Cleaning fee: {this.props.listing.clean_fee}</p>
        <p>Service fee: {this.props.listing.service_fee}</p>
        <p>Total: {this.state.total_price}</p>
        <form onSubmit={this.handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Guests"
            value={this.state.guests}
            onChange={this.update("guests")}
          />

          <input
            type="text"
            placeholder="Total Price"
            value={this.state.total_price}
            onChange={this.update("total_price")}
          />
          <button className="session-submit">Book it</button>
        </form>
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