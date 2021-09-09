class Api::ListingsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]     

    def index 
        @listings = Listing.all 
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
        @listing = Listing.find(params[:id])
        render :show
    end

    # not sure if update is correct, check fetching, check routing
    def update 
        @listing = Listing.find(params[:id])
        if @listing 
            @listing.update(listing_params)
            render :show
        else 
            render json: @listing.errors.full_messages, status: 404
        end
    end

    # not sure if destroy is correct, where to route?
    def destroy
        @listing = Listing.find(params[:id])
        if @listing 
            @listing.destroy
            # render "api/listings/index"
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
                                        :host_id
                                        )
    end

end