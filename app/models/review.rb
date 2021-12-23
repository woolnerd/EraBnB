class Review < ApplicationRecord
    validates :listing_id, :author_id, :body, :rating, presence: true
    validate :author_must_have_booked

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    def author_must_have_booked
        authors_bookings = listing.bookings.select {|booking| booking.booker_id == author_id}
        most_recent_day = authors_bookings.map {|booking| booking.check_out}.sort()[-1] 
        
        if authors_bookings.empty?
            errors.add(:base, "Sorry, you cannot leave a review without booking")
        elsif Date.today - most_recent_day > 14 
            errors.add(:base, "Sorry, you cannot leave a review after 14 days")
        end
        
    end

end
