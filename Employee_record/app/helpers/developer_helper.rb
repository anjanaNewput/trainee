module DeveloperHelper
  def get_Project_name(project_id)
   @project = Project.find(project_id)
    project_name = @project.title
    project_name
  end
end
