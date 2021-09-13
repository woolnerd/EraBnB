@bookings.each do |booking|
    json.set! booking.id do 
        json.partial! "booking", booking: booking
        # json.partial! "listing", listing: booking.listing
        json.listing booking.listing
    end
end
