Project badge
100%
React intro
 Novice
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Your score will be updated as you progress.


Resources
Read or watch:

React Official Website
Getting started with React
React overview
Vite | docs
React Developer Tools
React Testing Library
Jest Matchers
Queries In Testing Library
mocking functions in testing
Handling user events in RTL
dangerouslySetInnerHTML in React
Deploying React App to github pages
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to create a basic Javascript application with React
How to use the build tool vite to start developing quickly with React
What JSX is and how it works.
Add inline styles in react.
Implement simple forms in react.
How to implement unit tests using React Testing Library
How to use the React Developer Tools to debug your code
How to deploy a react application to GitHub pages.
Requirements
All your files will be interpreted/compiled on Ubuntu 20.04 LTS using node 16.x.x and npm 9.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Install Jest globally: npm install -g jest
Tasks
0. Basic application
mandatory
Score: 100.00% (Checks completed: 100.00%)
Create a basic app named dashboard using the build tool vite in your task_0 directory

You will need a favicon and the Holberton logo. Download them and add them to the src/ directory under dashboard/

Holberton Logo



Favicon



Remove the unused files:

index.css
public/vite.svg and src/assets/react.svg (make sure to replace them with the Holberton logo and favicon)
in task_0/dashboard/src/App.jsx, create a function App that returns:

