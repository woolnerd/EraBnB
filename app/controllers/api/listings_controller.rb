class Api::ListingsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]     

    def index 
    
        
        # debugger
        if params.has_key?("query")
            address = params.values[0]["address"]
            desired_check_in = Date.parse(params.values[0]["check_in"])
            desired_check_out = Date.parse(params.values[0]["check_out"])
            @listing = Listing.with_attached_photos.where("address LIKE :query", query: "%"+address+"%")
                            #    .joins(:bookings)
                               
                               #check if the param checkin date is in the range of booking check_in/check_out
                            #    .where.not(check_in: (desired_check_in..desired_check_out))
                            #    .where.not(check_out: (desired_check_in..desired_check_out))
                               #check if the param checkout date is in the range of booking check_in/check_out
                               
            @listing.all.map do |listing|
                booked_ranges = []
                listing.bookings.each do |booking|
                    date_range = booking.check_in..booking.check_out
                    booked_ranges << date_range
                end 

                booked_ranges.each do |range|
                    range.include?(desired_check_in)


                    #date_range is the block of time that a listing is booked for 
                    #if the desired check in or check out time falls inside the block,
                    #then we do want to show the listing 
                    # debugger
                    unless date_range.include?(desired_check_in) || date_range.include?(desired_check_out)
                    count += 1
                    end
                    results << listing if count == listing.bookings.length

                    if date_range.include?(desired_check_in)
                        next
                    else  
                        
                    end
                end
                debugger
                return results
            end
        else 
            @listings = Listing.with_attached_photos.all
        end

        render "api/listings/index"
        # render :index
    end

    def create 
        
        @listing = Listing.new(listing_params)
        if @listing.save 
            render :show
        else  
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def show 
            @listing = Listing.with_attached_photos.find(params[:id])
            render :show
    end

    def update 
        @listing = Listing.find(params[:id])
        if @listing 
            @listing.update(listing_params)
            render :show
        else 
            render json: @listing.errors.full_messages, status: 404
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if @listing 
            @listing.destroy
           render :index
        else  
            render json: @listing.errors.full_messages, status: 404
        end 
    end

    private 

    def listing_params
        params.require(:listing).permit(:title,
                                        :description,
                                        :era_theme,
                                        :address,
                                        :longitude,
                                        :latitude,
                                        :num_bedrms,
                                        :num_baths,
                                        :price,
                                        :clean_fee,
                                        :service_fee,
                                        :host_id,
                                        photos: [] 
                                        )
    end

    def available?(check_in, check_out, occupied_start, occupied_end)
        check_in, check_out = Date.parse(check_in), Date.parse(check_out)
        occupied = occupied_start..occupied_end
        return false if occupied.include?(check_in)
        return false if occupied.include?(check_out)
        true
    end

   
    def address_search(address)

    end




end