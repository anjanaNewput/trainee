class UpdateCoulmn < ActiveRecord::Migration
  def change
    projects = Project.find_in_batches
    projects.each do |p|
      p.each do |a|
        a.no_of_developer = a.developers.count
        a.save
      end
      
    end
  end
end
