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



file1 = open('app/assets/images/modernsunset.jpeg')
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
host_id: 1
}) 
listing1.photos.attach(io: file1, filename: 'modernsunset.jpeg')


file2 = open('app/assets/images/modernsunset.jpeg')
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
host_id: 1
}) 
listing2.photos.attach(io: file2, filename: 'modernsunset.jpeg')


file3 = open('app/assets/images/modernsunset.jpeg')
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
host_id: 1
}) 
listing3.photos.attach(io: file3, filename: 'modernsunset.jpeg')


file4 = open('app/assets/images/modernsunset.jpeg')
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
host_id: 1
}) 
listing4.photos.attach(io: file4, filename: 'modernsunset.jpeg')


file5 = open('app/assets/images/modernsunset.jpeg')
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
host_id: 1
}) 
listing5.photos.attach(io: file5, filename: 'modernsunset.jpeg')


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
