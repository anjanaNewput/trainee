require 'test_helper'

class DeveloperAppsControllerTest < ActionController::TestCase
  setup do
    @developer_app = developer_apps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:developer_apps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create developer_app" do
    assert_difference('DeveloperApp.count') do
      post :create, developer_app: { email: @developer_app.email, login: @developer_app.login, name: @developer_app.name }
    end

    assert_redirected_to developer_app_path(assigns(:developer_app))
  end

  test "should show developer_app" do
    get :show, id: @developer_app
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @developer_app
    assert_response :success
  end

  test "should update developer_app" do
    patch :update, id: @developer_app, developer_app: { email: @developer_app.email, login: @developer_app.login, name: @developer_app.name }
    assert_redirected_to developer_app_path(assigns(:developer_app))
  end

  test "should destroy developer_app" do
    assert_difference('DeveloperApp.count', -1) do
      delete :destroy, id: @developer_app
    end

    assert_redirected_to developer_apps_path
  end
end
