json.extract! user, :id, :email, :first_name, :last_name, :birthdate, :bio

json.user_listings user.listings.each do |listing|
        json.listing listing
        json.photoUrl listing.photos.map { |photo| url_for(photo) }
end

json.user_bookings user.bookings.each do |booking|
        json.booking booking
        json.listing booking.listing
        json.photoUrl booking.listing.photos.map { |photo| url_for(photo) }
end

