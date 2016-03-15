Rails.application.routes.draw do
  resources :developer_apps
  
  root 'developer#index'
  
  get '/developers/all' , to: 'developer#index' , as: 'developers'
  get '/developers/new', to: 'developer#new',as: 'new_developer'
  
  post '/developers/new',  to: 'developer#create'
  get '/developers/:id/show',to: 'developer#show', as:'developer'
  get '/developers/:id/edit', to: 'developer#edit', as: 'edit_developer'
  
  patch '/developers/:id/show',to: 'developer#update'
  delete '/developers/:id' , to: 'developer#destroy', as: 'delete_developer'
  
  get '/projects', to: 'project#index',as: 'projects'
 
  get '/projects/new', to: 'project#new',as: 'new_project'
  post '/projects/new', to: 'project#create'
  get '/projects/:id/show', to: 'project#show', as: 'project'
  get '/projects/developer/all/:id', to: 'project#show_devloper', as: 'get_project_developer'
  get '/projects/:id/edit', to: 'project#edit', as: 'edit_project'
  
  patch '/projects/:id/show',to: 'project#update'
  delete '/projects/:id' , to: 'project#destroy', as: 'delete_project'
end
