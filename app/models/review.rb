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
        if listing.bookings.none? {|booking| booking.booker_id == author_id}
            errors.add(:base, "Sorry, you cannot leave a review without booking")
        end 
    end

end
