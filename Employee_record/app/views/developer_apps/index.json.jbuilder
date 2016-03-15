json.array!(@developer_apps) do |developer_app|
  json.extract! developer_app, :id, :name, :email, :login
  json.url developer_app_url(developer_app, format: :json)
end
