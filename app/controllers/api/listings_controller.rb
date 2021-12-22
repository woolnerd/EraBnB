class Api::ListingsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]     

    def index 
        @listings = Listing.with_attached_photos.all
        render "api/listings/index"
    end
 
    def create 
        @listing = Listing.new(listing_params)
        @host = @listing.host
        if @listing.save 
            render :show
        else  
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def show 
            @listing = Listing.with_attached_photos.find(params[:id])
            
            @booked_dates =  []
            @listing.bookings.each do |booking|
                date_range = booking.check_in..booking.check_out
                @booked_dates += Array(date_range)
            end
            @host = @listing.host
            render :show
    end

    def update 
        @listing = Listing.find(params[:id])
        @host = @listing.host
        if cannot_edit(@listing)
            render json: @listing.errors.full_messages, status: 401
        elsif @listing && @listing.update(listing_params)
            render :show
        else 
            render json: @listing.errors.full_messages, status: 404
        end
    end

    def destroy
        @listing = Listing.find(params[:id])
        if cannot_edit(@listing)
            render json: @listing.errors.full_messages, status: 401
        elsif @listing 
            @listing.destroy
            @listings = Listing.with_attached_photos.all
           render :index
        else  
            render json: @listing.errors.full_messages, status: 404
        end 
    end

    def search
        @listings = Listing.all
        address = params[:query][:address]
        desired_check_in = Date.parse(params[:query][:check_in])
        desired_check_out = Date.parse(params[:query][:check_out])

        if address != ""
            @listings = @listings.where("address LIKE :query", query: "%"+address+"%")
                                .or(@listings.where("address LIKE :query", query: "%"+address.downcase+"%"))
                                .or(@listings.where("address LIKE :query", query: "%"+address.upcase+"%"))
                                .or(@listings.where("address LIKE :query", query: "%"+address.downcase.titleize+"%"))
        
        end

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

            
        if params[:query][:era_theme] != ""
            @listings = @listings.select {|listing| listing.era_theme == params[:query][:era_theme] }
        end

        render "api/listings/index"
    end

    private 

    def cannot_edit(listing)
        listing.host_id != current_user.id
    end

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

end