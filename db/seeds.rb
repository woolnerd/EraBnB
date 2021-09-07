# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# User.delete_all
Listing.delete_all



listing1 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing2 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing3 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing4 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing5 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing6 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing7 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing7 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing8 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing9 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing10 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing11 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing12 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing13 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing14 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing15 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 

listing16 = Listing.create({
title: Faker::Company.catch_phrase,    
description: Faker::TvShows::Seinfeld.quote  ,
era_theme: Faker::Company.type + "-esque", 
address: Faker::Address.full_address, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
}) 