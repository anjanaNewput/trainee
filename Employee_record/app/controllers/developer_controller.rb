class DeveloperController < ApplicationController
  def index
    @developers = Developer.all
    respond_to do |format|
      format.json {render json: @developers}
      format.html
      format.js {render :action => 'index'}
    end
  end

  def show
    @developer = Developer.find(params[:id])
    respond_to do |format|
      format.json {render json: @developer}
      format.html
      format.js
    end
  end

  def new
    @developer = Developer.new
    #render '_form'
  end

  def edit
    @developer = Developer.find(params[:id])
    respond_to do |format|
      format.json {render json: @developer}
      format.html
      format.js
    end
  end

  def create
    @developer = Developer.new(developer_params)
    
      if @developer.save
        redirect_to @developer
        
      else
        render :new 
      end
    
  end

  def update
    @developer = Developer.find(params[:id])
      if @developer.update(developer_params)
        redirect_to @developer
      else
        render 'edit'
      end
    
  end  
  def destroy
    @developer = Developer.find(params[:id])
    @developer.destroy
    redirect_to developers_path
  end
  private
  def developer_params
    params.require(:developer).permit(:employee_name,:age,:email,:role,:project_id)
  end

end
