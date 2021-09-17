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
            birthdate:Faker::Date.between(from: '195-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})

user2 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '195-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user3 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '195-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user4 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '195-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})


user5 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '195-09-23', to: '2003-09-01'), 
            bio: Faker::TvShows::Seinfeld.quote})



listing1 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's Night!", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.5831,
latitude: 40.4506, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing1.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


listing2 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "Roaring 20s", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.5859,
latitude: 40.4607,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
listing2.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


listing3 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50s Chic", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.9430,
latitude: 40.7128,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing3.photos.attach(io: file3, filename: 'winterdusk.jpeg')


listing4 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "Goth Vibes", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.966003,
latitude: 40.773998, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
listing4.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


listing5 = Listing.create({
    title: Faker::Company.catch_phrase,    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "Gordon Gecko", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.0114,
    latitude: 40.7053,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/piece-of-home-interior.jpg')
listing5.photos.attach(io: file5, filename: 'piece-of-home-interior.jpg')

listing6 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's Night!", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.5831,
latitude: 40.7506, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing6.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


listing7 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "Roaring 20s", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.5859,
latitude: 40.6607,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
listing7.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


listing8 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50s Chic", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.9430,
latitude: 41.7128,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing8.photos.attach(io: file3, filename: 'winterdusk.jpeg')


listing9 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "Goth Vibes", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.666003,
latitude: 40.773998, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
listing9.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


listing10 = Listing.create({
    title: Faker::Company.catch_phrase,    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "Gordon Gecko", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.0114,
    latitude: 40.4053,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/piece-of-home-interior.jpg')
listing10.photos.attach(io: file5, filename: 'piece-of-home-interior.jpg')

listing11 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's Night!", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.8931,
latitude: 40.4506, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing11.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


listing12 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "Roaring 20s", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.5859,
latitude: 40.4307,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
listing12.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


listing13 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50s Chic", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.9430,
latitude: 39.7128,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing13.photos.attach(io: file3, filename: 'winterdusk.jpeg')


listing14 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "Goth Vibes", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.166003,
latitude: 40.773998, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
listing14.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


listing15 = Listing.create({
    title: Faker::Company.catch_phrase,    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "Gordon Gecko", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.0114,
    latitude: 40.7053,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/piece-of-home-interior.jpg')
listing5.photos.attach(io: file5, filename: 'piece-of-home-interior.jpg')

listing16 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's Night!", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.6831,
latitude: 40.4506, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing16.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


listing17 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "Roaring 20s", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.2859,
latitude: 40.4607,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
listing17.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


listing18 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50s Chic", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.9430,
latitude: 40.7128,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing18.photos.attach(io: file3, filename: 'winterdusk.jpeg')


listing19 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "Goth Vibes", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.966003,
latitude: 40.773998, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
listing19.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


listing20 = Listing.create({
    title: Faker::Company.catch_phrase,    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "Gordon Gecko", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.0114,
    latitude: 40.7053,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/piece-of-home-interior.jpg')
listing20.photos.attach(io: file5, filename: 'piece-of-home-interior.jpg')

listing21 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "80's Night!", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.5931,
latitude: 40.4506, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing21.photos.attach(io: file1, filename: 'poolhousemodern.jpg')


listing22 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: "Roaring 20s", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.5859,
latitude: 40.4907,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/modern-city-architecture.jpg')
listing22.photos.attach(io: file2, filename: 'modern-city-architeture.jpg')


listing23 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "50s Chic", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.9430,
latitude: 40.7928,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing23.photos.attach(io: file3, filename: 'winterdusk.jpeg')


listing24 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: "Goth Vibes", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.966003,
latitude: 40.173998, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/this-view-is-so-relaxing.jpg')
listing24.photos.attach(io: file4, filename: 'this-view-is-so-relaxing.jpg')


listing25 = Listing.create({
    title: Faker::Company.catch_phrase,    
    description: Faker::TvShows::Seinfeld.quote  ,
    era_theme: "Gordon Gecko", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.0114,
    latitude: 40.0053,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 

file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/piece-of-home-interior.jpg')
listing25.photos.attach(io: file5, filename: 'piece-of-home-interior.jpg')

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
