   class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]    

    def index 
        @reviews = Review.all 
    end

    def create
        @review = Review.new(review_params)
        # @listing = Listing.find(@review.listing_id)
        if @review.save
            # render "api/listings/#{@review.listing_id}"
        else  
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find(params[:id])
        # render "api/listings/#{@review.listing_id}"
    end

    def update 
        @review = Review.find(params[:id])
        # debugger
        if @review && @review.update(review_params)
            # render "api/reviews/show"
        else 
            render json: @review.errors.full_messages, status: 422
            # debugger
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review 
            @review.destroy
        else  
            render json: @review.errors.full_messages, status: 404
        end 
    end

    private 

    def review_params
        params.require(:review).permit(:listing_id, :author_id, :body, :rating)                              
    end

end