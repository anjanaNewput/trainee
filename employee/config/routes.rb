Rails.application.routes.draw do
  root 'employees#index'
  get '/employees/all' , to: 'employees#index' , as: 'employees'
  get '/employess/all/developer', to: 'employees#getDeveloper', as: 'get_developer'
  get '/employees/create', to: 'employees#new',as: 'new_employee'
  post '/employees/create',  to: 'employees#create'
  
  get '/employees/:id/show',to: 'employees#show', as:'employee'
  get '/employees/:id/edit', to: 'employees#edit', as: 'edit_employee'
  
  put '/employees/:id/show',to: 'employees#update'
  delete '/employees/:id' , to: 'employees#destroy', as: 'delete_employee'
  
  
end
