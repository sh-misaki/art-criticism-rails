Rails.application.routes.draw do
  get 'home/top'

  resources :works
end
