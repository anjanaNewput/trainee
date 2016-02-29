puts "hello world";
puts "This is main Ruby Program"

END {
   puts "Terminating Ruby Program"
}
BEGIN {
   puts "Initializing Ruby Program"
}
class Student
  Con = 100
  Con1 = 200
  
  attr_reader :id, :name, :address
  def initialize(id,name,address)
    @id = id
    @name = name
    @address = address
  end
  def display_details()
    puts "Id of student is #@id"
    puts "Name of student is #@name"
    puts "Address of student is #@address"
  end
  def show_constant()
    puts "first constant is #{Con}"
    puts "first constant is #{Con1}"
  end
end
stud = Student.new("1","Ram","Vijay nagar indore")
stud.display_details()
stud.show_constant()