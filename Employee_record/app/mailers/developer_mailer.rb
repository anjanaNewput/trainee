class DeveloperMailer < ApplicationMailer
  default from: 'notifications@example.com'
 
  def welcome_mail(developer_app)
    @developer_app = developer_app
    @url  = 'http://example.com/login'
    mail(to: @developer_app.email, subject: 'Welcome to My Awesome Site')
  end
end
