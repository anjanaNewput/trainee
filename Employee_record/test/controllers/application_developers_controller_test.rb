require 'test_helper'

class ApplicationDevelopersControllerTest < ActionController::TestCase
  setup do
    @application_developer = application_developers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:application_developers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create application_developer" do
    assert_difference('ApplicationDeveloper.count') do
      post :create, application_developer: { email: @application_developer.email, login: @application_developer.login, name: @application_developer.name }
    end

    assert_redirected_to application_developer_path(assigns(:application_developer))
  end

  test "should show application_developer" do
    get :show, id: @application_developer
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @application_developer
    assert_response :success
  end

  test "should update application_developer" do
    patch :update, id: @application_developer, application_developer: { email: @application_developer.email, login: @application_developer.login, name: @application_developer.name }
    assert_redirected_to application_developer_path(assigns(:application_developer))
  end

  test "should destroy application_developer" do
    assert_difference('ApplicationDeveloper.count', -1) do
      delete :destroy, id: @application_developer
    end

    assert_redirected_to application_developers_path
  end
end
