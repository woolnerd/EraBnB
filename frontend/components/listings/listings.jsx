import React  from "react";


class Listings extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchListings();
    }


    render() {
        const { title, desription, price } = this.props.Listings
        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}



export default Listings;