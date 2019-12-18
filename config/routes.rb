Rails.application.routes.draw do
  get 'home/top'

  get '/works', to: 'works#index'
  post '/works', to: 'works#create'
end
