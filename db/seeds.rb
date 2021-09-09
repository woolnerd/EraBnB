# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

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




listing1 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 1
}) 

listing2 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 1
}) 

listing3 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 1
}) 


listing4 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 1
}) 


listing5 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 1
}) 


listing6 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing7 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing7 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing8 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing9 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing10 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing11 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing12 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 4
}) 


listing13 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 3
}) 


listing14 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 3
}) 


listing15 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 3
}) 


listing16 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
longitude: Faker::Address.longitude,
latitude: Faker::Address.latitude,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: 3
}) 
