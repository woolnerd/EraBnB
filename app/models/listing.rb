class Listing < ApplicationRecord
    validates :title, uniqueness: true, presence: true
    validates :description, :era_theme, :address, presence: true
    validates :num_bedrms, :num_baths, numericality: {greater_than_or_equal_to: 1}, presence: true 
    validates :price, :clean_fee, :service_fee,  numericality: {greater_than_or_equal_to: 0}, presence: true



    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    has_many_attached :photos

    has_many :bookings, dependent: :destroy
    has_many :reviews, dependent: :destroy

    has_many :review_authors,
        through: :reviews,
        source: :author


    # def self.search_era(era)
    #     listings = Listing.all
    #     listings.select { |listing| listing.era_theme == era }
    # end
    
    def self.flexible
        Listing.all.map {|listing| listing.id}.sample
    end

end



