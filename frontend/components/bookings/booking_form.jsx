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

  setDateRange() {
    let listingDates = []

    this.props.listing.bookings.forEach(booking => {
      listingDates.push([booking.check_in, booking.check_out])
    })
    
    // console.log(listingDates)

    let that = this;
    listingDates.forEach((range) => {
      let start = new Date(range[0].split("-").join("/"));
      let end = new Date(range[1].split("-").join("/"));
      let diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);

      for (let i = 0; i <= diff; i++) {
        let temp = `${start.getFullYear()}/${start.getMonth() + 1}/${
          start.getDate() + 1
        }`;
        that.dateRange.push(start);
        start = new Date(temp);
      }
    });
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then((res) => this.props.history.push(`/bookings/${res.booking.id}`));
  }

  setTotalPrice() {
    let { check_in, check_out } = this.state;
    let { clean_fee, service_fee, price } = this.props.listing;
    let difference =
      (check_out.getTime() - check_in.getTime()) / (1000 * 3600 * 24);
    let total = difference * price + (clean_fee + service_fee);
    this.setState({
      ["total_price"]: ((total * .039) + total).toFixed(2)  
    });
  }

  handleDate(e) {
    let { startDate, endDate } = e.selection;
    this.setState({ ["check_in"]: startDate, ["check_out"]: endDate }, () =>
      this.setTotalPrice()
    );
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    if (!this.props.booking) {
      return null;
    }

    let selectionRange;

    if (this.state.check_in === "") {
      selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.check_in !== "" && this.state.check_out === "") {
      selectionRange = {
        startDate: this.state.check_in,
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.check_out !== "") {
      selectionRange = {
        startDate: this.state.check_in,
        endDate: this.state.check_out,
        key: "selection",
      };
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
            direction="vertical"
            showDateDisplay={false}
            showMonthAndYearPickers={true}
            minDate={new Date()}
            disabledDates={this.dateRange}
            rangeColor={["#ff5a91"]}
          />
        </div>
      </div>
    );
  }
}

export default BookingForm;