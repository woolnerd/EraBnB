   class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in    

    def index 
        @bookings = Booking.all 
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        if @booking.save
            render :show
        else  
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def show 
        @booking = Booking.find(params[:id])
        render :show
    end

    def update 
        @booking = Booking.find(params[:id])
        if @booking 
            @booking.update(booking_params)
            render :show
        else 
            render json: @booking.errors.full_messages, status: 404
        end
    end

    def destroy
        @booking = Booking.find(params[:id])
        if @booking 
            @booking.destroy
        else  
            render json: @booking.errors.full_messages, status: 404
        end 
    end

    private 

    def booking_params
        params.require(:booking).permit(:listing_id, :booker_id, :check_in, :check_out, :guests, :total_price)                              
    end

end