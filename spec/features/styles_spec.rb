require 'rails_helper'

feature "Page Styles" do


  scenario "body tag has cool-background CSS class" do
    visit '/'
    expect(page).to have_css("body.cool-background")
  end
end
