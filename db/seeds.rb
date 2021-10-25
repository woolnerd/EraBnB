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
            bio: "I love traveling and skiing!"
          })

user2 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: "Baking is my passion, but eating is mission. I've been to every continent"})


user3 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: "I work as an independent filmmaker. I love Era bnb because I can time travel through the decades of home decor."})


user4 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: "I'm a family first kind of person. My kids mean the world to me. I love to travel and surf."})


user5 = User.create({
            email:Faker::Internet.email,
            password:"password", 
            first_name: Faker::Name.first_name  , 
            last_name: Faker::Name.last_name,
            birthdate:Faker::Date.between(from: '1955-09-23', to: '2003-09-01'), 
            bio: "Lobster rolls all day long and chardonnay for dessert."})



listing1 = Listing.create({
title: "What Are You Doing? This is the PLACE!",    
description: "This private penthouse is a slice of heaven! You'll be surrounded by luxurious 16-foot ceiling and stunning staircases. The bedroom has comfortable queen sized bed designed for better sleep, with a walk-in shower for two and jacuzzi tub. The living room has a large open space crafted with elegant furniture and flat screen smart TV. The kitchen is equipped with all necessary appliances, it has a dining table that fits up to 6 people and an extra half bath for your guests.",
era_theme: "80's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.947301,
latitude: 40.715485, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: DemoUser.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_1-xavier-antoine-france-04.jpeg')
listing1.photos.attach(io: file1, filename: '80_1-xavier-antoine-france-04.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_2-xavier-antoine-france-05.jpeg')
listing1.photos.attach(io: file2, filename: '80_2-xavier-antoine-france-05.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_6-xavier-antoine-france.jpeg')
listing1.photos.attach(io: file3, filename: '80_6-xavier-antoine-france.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_4-xavier-antoine-france.jpeg')
listing1.photos.attach(io: file4, filename: '80_4-xavier-antoine-france.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_5-xavier-antoine-france.jpeg')
listing1.photos.attach(io: file5, filename: '80_5-xavier-antoine-france.jpeg')



listing2 = Listing.create({
title: "Pricey, but WORTH IT",    
description: "Comfortable, 2-bedroom, 1.5 bathroom, apartment in great location on Upper West Side. Perfect for families. Landmarked building. Washer/Dryer in unit. Walking distance to Central Park, Museum of Natural History and Lincoln Center. King-sized bed in main bedroom, full-sized trundle bed downstairs. Subway station two blocks away.",
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
host_id: DemoUser.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60_1-Child-Studio-Maido-Japanese-Rrestaurant-London-Hospitality-Interiors-Yellowtrace-09-1536x1124.jpeg')
listing2.photos.attach(io: file1, filename: '60_1-Child-Studio-Maido-Japanese-Rrestaurant-London-Hospitality-Interiors-Yellowtrace-09-1536x1124.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60_1-home-showcase-mid-century-modern-foyer-royalty-free-image-915093588-1543960407.jpeg')
listing2.photos.attach(io: file2, filename: '60_1-home-showcase-mid-century-modern-foyer-royalty-free-image-915093588-1543960407.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60_2-9fa3f29d794e58413ef72efd99787d4c6c-H13A5048-.rhorizontal.w700.jpg')
listing2.photos.attach(io: file3, filename: '60_2-9fa3f29d794e58413ef72efd99787d4c6c-H13A5048-.rhorizontal.w700.jpg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60_2-post-wwii-mid-century-modern-architecture-by-real-estate-news-photo-465925305-1543960711.jpeg')
listing2.photos.attach(io: file4, filename: '60_2-post-wwii-mid-century-modern-architecture-by-real-estate-news-photo-465925305-1543960711.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60_3-Child-Studio-Maido-Japanese-Rrestaurant-London-Hospitality-Interiors-Yellowtrace-11.jpeg')
listing2.photos.attach(io: file5, filename: '60_3-Child-Studio-Maido-Japanese-Rrestaurant-London-Hospitality-Interiors-Yellowtrace-11.jpeg')


listing3 = Listing.create({
title: "Celebrate the Fourth of July in STYLE",    
description: "You can pack a lot into a New York minute, especially when you’re staying at One Platt. Catch some rays from the rooftop with iconic city views. Send a few emails then shoot a round of billiards on the second-floor lounge, where work hard, play hard is a state of mind. Or embark on the best adventure of all and explore the Financial District. Sleek high-rises surround you while enticing aromas beckon your taste buds. A non-traditional waterfront dish, the wood",
era_theme: "50's", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.98144,
latitude: 40.785042,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: DemoUser.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_10-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-09.jpeg')
listing3.photos.attach(io: file1, filename: '50_10-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-09.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_11-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-11.jpeg')
listing3.photos.attach(io: file2, filename: '50_11-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-11.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_13-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-08.jpeg')
listing3.photos.attach(io: file3, filename: '50_13-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-08.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_9-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-01.jpeg')
listing3.photos.attach(io: file4, filename: '50_9-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-01.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50_8-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-15.jpeg')
listing3.photos.attach(io: file5, filename: '50_8-Remodel-of-1950s-House-Jessica-Helgerson-Interior-Design-Yellowtrace-15.jpeg')




listing4 = Listing.create({
title: "The Greatest Views On Planet Earth",    
description: "Private entrance located off a historic alley way that has many street art from street artists all around the world.

This location is the best place to relax and unwind after exploring and venturing out in the city.

Cozy studio that has been newly renovated and smartly furnished including a queen size bed.

Studio is equipped with all necessary amenities needed, shampoo/soap, conditioner, towels, linens, basic tableware, coffee, AC, heat, Bluetooth speaker, Smart TV for Android devices.
" ,
era_theme: "70's", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.971718,
latitude: 40.787105, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: DemoUser.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-67767695_478378826058056_970185206101180416_n.jpeg')
listing4.photos.attach(io: file1, filename: '70s-67767695_478378826058056_970185206101180416_n.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-67826689_478378689391403_2244174275344859136_n.jpeg')
listing4.photos.attach(io: file2, filename: '70s-67826689_478378689391403_2244174275344859136_n.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-67833593_478378876058051_8974425317082923008_n.jpeg')
listing4.photos.attach(io: file3, filename: '70s-67833593_478378876058051_8974425317082923008_n.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-68402634_478378932724712_2490227179296653312_n.jpeg')
listing4.photos.attach(io: file4, filename: '70s-68402634_478378932724712_2490227179296653312_n.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-69022894_478378582724747_4471843876134453248_n.jpeg')
listing4.photos.attach(io: file5, filename: '70s-69022894_478378582724747_4471843876134453248_n.jpeg')




listing6 = Listing.create({
title: "Frank Llyod Wright Would Kill for This Place",    
description: "I am offering my Noho loft, one block from SOHO. My apartment measures approximately 450 square feet and has 12' ceilings, new paint throughout, black hardwood floors and a washer/dryer. The bathroom is marble with clean white linens. There is a King-size Tempurpedic bed, a couch, wi-fi internet, A/C, stove, oven, microwave and everything you may need for a comfortable stay in the city.",
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_11-5ee852f1e7610.jpeg')
listing6.photos.attach(io: file1, filename: '80_11-5ee852f1e7610.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_12-5ee85849ec43d.jpeg')
listing6.photos.attach(io: file2, filename: '80_12-5ee85849ec43d.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_13-5ee85a473b72f.jpeg')
listing6.photos.attach(io: file3, filename: '80_13-5ee85a473b72f.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_14-5ee85912af798.jpeg')
listing6.photos.attach(io: file4, filename: '80_14-5ee85912af798.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_15-5ee85ad45c8ae.jpeg')
listing6.photos.attach(io: file5, filename: '80_15-5ee85ad45c8ae.jpeg')


listing7 = Listing.create({
title: "Gorgeous 90's Extravagance!",    
description: "Centrally located in Midtown Manhattan on Fifth Avenue, this apartment is across from the Grand Army Plaza and Central Park's main entrance. It features on-site dining and free Wi-Fi.

A flat-screen TV and iPod docking station are included in each room at the apartment. The rooms boast high ceilings and marble bathrooms. Belgian chocolates and a bouquet of flowers are provided upon arrival. All rooms offer complimentary soft drinks and water, as well as Keurig coffee machines.",
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_2-5ee820f3147d2.jpeg')
listing7.photos.attach(io: file1, filename: '90_2-5ee820f3147d2.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_2-5ee820f3147d2.jpeg')
listing7.photos.attach(io: file2, filename: '90_2-5ee820f3147d2.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_3-5ee821004886f.jpeg')
listing7.photos.attach(io: file3, filename: '90_3-5ee821004886f.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_4-5ee8211a5f568.jpeg')
listing7.photos.attach(io: file4, filename: '90_4-5ee8211a5f568.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_5-5ee8219414be7.jpeg')
listing7.photos.attach(io: file5, filename: '90_5-5ee8219414be7.jpeg')


listing8 = Listing.create({
title: "Finally a Place That is Perfect",    
description: "50's DECOR GARDEN APARTMENT IN TOWNHOUSE with PRIVATE ENTRANCE.
WE ARE SUPERHOSTS! Read our reviews for unbiased opinions!

Entire tranquil Private Studio with separate entrance and a PRIVATE GARDEN in a beautiful townhouse on the Upper West Side of Manhattan, very close to Central Park. Complete with a queen-sized bed, flat-screen TV, plus a..." ,
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-1550257548-ch-ed-x-sothebys-palm-springs-221-1550257505.jpeg')
listing8.photos.attach(io: file1, filename: '50s-1550257548-ch-ed-x-sothebys-palm-springs-221-1550257505.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-092-1550256530.jpeg')
listing8.photos.attach(io: file2, filename: '50s-ch-ed-x-sothebys-palm-springs-092-1550256530.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-185a-1550256871.jpeg')
listing8.photos.attach(io: file3, filename: '50s-ch-ed-x-sothebys-palm-springs-185a-1550256871.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-230-1551709501.jpeg')
listing8.photos.attach(io: file4, filename: '50s-ch-ed-x-sothebys-palm-springs-230-1551709501.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-ch-ed-x-sothebys-palm-springs-336-1550257252.jpeg')
listing8.photos.attach(io: file5, filename: '50s-ch-ed-x-sothebys-palm-springs-336-1550257252.jpeg')




listing9 = Listing.create({
title: "In the Heart of the Bar Scene",    
description: "Welcome to our gorgeous Malibu getaway with spectacular ocean views. Nestled in the peaceful Santa Monica Mountains just a few minutes drive to California's most famous beaches. Amazing hiking trails, world-class restaurants, and shopping close by." ,
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-10.jpeg')
listing9.photos.attach(io: file1, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-10.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-12.jpeg')
listing9.photos.attach(io: file2, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-12.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-13.jpeg')
listing9.photos.attach(io: file3, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-13.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-14.jpeg')
listing9.photos.attach(io: file4, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-14.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-16.jpeg')
listing9.photos.attach(io: file5, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-16.jpeg')



listing10 = Listing.create({
    title: "You're Gonna DIE for These Views",    
    description: "Come stay 'On Top of the World' in this awe inspiring 2BD/2BA Panoramic Retreat - 250º City-to-Ocean Views - Open Floor Plan - Last house on the Cul-de-sac - Located in an All-Star Celebrity Neighborhood!"  ,
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

file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_2-e81VOkfRFf9x.jpeg')
listing10.photos.attach(io: file1, filename: '90_2-e81VOkfRFf9x.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_3-yK2_INqfTKox.jpeg')
listing10.photos.attach(io: file2, filename: '90_3-yK2_INqfTKox.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_4-b26defpAXPUx.jpeg')
listing10.photos.attach(io: file3, filename: '90_4-b26defpAXPUx.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_5-m0Ed1GfVsYmx.jpeg')
listing10.photos.attach(io: file4, filename: '90_5-m0Ed1GfVsYmx.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_6-5ee822006fe00.jpeg')
listing10.photos.attach(io: file5, filename: '90_6-5ee822006fe00.jpeg')

# file1 = URI.open('')
# listing10.photos.attach(io: file1, filename: '')
# file2 = URI.open('')
# listing10.photos.attach(io: file2, filename: '')
# file3 = URI.open('')
# listing10.photos.attach(io: file3, filename: '')
# file4 = URI.open('')
# listing10.photos.attach(io: file4, filename: '')
# file5 = URI.open('')
# listing10.photos.attach(io: file5, filename: '')


listing11 = Listing.create({
title: "Minutes from Transit and Nightlife",    
description: "This chic downtown penthouse has breathtaking city views, right in the middle of the action. Walking distance from Starbucks Whole Foods, Metro, Disney Hall, Fashion and Jewelry district. Clifton's is around the corner The Staples Center, LA Live, galleries, restaurants, and bars -walk to all of them!
15 minutes driving from Santa Monica, Hollywood, Universal Studios, and Beverly Hills.",
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_6-xavier-antoine-france.jpeg')
listing11.photos.attach(io: file1, filename: '0_6-xavier-antoine-france.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_7-xavier-antoine-france.jpeg')
listing11.photos.attach(io: file2, filename: '80_7-xavier-antoine-france.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_8-xavier-antoine-france.jpeg')
listing11.photos.attach(io: file3, filename: '80_8-xavier-antoine-france.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_9-xavier-antoine-france.jpeg')
listing11.photos.attach(io: file4, filename: '80_9-xavier-antoine-france.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_3-xavier-antoine-france-05.jpeg')
listing11.photos.attach(io: file5, filename: '80_3-xavier-antoine-france-05.jpeg')


# listing12 = Listing.create({
# title: "You Should Stop Looking and Book This",    
# description: Faker::TvShows::Seinfeld.quote,
# era_theme: "60's", 
# address: "1 Columbus Circle,
# Manhattan, New York City", 
# longitude: -73.988714,
# latitude: 40.739584,
# num_bedrms: Faker::Number.within(range: 1..5), 
# num_baths: Faker::Number.within(range: 1..5), 
# price: Faker::Number.within(range: 100..600), 
# clean_fee: Faker::Number.within(range: 1..40), 
# service_fee: Faker::Number.within(range: 1..30),
# host_id: user5.id
# }) 
# file1 = URI.open('')
# listing12.photos.attach(io: file1, filename: '')
# file2 = URI.open('')
# listing12.photos.attach(io: file2, filename: '')
# file3 = URI.open('')
# listing12.photos.attach(io: file3, filename: '')
# file4 = URI.open('')
# listing12.photos.attach(io: file4, filename: '')
# file5 = URI.open('')
# listing12.photos.attach(io: file5, filename: '')


listing13 = Listing.create({
title: "Modern Modern TRES MODERN!",    
description: "Gorgeous and spacious apartment located in the heart of Downtown Los Angeles!

Over 1400 sq. ft. of luxury. Sleeps 4 guests. Two king size beds. One bed is located in a private bedroom. Second bed is located in open space separated with dividers.
" ,
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-old-hollywood-bedroom.jpeg')
listing13.photos.attach(io: file1, filename: '50s-old-hollywood-bedroom.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-old-hollywood-dining.jpeg')
listing13.photos.attach(io: file2, filename: '50s-old-hollywood-dining.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-old-hollywood-dresser.jpeg')
listing13.photos.attach(io: file3, filename: '50s-old-hollywood-dresser.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-old-hollywood-kitchen.jpeg')
listing13.photos.attach(io: file4, filename: '50s-old-hollywood-kitchen.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-old-hollywood-living-room.jpeg')
listing13.photos.attach(io: file5, filename: '50s-old-hollywood-living-room.jpeg')


listing14 = Listing.create({
title: "Gothic Vampire Velour Hedonistic Thrill Nest",    
description: "Midcentury modern 2bed/2bath stilt home with spectacular views above Sunset Strip (2 blocks up from Hollywood + Fairfax). Very central, only blocks from the action, but very private and quiet. Recent renovations from roof to foundation, heat/AC system, high speed wifi, wired in + out with speakers, including 5.2 surround + movie projector in living room, 2-car car park with electric car charger." ,
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
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70_1-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-01.jpeg')
listing14.photos.attach(io: file1, filename: '70_1-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-01.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70_2-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-15.jpeg')
listing14.photos.attach(io: file2, filename: '70_2-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-15.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70_3-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-22.jpeg')
listing14.photos.attach(io: file3, filename: '70_3-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-22.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70_4-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-27.jpeg')
listing14.photos.attach(io: file4, filename: '70_4-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-27.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70_6-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-17.jpeg')
listing14.photos.attach(io: file5, filename: '70_6-Room-Design-Buro-Commune-303-Tiny-Moscow-Apartment-Interior-Photo-Polina-Poludkina-Yellowtrace-17.jpeg')

listing15 = Listing.create({
    title: "Say Goodbye to Crappy Apartments",    
    description: "This Modern getaway encompasses breath taking views of Los Angeles and the Hollywood sign.
Located Between Beachwood and Griffith Park.
1000 square feet (100 square meters) on one floor.
Perfect for a couple traveling with a family member, and/or friends.
The luxurious space offers a separate bedroom with queen size bed and a very" ,
    era_theme: "90's", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -73.942236,
    latitude: 40.718867,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/poolhousemodern.jpg')
listing15.photos.attach(io: file1, filename: 'poolhousemodern.jpg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90s-Asian-Zen-Interior-Design-living-room-1536x1024.jpeg')
listing15.photos.attach(io: file2, filename: '90s-Asian-Zen-Interior-Design-living-room-1536x1024.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/winterdusk.jpg')
listing15.photos.attach(io: file3, filename: 'winterdusk.jpg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_4-5ee8211a5f568.jpeg')
listing15.photos.attach(io: file4, filename: '90_4-5ee8211a5f568.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/90_6-5EBAmUr1uhex.jpeg')
listing15.photos.attach(io: file5, filename: '90_6-5EBAmUr1uhex.jpeg')


listing20 = Listing.create({
    title: "Outdoor Paradise!",    
    description: "Entirely Private and detached Hollywood studio with amazing private indoor and shared outdoor space in campus style complex for open minded travelers. Perfect for photo shoots and video production. We allow all content creators. 420 friendly. This property is 3 miles from the general map area shown here, a 10 minute drive to most everything off Sunset Blvd. in the Heart of West Hollywood. You will need a car at this location. The Hollywood Hills are" ,
    era_theme: "80's", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -73.966311,
    latitude: 40.789948,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-18.jpeg')
listing20.photos.attach(io: file1, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-18.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-23.jpeg')
listing20.photos.attach(io: file2, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-23.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-25.jpeg')
listing20.photos.attach(io: file3, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-25.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-27.jpeg')
listing20.photos.attach(io: file4, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-27.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-28.jpeg')
listing20.photos.attach(io: file5, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-28.jpeg')


listing21 = Listing.create({
title: "Urban Enchantment",    
description: "During your stay in Downtown Chicago and enjoying the comfort of our sophisticated apartment we will be doing our best to serve You in the best traditions. Every apartment by us is an Experience of Modern, Design and Beauty.
",
era_theme: "70's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -73.950343,
latitude: 40.78661, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/relaxing-place-near-exit-to-terrace.jpg')
listing21.photos.attach(io: file1, filename: 'relaxing-place-near-exit-to-terrace.jpg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-67826689_478378689391403_2244174275344859136_n.jpeg')
listing21.photos.attach(io: file2, filename: '70s-67826689_478378689391403_2244174275344859136_n.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-67833593_478378876058051_8974425317082923008_n.jpeg')
listing21.photos.attach(io: file3, filename: '70s-67833593_478378876058051_8974425317082923008_n.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-68402634_478378932724712_2490227179296653312_n.jpeg')
listing21.photos.attach(io: file4, filename: '70s-68402634_478378932724712_2490227179296653312_n.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-69022894_478378582724747_4471843876134453248_n.jpeg')
listing21.photos.attach(io: file5, filename: '70s-69022894_478378582724747_4471843876134453248_n.jpeg')



listing22 = Listing.create({
title: "Wine and Dine on the Patio",    
description: "Located at the epicenter of Chicago's cultural, historical, and business attractions, this luxurious 2 bedroom apartment offers guests all the comforts of home, whether on the road for work or play.

Within walking distance are world famous attractions including: Millennium Park, the Bean, Navy Pier, Riverwalk, and museum campus. Additionally, guests",
era_theme: "60's", 
address: "1 Columbus Circle,
Manhattan, New York City", 
longitude: -73.94436,
latitude: 40.787983,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-rustic-chic-interior-design-styles-meaning-1536x1021.jpeg')
listing22.photos.attach(io: file1, filename: '60s-rustic-chic-interior-design-styles-meaning-1536x1021.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/snowy-country-house.jpg')
listing22.photos.attach(io: file2, filename: 'snowy-country-house.jpg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-shabby-chic-luxury-classic-country-interior-design-styles-1536x960.png')
listing22.photos.attach(io: file3, filename: '60s-shabby-chic-luxury-classic-country-interior-design-styles-1536x960.png')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-traditional-interior-design-styles-definition.jpeg')
listing22.photos.attach(io: file4, filename: '60s-traditional-interior-design-styles-definition.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-transitional-interior-design-styles-1536x1024.jpeg')
listing22.photos.attach(io: file5, filename: '60s-transitional-interior-design-styles-1536x1024.jpeg')



listing23 = Listing.create({
title: "A Perfect Place for the Whole Family",    
description: "New Remodeled! Amazing views. Full-Amenity building with 24hr doorman, pool, newly remodeled sundeck with grills & firepits, pool, PreCor fitness center & business center. Cable, WiFi & internet included. Perfect for vacation, short-term housing or corporate rental. Corner condo in the FANTASTIC South Loop with outstanding views of the City & Lake Michigan. Steps to many Chicago attractions including the beach, shopping on Michigan Ave., restaurants & nightlife!

Guest access
The gym is open for use
" ,
era_theme: "50's", 
address: "73 Bushwick Ave, Brooklyn, NY 11211", 
longitude: -73.940004,
latitude: 40.789575,
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user5.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-style_at_home-_-57ff5135-25c8-4ecb-87ac-a9bcd6040257-_-interiors-darkness-fireplace.webp')
listing23.photos.attach(io: file1, filename: '50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-fireplace.webp')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-style_at_home-_-9b267024-ce80-4403-99fd-d2a1d1c14279-_-interiors-darkness-shelves.webp')
listing23.photos.attach(io: file2, filename: '50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-shelves.webp')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-style_at_home-_-a76a1c49-d1b1-4c46-9731-37538f9759b7-_-interiors-darkness-livingroom.webp')
listing23.photos.attach(io: file3, filename: '50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-livingroom.webp')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-style_at_home-_-add6f343-3c4e-44d6-b181-f8d7579afefc-_-interiors-darkness-dining.webp')
listing23.photos.attach(io: file4, filename: '50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-dining.webp')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-dog.webp')
listing23.photos.attach(io: file5, filename: '50s-style_at_home-_-dfe49594-e544-451e-8a40-401149a9886d-_-interiors-darkness-dog.webp')


listing24 = Listing.create({
title: "You'll Die Someday so Live It Up Now",    
description: "Located at the epicenter of Chicago's cultural, historical, and business attractions, this luxurious 2 bedroom apartment offers guests all the comforts of home, whether on the road for work or play.

Within walking distance are world famous attractions including: Millennium Park, Navy Pier, Riverwalk, Soldier Field, The Field Museum, Oak Street Beach,"  ,
era_theme: "60's", 
address: "90 5th Ave, New York, NY 10011", 
longitude: -73.989815,
latitude: 40.750226, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user2.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-contemorary-interior-design-style-1536x940.jpeg')
listing24.photos.attach(io: file1, filename: '60s-contemorary-interior-design-style-1536x940.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg')
listing24.photos.attach(io: file2, filename: '60s-eclectic-interior-design-styles-1536x1152.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg')
listing24.photos.attach(io: file3, filename: '60s-eclectic-interior-design-styles-1536x1152.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg')
listing24.photos.attach(io: file4, filename: '60s-eclectic-interior-design-styles-1536x1152.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/60s-eclectic-interior-design-styles-1536x1152.jpeg')
listing24.photos.attach(io: file5, filename: '60s-eclectic-interior-design-styles-1536x1152.jpeg')



listing25 = Listing.create({
    title: "Nothing Can Beat This Apartment",    
    description: "Stay in the heart of one of Chicago's most popular neighborhoods! Relax and unwind in a historic gray stone apartment. We have a spacious kitchen, dining room with period built-ins and modern art pieces, two smart and minimalist bedrooms, and a sunny backyard and patio. Located just three short blocks from the blue line subway, which runs between O'Hare airport and downtown Chicago, this centrally-located apartment i… read more"  ,
    era_theme: "70's", 
    address: "55 Broad St, New York, NY 10004", 
    longitude: -74.00013,
    latitude: 40.746152,
    num_bedrms: Faker::Number.within(range: 1..5), 
    num_baths: Faker::Number.within(range: 1..5), 
    price: Faker::Number.within(range: 100..600), 
    clean_fee: Faker::Number.within(range: 1..40), 
    service_fee: Faker::Number.within(range: 1..30),
    host_id: user1.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-modern-industrial-interior-design-styles-meaning-1536x1024.jpeg')
listing25.photos.attach(io: file1, filename: '70s-modern-industrial-interior-design-styles-meaning-1536x1024.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-feng-shui-bedroom-ideas-for-home.jpeg')
listing25.photos.attach(io: file2, filename: '70s-feng-shui-bedroom-ideas-for-home.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-29.jpeg')
listing25.photos.attach(io: file3, filename: '70s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-29.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-69022894_478378582724747_4471843876134453248_n.jpeg')
listing25.photos.attach(io: file4, filename: '70s-69022894_478378582724747_4471843876134453248_n.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/70s-68402634_478378932724712_2490227179296653312_n.jpeg')
listing25.photos.attach(io: file5, filename: '70s-68402634_478378932724712_2490227179296653312_n.jpeg')


listing26 = Listing.create({
title: "A Designer's dream!",    
description: "Built in 1895 and updated in 2019, the condo provides historic charm with modern convenience. The unit is light filled with ample space to spread out and relax. The bathroom has been fully remodeled and the kitchen is updated.

The unit has a private balcony deck and a landscaped common patio. The unit includes 2 free off-street parking spots. Amenities include 75 4K Smart TV,",
era_theme: "80's", 
address: "405 Lexington Ave, New York, NY 10174", 
longitude: -74.0113,
latitude: 40.71152, 
num_bedrms: Faker::Number.within(range: 1..5), 
num_baths: Faker::Number.within(range: 1..5), 
price: Faker::Number.within(range: 100..600), 
clean_fee: Faker::Number.within(range: 1..40), 
service_fee: Faker::Number.within(range: 1..30),
host_id: user4.id
}) 
file1 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_4-at_1572028adea19632c1eaf5403dd573c1748683d3.jpeg')
listing26.photos.attach(io: file1, filename: '80_4-at_1572028adea19632c1eaf5403dd573c1748683d3.jpeg')
file2 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_14-5ee85912af798.jpeg')
listing26.photos.attach(io: file2, filename: '80_14-5ee85912af798.jpeg')
file3 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80_3-at_house+tours_2020-08_Jasmyn+L_KBP_3069.jpeg')
listing26.photos.attach(io: file3, filename: '80_3-at_house+tours_2020-08_Jasmyn+L_KBP_3069.jpeg')
file4 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-7.jpeg')
listing26.photos.attach(io: file4, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-7.jpeg')
file5 = URI.open('https://erabnb-seed-data.s3.amazonaws.com/Era-theme-photos/80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-9.jpeg')
listing26.photos.attach(io: file5, filename: '80s-at_house+tours_2021-03_Meg+G_Meg-Gustafson-House-Tour-9.jpeg')



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
    listing_id: listing9.id,
    booker_id: DemoUser.id,
    check_in: "2022-01-29",
    check_out: "2022-01-31",
    guests: 4,
    total_price: 631.92
    )

  booking2 = 
  Booking.create(
    listing_id: listing6.id,
    booker_id: DemoUser.id,
    check_in: "2021-12-15",
    check_out: "2021-12-20",
    guests: 3,
    total_price: 2203.66
    )
    
booking3 = 
  Booking.create(
    listing_id: listing7.id,
    booker_id: DemoUser.id,
    check_in: "2021-11-01",
    check_out: "2021-11-21",
    guests: 4,
    total_price: 3086.61
    )

  booking4 = 
  Booking.create(
    listing_id: listing8.id,
    booker_id: DemoUser.id,
    check_in: "2022-10-01",
    check_out: "2022-10-10",
    guests: 3,
    total_price: 2055.55
    )

review1 =
  Review.create(
    listing_id: listing1.id,
    author_id: user1.id,
    body: 'my stay at the one platt in nyc was smooth and seamless. the room was clean, which is always my main priority when traveling. the sofa bed was surprisingly',
    rating: 5
  )


review2 = 
  Review.create(
    listing_id: listing1.id,
    author_id: user2.id,
    body: "We got a nice upgrade due to some mixup, so I don't know if you can compare, but the 2 bedroom corner apartments are AMAZING!",
    rating: 5
  )

review3 = 
  Review.create(
    listing_id: listing1.id,
    author_id: user3.id,
    body: "Perfect location and worth the money . Only thing bad I can say is one blind wouldn’t close but other than that would definitely recommend",
    rating: 4
  )

review4 = 
  Review.create(
    listing_id: listing1.id,
    author_id: user4.id,
    body: "Really clean and spacious apartment! Be warned, you don't necessarily get assigned the exact one you see in the photos. I paid for a 1 bedroom and then received check in details for a studio. Had to call customer service and it took a half-hour to get assigned a new room, which was in a different building about a block away. In the end, Sonder took care of us and the space was lovely, just double check your details to make sure you are getting the space you paid for!",
    rating: 4
  )

  
  review5 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user1.id,
    body: "Make sure you have all the check-in codes before you arrive. Otherwise, anything you needed, it was a text message away. I am most pleased. I love lower Manhattan to start and sonder was so conveniently placed, I could get anywhere I wanted by foot. The apartment was lovely. Most of all the was the cordiality, grace, and helpfulness of the staff. I will definitely stay here again.",
    rating: 4
  )


  review6 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user2.id,
    body: "They never showed up. What a terrible experience!",
    rating: 1
  )

review7 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user3.id,
    body: "Everything was great during my stay. I would highly recommend.",
    rating: 5
  )

review8 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user4.id,
    body: "Friendly and responsive staff, nice decor, great location. Street parking is difficult but not impossible. Wish there was dedicated workspace. No desks or ample space in at the dining room table to accommodate a comfortable work area.",
    rating: 4
  )

review9 = 
  Review.create(
    listing_id: listing2.id,
    author_id: user5.id,
    body: "This apartment has a nice modern touch with all the things you’ll need for your stay. The laundry and gym were both useful during our stay. The communication with the host was quick and polite. The doorman in the building had tons of helpful info. Close to Starbucks, Dunkin and a local grocery. We walked to the One World Obs area. The weather was perfect this time of year and close enough walk to the waterfront. We’ve stayed at a different Sonder’s during a past visit and have been pleased both times.
    Thanks for a great visit.",
    rating: 5
  )

review10 = 
  Review.create(
    listing_id: listing3.id,
    author_id: user2.id,
    body: "Just like the pics, great location!",
    rating: 4
  )
  
review11 = 
  Review.create(
    listing_id: listing3.id,
    author_id: user3.id,
    body: "Great location with clean and modern interior",
    rating: 4
  )
review12 = 
  Review.create(
    listing_id: listing3.id,
    author_id: user4.id,
    body: "this space is very nice, around the building could look a little desolate but is very close to a lot of attractions and restaurant Maurice",
    rating: 5
  )


review13 = 
  Review.create(
    listing_id: listing3.id,
    author_id: user5.id,
    body: "Great place. Great location. Will come again !",
    rating: 2
  )

review14 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user1.id,
    body: "This was a sweet place, with all the amenities to live comfortably a couple of weeks and be close to the subway, to beautiful Seaport area and walks etc. Clean, and cosy. Shelby",
    rating: 2
  )



review15 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user2.id,
    body: "The stay was very comfortable ! They put a lot of effort to have everything that was needed for a long term stay . The only compliant I had was the elevator broke down a few times and took awhile to fix.",
    rating: 4
  )


review16 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user3.id,
    body: "The place was awesome! Great water pressure, however the drain in the shower was slow to drain and I was stuck in standing water. The neighbors smoked and it made our room smell.",
    rating: 4
  )

review16 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user4.id,
    body: "Great stay ! Lots of stuff to do around the corner, and some SoHo shops just down the street . Easy access to the stuff we wanted to do . Loved it ",
    rating: 4
  )

review16 = 
  Review.create(
    listing_id: listing4.id,
    author_id: user5.id,
    body: "The space was pristine, communication clear, and super convenient location… all in all a great value and stay in the city!",
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
