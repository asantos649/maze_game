Rails.application.routes.draw do
  resources :runs, only: [:show, :index, :delete, :create]
  resources :users, only: [:show, :delete, :create]
  resources :mazes, only: [:show, :index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
