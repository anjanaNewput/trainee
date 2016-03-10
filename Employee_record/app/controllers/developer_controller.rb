class DeveloperController < ApplicationController
  def home
  end
  def index
    @developers = Developer.all
  end
  
  def show
    @developer = Developer.find(params[:id])
  end
  
  def new
    @developer = Developer.new
    render '_form'
  end
  
  def edit
    @developer = Developer.find(params[:id])
    render '_form'
  end
  
  def create
    @developer = Developer.new(developer_params)
    if @developer.save
      redirect_to  @developer
    else
      render '_form'
    end
  end
  
 def update
    @developer = Developer.find(params[:id])
   if @developer.update(developer_params)
    redirect_to @developer
   else
    render '_form'
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
