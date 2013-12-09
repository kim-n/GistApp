NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "root#root"

  resources :gists, only: [:index, :create] do
    resource :favorite, only: [:create, :destroy]
  end

  resources :tags, only: [:index]

  resources :favorites, only: [:index]
end
