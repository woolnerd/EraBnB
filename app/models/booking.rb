class Booking < ApplicationRecord
    validates :listing_id, :booker_id, :check_in, :check_out, :total_price, presence: true
    validates :guests, inclusion: { in: 1..10, message: 'must be between 1 and 10' }, presence: true

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing,
        dependent: :destroy

    belongs_to :booker,
        foreign_key: :booker_id,
        class_name: :User

    has_one :booking_host,
        through: :listing,
        source: :host

    # has_many :reviews,
    #     foreign_key: :listing_id,
    #     class_name: :Review 

end
