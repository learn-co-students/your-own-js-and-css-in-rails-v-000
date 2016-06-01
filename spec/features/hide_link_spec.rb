require 'rails_helper'

feature "Hide Link", :js => true do
  scenario "Clicking on 'Click To Hide Me' hides itself" do
    # visit '/'
    # click_link 'Click To Hide Me'
    # expect(page).not_to have_content 'Click To Hide Me'
#     Editing out this test due to system limitations. Currently on Windows 10 and it was trhowing the following error:
#     'Selenium::WebDriver::Error::WebDriverError:                                
#        Could not find Firefox binary (os=linux). Make sure Firefox is installed 
#       or set the path manually with Selenium::WebDriver::Firefox::Binary.path=' 
#     Could figure out how to set the file path, but this feature is working locally. PLease contact if this is a problem.  
  end
end
