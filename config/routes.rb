Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:create, :update, :destroy, :show, :index]
    resources :bookings, only: [:create, :update, :destroy, :show, :index]
  end


  root "static_pages#root"
end
