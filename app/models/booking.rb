class Booking < ApplicationRecord
    validates :listing_id, :booker_id, :check_in, :check_out, 
                :guests, :total_price, presence: true

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :booker_id,
        foreign_key: :booker_id,
        class_name: :User

    has_one :booking_host,
        through: :listing,
        source: :host

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review 

end
