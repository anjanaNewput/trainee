class ProjectController < ApplicationController
  def index
    @projects = Project.all
  end
  
  def show
    @project = Project.find(params[:id])
  end
  
  def new
    @project = Project.new
    render '_new_edit_form'
  end
  
  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to @project
   else
     render '_new_edit_form'
   end
  end
  
  def edit
    @project = Project.find(params[:id])
    render '_new_edit_form'
  end
  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      redirect_to @project
    else
      render '_new_edit_form'
    end
  end
  
  def destroy
    @project = Project.find(params[:id])
    @project.destroy
 
    redirect_to projects_path
  end
  
  def show_devloper
    @project = Project.find(params[:id])
    @developers = @project.developers
  end
  
  private
  def project_params
    params.require(:project).permit(:title,:description)
  end
  
end
