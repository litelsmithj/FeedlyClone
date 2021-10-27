Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  resources :users, only: [:index, :create, :new, :delete, :edit, :show]
  resources :sessions, only: [:create, :new, :destroy]
  # resources :feeds, only: [:index, :create, :new, :delete, :edit, :show]

  namespace :api, defaults: { format: :json } do
    resources :feeds, only: [:index, :create, :new, :delete, :edit, :show]
  end

end
