@bookings.each do |booking|
    json.set! booking.id do 
        json.partial! "booking", booking: booking
        # json.listing booking.listing
    end
end

