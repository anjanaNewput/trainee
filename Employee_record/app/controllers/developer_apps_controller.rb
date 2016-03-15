class DeveloperAppsController < ApplicationController
  before_action :set_developer_app, only: [:show, :edit, :update, :destroy]

  # GET /developer_apps
  # GET /developer_apps.json
  def index
    @developer_apps = DeveloperApp.all
  end

  # GET /developer_apps/1
  # GET /developer_apps/1.json
  def show
  end

  # GET /developer_apps/new
  def new
    @developer_app = DeveloperApp.new
  end

  # GET /developer_apps/1/edit
  def edit
  end

  # POST /developer_apps
  # POST /developer_apps.json
  def create
    @developer_app = DeveloperApp.new(developer_app_params)

    respond_to do |format|
      if @developer_app.save
        DeveloperMailer.welcome_mail(@developer_app).deliver_now
        format.html { redirect_to @developer_app, notice: 'Developer app was successfully created.' }
        format.json { render :show, status: :created, location: @developer_app }
      else
        format.html { render :new }
        format.json { render json: @developer_app.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /developer_apps/1
  # PATCH/PUT /developer_apps/1.json
  def update
    respond_to do |format|
      if @developer_app.update(developer_app_params)
        format.html { redirect_to @developer_app, notice: 'Developer app was successfully updated.' }
        format.json { render :show, status: :ok, location: @developer_app }
      else
        format.html { render :edit }
        format.json { render json: @developer_app.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /developer_apps/1
  # DELETE /developer_apps/1.json
  def destroy
    @developer_app.destroy
    respond_to do |format|
      format.html { redirect_to developer_apps_url, notice: 'Developer app was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_developer_app
      @developer_app = DeveloperApp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def developer_app_params
      params.require(:developer_app).permit(:name, :email, :login)
    end
end
