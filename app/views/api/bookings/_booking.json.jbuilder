json.extract! booking, :id, :check_in, :check_out, :guests, :total_price

json.listing booking.listing
json.photoUrl booking.listing.photos.map { |photo| url_for(photo) }
json.booker booking.booker, :id, :email, :first_name, :last_name, :birthdate, :bio
