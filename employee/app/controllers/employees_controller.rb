class EmployeesController < ApplicationController
  def index
    @employees = Employee2.all
  end
  def show
    @employee = Employee2.find(params[:id])
  end
  def new
    @employee = Employee2.new
  end
  def edit
    @employee = Employee2.find(params[:id])
  end
  def create
    @employee = Employee2.new(employee_params)
    if @employee.save
    redirect_to  employee_path(@employee)
    else
      render 'new'
    end
  end
  def update
    @employee = Employee2.find(params[:id])
    if @employee.update(employee_params)
      redirect_to employee_path(@employee)
    else
      render 'edit'
    end
  end
  def destroy
    @employee = Employee2.find(params[:id])
    @employee.destroy
    redirect_to employees_path
  end
  def getDeveloper
    @employees = Employee2.where(:role => "developer")
    render 'index'
  end
  private
  def employee_params
    params.require(:employee).permit(:name,:age,:role)
  end
end
