class Booking < ApplicationRecord
    validates :listing_id, :booker_id, :check_in, :check_out, :total_price, presence: true
    validates :guests, inclusion: { in: 1..10, message: '# must be between 1 and 10' }, presence: true
    validates :check_in, date: {before: Proc.new {Time.now + 3.year}}
    validates :check_out, date: { after: :check_in}
    validates :check_in, :check_out, date: true
    validate :booker_id_cannot_be_host_id
    
    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
        
    belongs_to :booker,
        foreign_key: :booker_id,
        class_name: :User

    has_one :booking_host,
        through: :listing,
        source: :host

    def booker_id_cannot_be_host_id
        if booker_id == listing.host_id
            errors.add(:base, "Sorry, you cannot book your own listing")
        end
    end
    
end
