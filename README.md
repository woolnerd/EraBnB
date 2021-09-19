# Erabnb



Hello and Welcome to Erabnb! Erabnb is a clone of the website Airbnb, that provides
user many of the features they know and love from the original: book/cancel a stay at a hosted home, create your own listing with multiple photos uploaded, create, edit and delete reviews on listings!

Check it out here --> (https://erabnb.herokuapp.com/#/)

## Splash Page
![splash page](https://erabnb-seed-data.s3.amazonaws.com/images_for_readme/Screen+Shot+2021-09-17+at+10.08.37+AM.png)

## Profile Page
![profile page](https://erabnb-seed-data.s3.amazonaws.com/images_for_readme/Screen+Shot+2021-09-17+at+10.11.26+AM.png)

## Technologies

Starting with the backend, I used Ruby on Rails along with PostGresQL database and jBuilder DSL to sculpt and limit the json we send up to the frontend. On the frontend we have React to deliver the user interface and Redux to manage the state. MapBox's powerful map API was used for marking our locations, as well the as geocoding feature to create those cooridinates. The React-Calendar API, was used for the bookings interface. 

## Outstanding Features

#### UI Defined by Authentication 

Just like the real Airbnb, a user is free to roam the site and view the listings. However, in order to create a listing or booking a listing the user must log in or the they will not have access to these features throug the UI. 

#### User Friendly Profile Page

From the user profile page, a logged in user can find all their listings and trips can be found side by side. From there, they can book a new trip or create a listing. 

#### Map Markers

With the creation of each new listing, a geo-forwarding API captures the address input, and parses the string into longitude and latitude, and adds these coordinates to the backend database. The new listing will then be displayed with pinpoint accuracy on the listings map. 

## Challenges Met 

Part of the beauty of Airbnb's site is the dicotomy between a user's ability to act as traveler and host. I wanted to be able to provide a similar experience to my user. Which is why rather than providing a fully seeded database and solely letting users book trips, I decided grant users the ability to post their listings as well. Next. so restrictions would be needed. When a host is searching the listings for a place to book, they shouldn't see their own listings, nor should they have access to a calendar to book their own listings. Here is the code: 

```js
 render() {
        
        const listings = this.props.listings.map((listing) => (
            !this.props.currentUser || this.props.currentUser.id !== listing.host_id ?
            <ListingIndexItem key={listing.id} listing={listing} /> : null
          ) 
        );


```



