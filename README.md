# Erabnb

![splash page](https://media.giphy.com/media/TWa3AO0emUfNRW5ZvF/giphy.gif)

Hello and Welcome to Erabnb! Erabnb is a clone of the website Airbnb that provides
user many of the features they know and love from the original: book/cancel a stay at a hosted home, create your own listing with multiple photos uploaded, create, edit and delete reviews on listings!

![profile page](https://media.giphy.com/media/5T270hOkjbZUtszYEO/giphy.gif)

Our twist is that our listings are grouped by decades from the 50's to the 90's. For all those design and architecture aficionados, here is your chance to time-travel through incredible homes with stunning, period-specific decor. 

Check it out here --> (https://erabnb.herokuapp.com/#/)


## Technologies

Starting with the backend, I used Ruby on Rails along with PostGresQL database and jBuilder DSL to sculpt and limit the json that is sent up to the frontend. On the frontend we have React to deliver the user interface and Redux to manage the state. MapBox's powerful map API was used for marking the locations, as well the as geocoding feature to create those cooridinates. The React-Calendar API, was used for the bookings interface. 

## Outstanding Features

#### UI Defined by Authentication 

Just like the real Airbnb, a user is free to roam the site and view the listings. However, in order to create a listing or book a listing the user must log in or the they will not have access to these features through the UI. Once a user is signed in, they will not see their own listings cluttering up their searches for listings in the same area. When on their own listings page the calendar widget is greyed out and booking is not allowed.

#### User Friendly Profile Page

From the user profile page, a logged in user can find all their listings and trips can be found side by side. From there, they can book a new trip or create a listing. 

#### Map Markers

With the creation of each new listing, a geo-forwarding API captures the address input, and parses the string into longitude and latitude, and adds these coordinates to the backend database. The new listing will then be displayed with pinpoint accuracy on the listings map. 


## Challenges Met 


#### Review CRUD

Managing the state of each review proved to be uncooperative at first. While the updates would hit the database, the latest data was not hitting the UI each and everytime. I solved this by using an old friend setTimeout. By calling setTimeout 50ms after the AJAX methods was called this ensured there would be enough time for the backend to be updated, before the setting the state. 

```js
  handleEditSubmit(e) {
    e.preventDefault();
    if (this.state.review.body !== "") {
        this.props.updateReview(this.state.review)
        .then(setTimeout(() => this.props.fetchListing(this.props.listingId), 50))
        .then(this.setState({ toggleEdit: false}))
    } else {
      this.props.updateReview(this.state.review)
    }
```

#### Search By Booking
It is unuseful to a user to have their search results populated by listings that are not available for the dates they want. With this in mind, I wanted to write a filter that would prevent this situation:

```js
@listings = Listing.all
desired_check_in = Date.parse(params[:query][:check_in])
desired_check_out = Date.parse(params[:query][:check_out])


@listings = 
    @listings.select do |listing|
        booked_ranges = []
        if listing.bookings.length > 0
            listing.bookings.each do |booking|
                date_range = booking.check_in..booking.check_out
                booked_ranges << date_range
            end
        end 
         booked_ranges.all? {|range| !range.include?(desired_check_in)} &&
         booked_ranges.all? {|range| !range.include?(desired_check_out)}
    end

```

#### Map Markers and Search Problem 

One of the problems with using search that I ran into, was that the map markers were aggregating each time a search was called. Mapbox does not have a clear all marker function but there is an individual marker remover method. In order for this to be useful to solve the problem, I had to iterate over the markers during componentDidUpdate. 


```js
 createMarkers(listings){
    listings.forEach((listing) => {
      if (this.props.currentUser !== listing.host_id) {
        let newMarker =
          new mapboxgl.Marker({ color: "#ff385c" })
            .setLngLat([listing.longitude, listing.latitude])
            .addTo(this.map)
            .setPopup(
              new mapboxgl.Popup({ closeOnMove : true, focusAferOpen: false}).setHTML(this.marker(listing))
            )
          this.state.markers.push(newMarker)
      }
    })
  }

  removeMarkers(){
    this.state.markers.forEach(marker=> marker.remove())
  }


  componentDidUpdate() {
    if (this.props.listings != this.state.listings) {
      this.setState({listings: this.props.listings})
    }
    this.removeMarkers();
    this.createMarkers(this.state.listings);

  }

```

## Future Implementations

* More cities will be added to the database

* More robust map point markers

* Search bar animation

* Avatars for users


## Thank you for looking!
