class Api::ListingsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]     

    def index 
    
        
        # debugger
        if params.has_key?("query")
            address = params.values[0]["address"]
            # debugger
            @listings = Listing.with_attached_photos.where("address LIKE :query", query: "%"+address+"%")
            # debugger
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
        if params["id"] != "1000"
            @listing = Listing.with_attached_photos.find(params[:id])
            render :show
        else  
            render json: @listing.errors.full_messages, status: 404
        end 
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

    def time_range(check_in, check_out)
        check_in..check_out
    end

    def address_search(address)

    end




end