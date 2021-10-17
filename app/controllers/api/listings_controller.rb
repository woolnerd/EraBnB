class Api::ListingsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]     

    def index 
        @listings = Listing.with_attached_photos.all
        render "api/listings/index"
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
        if @listing && @listing.update(listing_params)
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

    def search
        address = params.values[0]["address"]
        desired_check_in = Date.parse(params.values[0]["check_in"])
        desired_check_out = Date.parse(params.values[0]["check_out"])
        @listings = Listing.with_attached_photos.where("address LIKE :query", query: "%"+address+"%")
                            .or(Listing.with_attached_photos.where("address LIKE :query", query: "%"+address.downcase+"%"))
                            .or(Listing.with_attached_photos.where("address LIKE :query", query: "%"+address.upcase+"%"))
                            .or(Listing.with_attached_photos.where("address LIKE :query", query: "%"+address.downcase.titleize+"%"))
 
        @listings = 
            @listings.select do |listing|
                booked_ranges = []
                if listing.bookings.length > 0
                    listing.bookings.each do |booking|
                        date_range = booking.check_in..booking.check_out
                        booked_ranges << date_range
                    end
                end 
                 booked_ranges.all? {|range| !range.include?(desired_check_in)} &&
                 booked_ranges.all? {|range| !range.include?(desired_check_out)}
            end 

        render "api/listings/index"
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