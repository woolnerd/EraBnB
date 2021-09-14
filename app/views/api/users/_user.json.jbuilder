json.extract! user, :id, :email, :first_name, :last_name, :birthdate, :bio

json.user_listings user.listings.each do |listing|
    # json.set! listing.id do 
        json.listing listing
        json.photoUrl listing.photos.map { |photo| url_for(photo) }
    # end 
end

json.user_bookings user.bookings.each do |booking|
    # json.set! booking.id do 
        json.booking booking
        json.listing booking.listing
        json.photoUrl booking.listing.photos.map { |photo| url_for(photo) }
    # end 
end


# json.user_listings user.listings
# json.photoUrl user_listings.photos.map { |photo| url_for(photo) }

# json.user_listings user.listings.each do |listing|
#     json.set! listing.id
#     # json.user_listings user.listings
# end

# json.user_booking user.bookings 
# json.booking_listing user.bookings.map { |booking| booking.listing }
