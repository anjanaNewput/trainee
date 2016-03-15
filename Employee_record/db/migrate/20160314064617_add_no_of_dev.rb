class AddNoOfDev < ActiveRecord::Migration
  def change
    projects = Project.all
    projects.each do |d|
      d.no_of_developer = d.developers.count
    end
  end
end
