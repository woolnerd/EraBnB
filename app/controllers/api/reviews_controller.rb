   class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy, :update]    

    def index 
        @reviews = Review.all 
        render :index
    end

    def create
        @review = Booking.new(review_params)
        if @review.save
            render :show
        else  
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def update 
        @review = Review.find(params[:id])
        if @review 
            @review.update(review_params)
            render :show
        else 
            render json: @review.errors.full_messages, status: 404
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

    def booking_params
        params.require(:review).permit(:listing_id, :author_id, :body, :rating)                              
    end

end