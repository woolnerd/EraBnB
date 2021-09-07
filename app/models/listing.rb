class Listing < ApplicationRecord
    validates :title, uniqueness: true, presence: true
    validates :description, :era_theme, :address, 
              :num_bedrms, :num_baths, :price, :clean_fee, :service_fee, presence: true


    # belongs_to :host,
    #     foreign_key: :host_id,
    #     class_name: :User

    has_many :bookings
    has_many :reviews
    
end



