# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'open-uri'

User.delete_all
Listing.delete_all
Booking.delete_all
Review.delete_all

DemoUser = User.create({
            email:"DemoUser@demoUser.com",
            password:"password", 
            first_name: "Demo", 
            last_name:"User",
            birthdate:"1981-10-31", 
            bio:"I do not exist."})

user1 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})

user2 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user3 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user4 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user5 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})



listing1 = Listing.create({
title: "What Are You Doing? This is the PLACE!",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.947301,
latitude: 40.715485, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/Midtown_6.jpeg')
listing1.photos.attach(io: file1, filename: 'Midtown_6.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/modern-prefab-homes-cool-stuff-interesting-news-1315792.jpeg')
listing1.photos.attach(io: file2, filename: 'modern-prefab-homes-cool-stuff-interesting-news-1315792.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/morgante-wilson-1486154143.jpeg')
listing1.photos.attach(io: file3, filename: 'morgante-wilson-1486154143.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/rent_to_own.jpeg')
listing1.photos.attach(io: file4, filename: 'rent_to_own.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/285_5thAve2R_Kitchen_straight_on.jpg')
listing1.photos.attach(io: file5, filename: '285_5thAve2R_Kitchen_straight_on.jpg')



listing2 = Listing.create({
title: "Pricey, but WORTH IT",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "60's", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.956932,
latitude: 40.768956,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
# file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/modern-prefab-homes-cool-stuff-interesting-news-1315792.jpeg')
# listing2.photos.attach(io: file2, filename: 'modern-prefab-homes-cool-stuff-interesting-news-1315792.jpeg')
# listing2.photos.attach(io: file1, filename: 'Midtown_6.jpeg')
# listing2.photos.attach(io: file2, filename: 'modern-prefab-homes-cool-stuff-interesting-news-1315792.jpeg')
# listing2.photos.attach(io: file3, filename: 'morgante-wilson-1486154143.jpeg')
# listing2.photos.attach(io: file4, filename: 'rent_to_own.jpeg')
# listing2.photos.attach(io: file5, filename: '285_5thAve2R_Kitchen_straight_on.jpg')



listing3 = Listing.create({
title: "Celebrate the Fourth of July in STYLE",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50's", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.98144,
latitude: 40.785042,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/morgante-wilson-1486154143.jpeg')
listing3.photos.attach(io: file3, filename: 'morgante-wilson-1486154143.jpeg')


listing4 = Listing.create({
title: "The Greatest Views On Planet Earth",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "70's", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.971718,
latitude: 40.787105, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/rent_to_own.jpeg')
listing4.photos.attach(io: file4, filename: 'rent_to_own.jpeg')



listing6 = Listing.create({
title: "Frank Llyod Wright Would Kill for This Place",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.971718,
latitude: 40.789105, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/285_5thAve2R_Kitchen_straight_on.jpg')
listing6.photos.attach(io: file1, filename: '285_5thAve2R_Kitchen_straight_on.jpg')


listing7 = Listing.create({
title: "A Reader's Heaven",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "90's", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.99824,
latitude: 40.737974,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/45-sutton-place-south-interiors.jpeg')
listing7.photos.attach(io: file2, filename: '45-sutton-place-south-interiors.jpeg')


listing8 = Listing.create({
title: "Finally a Place That is Perfect",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50's", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -74.005333,
latitude: 40.735421,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/b92f00c5f959c25884c53efbc072e894.jpeg')
listing8.photos.attach(io: file3, filename: 'b92f00c5f959c25884c53efbc072e894.jpeg')


listing9 = Listing.create({
title: "In the Heart of the Bar Scene",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "80's", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -74.003149,
latitude: 40.731491, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/colorbld.jpeg')
listing9.photos.attach(io: file4, filename: 'colorbld.jpeg')


listing10 = Listing.create({
    title: "You're Gonna DIE for These Views",    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "90's", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.000532,
    latitude: 40.731503,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/ELI040119_RENTALS_Guide_001.jpeg')
listing10.photos.attach(io: file5, filename: 'ELI040119_RENTALS_Guide_001.jpeg')

listing11 = Listing.create({
title: "Minutes from Transit and Nightlife",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.979953,
latitude: 40.73496, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/feature.jpeg')
listing11.photos.attach(io: file1, filename: 'feature.jpeg')


listing12 = Listing.create({
title: "You Should Stop Looking and Book This",    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "60's", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.988714,
latitude: 40.739584,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/gray-house-with-green-lawn-e1478724365131.jpeg')
listing12.photos.attach(io: file2, filename: 'gray-house-with-green-lawn-e1478724365131.jpeg')


listing13 = Listing.create({
title: "Modern Modern TRES MODERN!",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50's", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.952487,
latitude: 40.729698,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/houseonrockserbia.png')
listing13.photos.attach(io: file3, filename: 'houseonrockserbia.png')


listing14 = Listing.create({
title: "Gothic Vampire Velour Hedonistic Thrill Nest",    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "70's", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.941039,
latitude: 40.72437, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/images.jpeg')
listing14.photos.attach(io: file4, filename: 'images.jpeg')


# listing15 = Listing.create({
#     title: "Say Goodbye to Crappy Apartments",    
#     description: Faker::TvShows::Seinfeld.quote  ,
#     era_theme: "Gordon Gecko", 
#     address: "55 Broad St, New York, NY 10004", 
#     longitude: -73.942236,
#     latitude: 40.718867,
#     num_bedrms: Faker::Number.within(range: 1..5), 
#     num_baths: Faker::Number.within(range: 1..5), 
#     price: Faker::Number.within(range: 100..600), 
#     clean_fee: Faker::Number.within(range: 1..40), 
#     service_fee: Faker::Number.within(range: 1..30),
#     host_id: user1.id
# }) 

# file6 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/The-Highlands_Pierce-Balcony-Rendering.jpeg')
# listing6.photos.attach(io: file6, filename: 'The-Highlands_Pierce-Balcony-Rendering.jpeg')

# listing20 = Listing.create({
#     title: "Outdoor Paradise!",    
#     description: Faker::TvShows::Seinfeld.quote  ,
#     era_theme: "90's", 
#     address: "55 Broad St, New York, NY 10004", 
#     longitude: -73.966311,
#     latitude: 40.789948,
#     num_bedrms: Faker::Number.within(range: 1..5), 
#     num_baths: Faker::Number.within(range: 1..5), 
#     price: Faker::Number.within(range: 100..600), 
#     clean_fee: Faker::Number.within(range: 1..40), 
#     service_fee: Faker::Number.within(range: 1..30),
#     host_id: user1.id
# }) 

# file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/SO1633-01.jpg-nggid041647-ngg0dyn-360x0-00f0w010c010r110f110r010t010.jpg')
# listing20.photos.attach(io: file5, filename: 'SO1633-01.jpg-nggid041647-ngg0dyn-360x0-00f0w010c010r110f110r010t010.jpg')

# listing21 = Listing.create({
# title: "Urban Enchantment",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "80's Night!", 
# address: "405 Lexington Ave, New York, NY 10174", 
# longitude: -73.950343,
# latitude: 40.78661, 
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user4.id
# }) 
# file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/the-olivia-new-york-ny-building-photo.jpeg')
# listing21.photos.attach(io: file1, filename: 'the-olivia-new-york-ny-building-photo.jpeg')


# listing22 = Listing.create({
# title: "Wine and Dine on the Patio",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "60's", 
# address: "1 Columbus Circle,
# Manhattan, New York City", 
# longitude: -73.94436,
# latitude: 40.787983,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user5.id
# }) 
# file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/waterfallhome.jpeg')
# listing22.photos.attach(io: file2, filename: 'waterfallhome.jpeg')


# listing23 = Listing.create({
# title: "A Perfect Place for the Whole Family",    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: "50's", 
# address: "73 Bushwick Ave, Brooklyn, NY 11211", 
# longitude: -73.940004,
# latitude: 40.789575,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user5.id
# }) 
# file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/07SUBCOLIVE2-jumbo.jpeg')
# listing23.photos.attach(io: file3, filename: '07SUBCOLIVE2-jumbo.jpeg')


# listing24 = Listing.create({
# title: "You'll Die Someday so Live It Up Now",    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: "Goth Vibes", 
# address: "90 5th Ave, New York, NY 10011", 
# longitude: -73.989815,
# latitude: 40.750226, 
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user2.id
# }) 
# file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/12highend-greenpoint2-jumbo.jpeg')
# listing24.photos.attach(io: file4, filename: '12highend-greenpoint2-jumbo.jpeg')


# listing25 = Listing.create({
#     title: "Nothing Can Beat This Apartment",    
#     description: Faker::TvShows::Seinfeld.quote  ,
#     era_theme: "Gordon Gecko", 
#     address: "55 Broad St, New York, NY 10004", 
#     longitude: -74.00013,
#     latitude: 40.746152,
#     num_bedrms: Faker::Number.within(range: 1..5), 
#     num_baths: Faker::Number.within(range: 1..5), 
#     price: Faker::Number.within(range: 100..600), 
#     clean_fee: Faker::Number.within(range: 1..40), 
#     service_fee: Faker::Number.within(range: 1..30),
#     host_id: user1.id
# }) 

# file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/greenpoint-market-brooklyn-ny-primary-photo.jpeg')
# listing25.photos.attach(io: file5, filename: 'greenpoint-market-brooklyn-ny-primary-photo.jpeg')


# listing26 = Listing.create({
# title: "A Designer's dream!",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "80's Night!", 
# address: "405 Lexington Ave, New York, NY 10174", 
# longitude: -74.0113,
# latitude: 40.71152, 
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user4.id
# }) 
# file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
# listing26.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


# listing27 = Listing.create({
# title: "Great Views and Huge Closets!",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "Roaring 20s", 
# address: "1 Columbus Circle,
# Manhattan, New York City", 
# longitude: -73.97586,
# latitude: 40.785997,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user5.id
# }) 
# file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
# listing27.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


# listing28 = Listing.create({
# title: "Best Place to Enjoy All NYC has to Offer!",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "50s Chic", 
# address: "73 Bushwick Ave, Brooklyn, NY 11211", 
# longitude: -73.9430,
# latitude: 40.7128,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user5.id
# }) 
# file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
# listing28.photos.attach(io: file3, filename: 'winterdusk.jpeg')


# listing29 = Listing.create({
# title: "We Got Luxury Coming Out of Our You-Know-Whats!",    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: "Goth Vibes", 
# address: "90 5th Ave, New York, NY 10011", 
# longitude: -73.966003,
# latitude: 40.773998, 
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user2.id
# }) 
# file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
# listing29.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


# listing30 = Listing.create({
#     title: "Contemporay Love Nest",    
#     description: Faker::TvShows::Seinfeld.quote  ,
#     era_theme: "Gordon Gecko", 
#     address: "55 Broad St, New York, NY 10004", 
#     longitude: -74.0114,
#     latitude: 40.7053,
#     num_bedrms: Faker::Number.within(range: 1..5), 
#     num_baths: Faker::Number.within(range: 1..5), 
#     price: Faker::Number.within(range: 100..600), 
#     clean_fee: Faker::Number.within(range: 1..40), 
#     service_fee: Faker::Number.within(range: 1..30),
#     host_id: user1.id
# }) 

# file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/presentation_day_imgs/colorbld.jpeg')
# listing30.photos.attach(io: file5, filename: 'colorbld.jpeg')

booking1 = 
  Booking.create(
    listing_id: listing1.id,
    booker_id: user4.id,
    check_in: "2021-10-29",
    check_out: "2021-10-31",
    guests: 4,
    total_price: 3055.55
    )

  booking2 = 
  Booking.create(
    listing_id: listing2.id,
    booker_id: user1.id,
    check_in: "2021-10-15",
    check_out: "2021-10-20",
    guests: 3,
    total_price: 2055.55
    )
booking3 = 
  Booking.create(
    listing_id: listing7.id,
    booker_id: user4.id,
    check_in: "2021-11-01",
    check_out: "2021-11-21",
    guests: 4,
    total_price: 3055.55
    )

  booking4 = 
  Booking.create(
    listing_id: listing3.id,
    booker_id: user1.id,
    check_in: "2022-10-01",
    check_out: "2022-10-10",
    guests: 3,
    total_price: 2055.55
    )

review1 =
  Review.create(
    listing_id: listing2.id,
    author_id: user4.id,
    body: 'Love this place to soo much!',
    rating: 5
  )


review2 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user4.id,
    body: 'Greate place for kids!',
    rating: 5
  )

review3 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user2.id,
    body: 'Greate place for kids!',
    rating: 5
  )


# listing6 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing7 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing7 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing8 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing9 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing10 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing11 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing12 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 4
# }) 


# listing13 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 3
# }) 


# listing14 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 3
# }) 


# listing15 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 3
# }) 


# listing16 = Listing.create({
# title: Faker::Company.catch_phrase,    
# description: Faker::TvShows::Seinfeld.quote  ,
# era_theme: Faker::Company.type + "-esque", 
# address: Faker::Address.full_address, 
# longitude: Faker::Address.longitude,
# latitude: Faker::Address.latitude,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: 3
# }) 
