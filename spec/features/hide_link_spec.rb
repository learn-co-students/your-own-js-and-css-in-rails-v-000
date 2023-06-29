require 'rails_helper'

feature "Hide Link", :js => true do
  scenario "Clicking on 'Click To Hide Me' hides itself" do
    visit '/'
    click_link 'Click To Hide Me'
    expect(page).not_to have_content 'Click To Hide Me'
  end
end


# works in the browser, but this is the error I'm getting, so I believe it is with the test: 
#  Failure/Error: click_link 'Click To Hide Me'
     
#      Capybara::Poltergeist::JavascriptError:
#        One or more errors were raised in the Javascript code on the page. If you don't care about these errors, you can ignore them by setting js_errors: false in your Poltergeist configuration (see documentation for details).
     
#        ReferenceError: Can't find variable: hideWhenClicked
#        ReferenceError: Can't find variable: hideWhenClicked
#            at http://127.0.0.1:58615/:12 in onclick
#            at :0 in sendEvent
#            at phantomjs://code/web_page.js:58
#            at phantomjs://code/web_page.js:501 in mouseEvent
#            at phantomjs://code/node.js:67 in mouseEvent
#            at phantomjs://code/browser.js:375 in mouse_event
#            at phantomjs://code/browser.js:395 in click
#            at phantomjs://code/browser.js:89 in runCommand
#            at phantomjs://code/cmd.js:35 in run
#            at phantomjs://code/main.js:17 in runCommand
#            at phantomjs://code/connection.js:16 in commandReceived
#            at phantomjs://code/connection.js:1
