import React from "react";


class BookingForm extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = this.props.booking
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e){
        e.preventDefault()
        this.props.action(this.state).then(his.props.history.push(`/listing/${listingId}`))
    }

    update(field){
        return e => (
            this.setState({[field]: e.target.value})
        )
    }

    render() {
        // debugger
        return (
          <div className="booking-form-container">
            <form onSubmit={this.handleSubmit} className="login-form">
              <input
                type="text"
                placeholder="Guests"
                value={this.state.guests}
                onChange={this.update("guests")}
              />
              <input
                type="date"
                value={this.state.check_in}
                onChange={this.update("check_in")}
              />
              <input
                type="date"
                value={this.state.check_out}
                onChange={this.update("check_out")}
              />
              <input
                type="text"
                placeholder="Total Price"
                value={this.state.total_price}
                onChange={this.update('total_price')}
              />
              <button className="session-submit">Book it</button>
            </form>
          </div>
        );
    }
}

export default BookingForm;