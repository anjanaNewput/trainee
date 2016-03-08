Rails.application.routes.draw do
  root 'developer#home'
  
  get '/developers/all' , to: 'developer#index' , as: 'developers'
  get '/developers/create', to: 'developer#new',as: 'new_developer'
  
  post '/developers/create',  to: 'developer#create'
   get '/developers/:id/show',to: 'developer#show', as:'developer'
  get '/developers/:id/edit', to: 'developer#edit', as: 'edit_developer'
  
  put '/developers/:id/show',to: 'developer#update'
  delete '/developers/:id' , to: 'developer#destroy', as: 'delete_developer'
  
  get '/projects', to: 'project#index',as: 'projects'
 
  get '/projects/new', to: 'project#new',as: 'new_project'
  post '/projects', to: 'project#create'
  get '/projects/:id', to: 'project#show', as: 'project'
  get '/projects/developer/all/:id', to: 'project#show_devloper', as: 'get_project_developer'
end
