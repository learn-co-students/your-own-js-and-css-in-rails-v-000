# Load the Rails application.
require_relative 'application'

  Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(app, :browser => :chrome)
  end
# Initialize the Rails application.
Rails.application.initialize!
