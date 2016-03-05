Rails.application.routes.draw do
  root 'user#index'
  get '/users/all' , to: 'user#index' , as: 'users'
  get '/users/all/developer', to: 'user#getDeveloper', as: 'get_developer'
  get '/users/create', to: 'user#new',as: 'new_user'
  post '/users/create',  to: 'user#create'
  
  get '/users/:id/show',to: 'user#show', as:'user'
  get '/users/:id/edit', to: 'user#edit', as: 'edit_user'
  
  put '/users/:id/show',to: 'user#update'
  delete '/users/:id' , to: 'user#destroy', as: 'delete_user'
  

  get '/articles', to: 'article#index',as: 'articles'
  get '/articles/new', to: 'article#new',as: 'new_article'
  post '/articles', to: 'article#create'
  get '/articles/:id', to: 'article#show', as: 'article'
  get '/articles/:id/edit', to: 'article#edit', as: 'edit_article'
  patch '/articles/:id',to: 'article#update'
  delete '/articles/:id', to: 'article#destroy'
end
