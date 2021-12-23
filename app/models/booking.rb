class Booking < ApplicationRecord
    validates :listing_id, :booker_id, :check_in, :check_out, :total_price, presence: true
    validates :guests, inclusion: { in: 1..10, message: '# must be between 1 and 10' }, presence: true
    validates :check_in, date: {before: Proc.new {Time.now + 3.year}}
    validates :check_out, date: { after: :check_in}
    validates :check_in, :check_out, date: true
    validate  :booker_id_cannot_be_host_id
    validate  :check_in_conflict?
    validate  :check_out_conflict?

    
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

    def check_in_conflict? 
         conflict?(check_in, "in")
    end
    
    def check_out_conflict?
        conflict?(check_out, "out")
    end

    def conflict?(date, type)
        booked_ranges = []
        if listing.bookings.length > 0
            listing.bookings.each do |booking|
                        date_range = booking.check_in..booking.check_out
                        booked_ranges << date_range
            end 
            if booked_ranges.any? {|range| range.include?(date)}
                errors.add(:base, "That check #{type} date is not available")
            end
        end 
        false 
    end

end
