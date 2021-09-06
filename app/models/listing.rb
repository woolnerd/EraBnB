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


# {
# title: "Great viewfsddfsdfsdfsdfdsfdsffs!",    
# description: "you're gonna love this place!",
# era_theme: "80s chic", 
# address: "233 qunicy lane, new york, ny 10001", 
# num_bedrms: 2, 
# num_baths: 3, 
# price: 100, 
# clean_fee: 22, 
# service_fee: 11,
# }