a header div with a class named App-header containing the Holberton logo with alt attribute with a significant title, and a h1 with the text School dashboard (color: #e1003c)
a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
a footer div with a class named App-footer containing at least one paragraph with the text Copyright (add the current year 2020 for example) - holberton School
Modify the App.css to match the design in screenshot:



Requirements:

When running, there should not be any lint error in the console
Make sure to match the style in the screenshot
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_0/dashboard/src/App.css, task_0/dashboard/src/App.jsx
  
6/1 pt
1. Basic Tests
mandatory
Score: 100.00% (Checks completed: 100.00%)
Testing is a crucial part in the web development, in React projects you’ll use the Testing Library from React in order to implements tests.

First, let’s setting up the test environment in our vite react application with React Testing library, and extra configurations:

In the project root folder add these files with its content: - Set up the file setupTests.js:

Click to expand/hide:
Set up the .babelrc file:

Click to expand/hide:
Set up the fileTransformer.js file:

Click to expand/hide:
Configure Jest at the end of your package.json:

Click to expand/hide:
Make sure to install the following packages: @babel/preset-env @babel/preset-react identity-obj-proxy @testing-library/jest-dom @testing-library/react jest-environment-jsdom

In a new file App.spec.js inside the src folder, you’ll add the following:

Import React
Import render and screen from @testing-library/react
Import the App component
As you import all the dependencies, let’s write the first tests:

Write a test to check if the h1 element with the text School Dashboard is rendered.
Write a test to check if the text content within the 2 p elements in the App-body and App-footer divs are rendered.
Write a test to check if the an img element is rendered.
Tips:

You can check for the h1 along with its text content in the same query
You can match the img element with its alt attribute text content (think about implementing a solid test)
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_0/dashboard/src/App.spec.js, task_0/dashboard/setupTests.js, task_0/dashboard/.babelrc, task_0/dashboard/fileTransformer.js, task_0/dashboard/package.json
 
10/3 pts
2. Embedding expressions, functions
mandatory
Using your code from the previous task, in task_1/dashboard/src/utils.js:

Create a function named getFullYear that will return the current year
Create a function named getFooterCopy:
It accepts one argument isIndex(boolean). When true, the function should return Holberton School. When false, the function should return Holberton School main dashboard
Modify the footer returned in task_1/dashboard/src/App.jsx to use these two functions
in task_1/dashboard/src/Notifications.jsx, create a Notifications element:

It should import React
It should export a function
The function should return a div with the class Notifications
The div should contain a paragraph with the text Here is the list of notifications
import the file Notifications.css.
in task_1/dashboard/src/Notifications.css, style the Notifications class:

Add a border and some padding around the div
Render the Notifications element:

Modify task_1/dashboard/src/App.jsx to render the new element (Notifications) in a div named root-notifications
Check that you can see the Notifications element is nested inside the app component on the browser, using the React browser extension
Requirements:

When running, there should not be any lint error in the console
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_1/dashboard/src/utils.js, task_1/dashboard/src/App.jsx, task_1/dashboard/src/Notifications.css, task_1/dashboard/src/Notifications.jsx
Please review your task manually with the following checklist
in task_1/dashboard/src/Notifications.js, the Notifications element exports a function that returns a div with the class Notifications and a paragraph with the text Here is the list of notifications

 
5/10 pts
3. Modify the App
mandatory
using your code from the previous task, in task_2/dashboard/src/App.jsx under the paragraph that says Login to access the full dashboard:

add a label and input for email
add a label and input for password
when the user clicks on a label, it should select the corresponding input
add one button element with the text “OK”
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_2/dashboard/src/App.jsx
Please review your task manually with the following checklist
npm start does not show any lint errors

 
10/5 pts
4. test the sigin form
mandatory
Score: 100.00% (Checks completed: 100.00%)
Let’s test the new form.

Update the App.spec.js file to add the below tests:

Check whether the App component render 2 inputs elements
Check whether the App component render 2 lables elements with the text Email and Password
Check whether the App component render a button with the text ‘OK’
Tips:

You can use regex to handle insensitive case when match an element with its text content.
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_2/dashboard/src/App.spec.js
 
4/2 pts
5. Modify the Notifications
mandatory
Score: 100.00% (Checks completed: 100.00%)
in task_2/dashboard/src/utils.js:

Create a function named getLatestNotification that returns the following string: <strong>Urgent requirement</strong> - complete by EOD
in task_2/dashboard/src/Notifications.jsx in the Notifications div:

add a button element with inline styling (without using the CSS file):
show button on right side of notifications box
aria-label is Close
when user clicks on the button it logs to the console Close button has been clicked
in the button element add a children img element that will import the close-icon.png image
after the paragraph add an unordered list
the list has the following items:
The first one has a default priority and says New course available
The second one has a urgent priority and says New resume available
Add the priority to the first and second items of the list using a data attribute
The last item correctly displays the content of getLatestNotification using dangerouslySetInnerHTML
in task_2/dashboard/src/Notifications.css:

style the notification priorities using their data attribute: set the color of default items to blue, and the color of urgent items to red.
Requirements:

When running, there should not be any lint error in the console
Your app should look like the following screenshot:


Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_2/dashboard/src/utils.js, task_2/dashboard/src/Notifications.jsx, task_2/dashboard/src/Notifications.css
  
1/1 pt
6. Create basic tests with four tests
mandatory
Score: 100.00% (Checks completed: 100.00%)
in task_3/dashboard/src/utils.spec.js:

Use Jest to test whether these 3 functions returned the desired output:

Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
Write a test to check that getFooterCopy returns the correct string when the argument is true or false
Write a test checking the returned string for getLatestNotification
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_3/dashboard/src/utils.spec.js
 
8/3 pts
7. Test the notifications list
mandatory
in task_3/dashboard/src/Notifications.spec.js create the following tests

Add a test to check the existing of the notifications title Here is the list of notifications
Add a test to check the existing of the button element
Verify there are 3 li elements as notifications rendered as in the shared screenshot
Check whenever the close button is clicked it log Close button has been clicked string
Requirements:

When running the test suites, you should see the following result
You must use shallow rendering to write the React tests
Tips:

Take a look at the resources above to see how RTL (React testing library) handle user events.
Use the fireEvent api to fire an event click
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_3/dashboard/src/Notifications.spec.js
Please review your task manually with the following checklist
in task_3/dashboard/src/App.test.js, has test for .App-header div

 
1/8 pts
8. Deploy to a GitHub page
Deploy to a GitHub page
Deploy your application to GitHub Pages using gh-pages branch.

Your application should be working correctly when accessing the GitHub URL.

Add URLs here:
Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_4/
Please review your task manually with the following checklist
Link to github pages is functional, application works correctly

 
2/1 pt
9. Reorganize the files
mandatory
Score: 100.00% (Checks completed: 100.00%)
Let’s reorganize the files in our project:

Every file related to the App, should be within a App folder
Every file related to the Notifications, should be within a Notifications folder
Every file related to the utils functions, should be within a utils folder
Every asset file should be within the assets folder
Set up the favicon.ico in the public folder
Requirements:

Make sure to fix the import statements in your files, so all tests should run successfully.

Notes:

By completing the reorganization of our React application files and folders, we ensure that we have successfully developed and tested our first React application.

Repo:

GitHub repository: arbutuscollege-web_react
Directory: react_intro
File: task_5/dashboard/src/App/App.css, task_5/dashboard/src/App/App.jsx, task_5/dashboard/src/App/App.spec.js, task_5/dashboard/src/Notifications/Notifications.css, task_5/dashboard/src/Notifications/Notifications.jsx, task_5/dashboard/src/Notifications/Notifications.spec.js, task_5/dashboard/src/utils/utils.js, task_5/dashboard/src/utils/utils.spec.js, task_5/dashboard/src/assets/holberton-logo.jpg, task_5/dashboard/public/favicon.ico
