Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:create, :update, :destroy, :show, :index]
    resources :bookings, only: [:create, :update, :destroy, :show, :index]
    resources :reviews, only: [:create, :update, :destroy, :show, :index]
    
    get 'flexible' => 'listings#flexible'
    # get 'search' => 'listings#search'
    # get 'search' => 'listings#index'
    # post 'search_index' => 'listings#search_index'
  end


  root "static_pages#root"
end
