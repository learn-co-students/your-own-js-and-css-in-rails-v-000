require 'rails_helper'

feature "Hide Link", :js => true do
  scenario "Clicking on 'Click To Hide Me' hides itself" do
    visit '/'
    click_link ''
    expect(page).not_to have_content 'Click To Hide Me'
  end
end
