# Load the Rails application.
require File.expand_path('../application', __FILE__)

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

# Initialize the Rails application.
Rails.application.initialize!
