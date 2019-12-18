Rails.application.routes.draw do
  get 'home/top'
  get 'works/index'
  get 'works/create'
  resource :home, only: [:index]
end
