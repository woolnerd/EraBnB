import React from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file



class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.booking;

    this.bookingsForCurListing;

    this.dateRange = [];
    this.setDateRange();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

<<<<<<< Updated upstream
=======
  setDateRange() {
    let listingDates = []

    this.props.listing.bookings.forEach(booking => {
      listingDates.push([booking.check_in, booking.check_out])
    })
    
    // console.log(listingDates)

    let that = this;
    listingDates.forEach((range) => {
      let start = new Date(range[0]);
      let end = new Date(range[1]);
      let diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
      for (let i = 0; i <= diff; i++) {
        let temp = `${start.getFullYear()}/${start.getMonth() + 1}/${
          start.getDate() + 1
        }`;
        that.dateRange.push(start);
        start = new Date(temp);
      }
    });
    console.log(this.dateRange)
  }
>>>>>>> Stashed changes

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
<<<<<<< Updated upstream
      .then(this.props.history.push(`/users/${this.state.booker_id}`));
  }

setTotalPrice(){
        let { check_in, check_out, price, clean_fee, service_fee } = this.state
        let difference =
          (check_out.getTime() - check_in.getTime()) /
          (1000 * 3600 * 24);
        this.setState({['total_price']: difference * price * clean_fee * service_fee })
    
    this.state.total_price  }
=======
      .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
  }

  setTotalPrice() {
    let { check_in, check_out } = this.state;
    let { clean_fee, service_fee, price } = this.props.listing;
    let difference =
      (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);
    let total = difference * price + (clean_fee + service_fee);
    this.setState({
      ["total_price"]: total,
    });
  }
>>>>>>> Stashed changes

  handleDate(e) {
    let { startDate, endDate } = e.selection;
    this.setState({ ["check_in"]: startDate, ["check_out"]: endDate }, () =>
      this.setTotalPrice()
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }
<<<<<<< Updated upstream
  render() {
=======

  render() {
    if (!this.props.booking) {
      return null;
    }

    this.setDateRange()
 

>>>>>>> Stashed changes
    let selectionRange;

    if (this.state.check_in === "") {
      selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      };
<<<<<<< Updated upstream
    }
    else if (this.state.check_in !== "" && this.state.check_out === "") {
=======
    } else if (this.state.check_in !== "" && this.state.check_out === "") {
>>>>>>> Stashed changes
      selectionRange = {
        startDate: this.state.check_in,
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.check_out !== ""){
      selectionRange = {
        startDate: this.state.check_in,
        endDate: this.state.check_out,
        key: "selection",
      }
    }

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
            direction="horizontal"
            showDateDisplay={false}
            showMonthAndYearPickers={false}
            minDate={new Date()}
            disabledDates={this.dateRange}
          />
        </div>
      </div>
    );
  }
}

export default BookingForm;