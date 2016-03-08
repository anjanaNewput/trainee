module DeveloperHelper
  def get_Project_name(project_id)
   @project = Project.find(project_id)
    project_name = @project.title
    return project_name
  end
end
