import React from "react";
import { Link } from "react-router-dom";
import { DateRange } from "react-date-range";
import { findSelectionRange } from "../../util/selectors"


class CalendarDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.state = {
      hideCalendar: this.props.hideCalendar,
      booking: this.props.booking
    };
  }

  handleButtonClick = () => {
    this.setState(({ revealDropdown }) => ({
      revealDropdown: !revealDropdown,
    }));
  };

  handleClickOutside = (e) => {
    if (this.menu.current && !this.menu.current.contains(e.target)) {
      this.setState({
        revealDropdown: false,
      });
    }
  };

  handleClose(){
    this.props.handleErrors()
    this.props.toggleCalendar()
  }

  handleDate(e) {
    let { startDate, endDate } = e.selection;
    const booking = { ...this.state.booking };
    booking["check_in"] = startDate;
    booking["check_out"] = endDate;
    this.setState({ booking }
      , () => this.props.calcTotal()
      );
    this.props.update(startDate, endDate);
  }

  clearDates(){
    const booking = {...this.state.booking}
    booking['check_in'] = ""
    booking['check_out'] = ""
    this.setState({booking})
    this.props.clearDates()
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
        let selectionRange = findSelectionRange(
          this.state.booking.check_in,
          this.state.booking.check_out
        );
          const stringCheckIn = this.state.booking.check_in
            .toLocaleString()
            .split(",")[0];
          const stringCheckOut = this.state.booking.check_out
            .toLocaleString()
            .split(",")[0];


    return (
      <div className={`calendar-dropdown ${this.props.hideCalendar ? "hide-cal" : null }`}>
        <div>
          <div className="calender-header">
            <div className="select-date-cont">
              <h3>Select Dates</h3>
              <p>Add your travel dates for exact pricing</p>
            </div>
            <div className="bookings-guests-cont modal">
              <div className="top-container-booking modal">
                <div className="check-in-cont-border modal">
                  <div className="checkin-checkout-cont modal">
                    <div className="check-in-cont modal">
                      <p id="bk-form-input modal">CHECK-IN</p>
                      <h4>
                        {this.state.booking.check_in === ""
                          ? "Add date"
                          : stringCheckIn}
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="check-out-cont-border modal">
                  <div className="check-out-cont modal">
                    <p id="bk-form-input modal">CHECK-OUT</p>
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
            </div>
          </div>
          <DateRange
            ranges={[selectionRange]}
            onChange={(e) => this.handleDate(e)}
            editableDateInputs={true}
            showSelectionPreview={true}
            months={2}
            direction={"horizontal"}
            showDateDisplay={false}
            showMonthAndYearPickers={true}
            minDate={new Date()}
            rangeColor={["#ff5a91"]}
            disabledDates={this.props.bookedDates}
          />
        </div>
        <div className="clear-exit-cont">
          <div className="clear-exit">
            <p onClick={()=>this.clearDates()}>Clear dates</p>
            <button onClick={()=>this.handleClose()}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarDropDown;
