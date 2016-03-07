Rails.application.routes.draw do
  root 'developer#index'
  
  get '/developers/all' , to: 'developer#index' , as: 'developers'
  get '/developers/create', to: 'developer#new',as: 'new_developer'
  
  post '/developers/create',  to: 'developer#create'
   get '/developers/:id/show',to: 'developer#show', as:'developer'
  
  get '/projects', to: 'project#index',as: 'projects'
 
  get '/projects/new', to: 'project#new',as: 'new_project'
  post '/projects', to: 'project#create'
  get '/projects/:id', to: 'project#show', as: 'project'
end
