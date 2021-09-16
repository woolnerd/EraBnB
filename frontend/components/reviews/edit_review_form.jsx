import React from 'react';


class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);


  }

  update(field) {
    console.log(field);
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  render() {

  }
}