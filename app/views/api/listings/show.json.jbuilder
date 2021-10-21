json.partial! '/api/listings/listing', listing: @listing
json.booked_dates @booked_dates
json.host @host, :first_name, :last_name, :email 