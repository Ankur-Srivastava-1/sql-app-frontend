# SQL APP (Frontend)
Front End of an SQL App, made for the challenge round of Atlan

Deployed App can be found here: https://scintillating-alfajores-6226f9.netlify.app/ <br>
Link to this repo: https://github.com/Ankur-Srivastava-1/sql-app-frontend

## Overview

This is a dummy application. It does not have a backend.
This app has a text area for the user to enter his SQL Query and then a button which on clicking displays the output.
Since this is a dummy application, the queries and results are hardcoded and the result does not match the query.
We can have more than one tab, 3 tabs are created by default. We can also use the "Add New Query" option from the dropdown list. This Creates a new tab and now we can navigate to it usinf the dropdown list.


https://user-images.githubusercontent.com/59230660/170861851-dbfe653b-0ac2-4f0e-8b36-81c87d5d29f5.mp4

Note: The above video does not show the dummy file download as the screen recording app was unable to record any popups other than the web app tab but the button can be verified using the netlify app link, although it is just a dummy button.

## Framework Used

React.js was used to build this app.<br>
Packages installed : "react-bootstrap" for styling purposes.

## Page Load Time Statistics

Measured using speed lab by browserstack <br>
Link:- https://www.browserstack.com/speedlab

![image](https://user-images.githubusercontent.com/59230660/170861474-46e26daf-9dbb-498d-8eec-bbae16118f46.png)

Desktop Performance :- 

Average Page Load time for desktop is <strong>1.035 seconds</strong>

![image](https://user-images.githubusercontent.com/59230660/170861328-1bf95368-a511-4d79-8975-0c29c670e347.png)

Mobile Performance :- 

Average Page Load time for mobile is <strong>1.6 seconds</strong>

![image](https://user-images.githubusercontent.com/59230660/170861426-774af422-2903-4010-855c-4ba87b808960.png)

## Additional Features

*Download Button* - made keeping the user in mind, in case the user wants to download the result. For now it just returns a dummy file as all downloading should be handled at the backend in react(as suggested by the developers of react). 

Line Numbering , Syntax Validation - could not these very helpful features for the user as they require some backend manipulations to work in react. The idea was there.

<h3>
  Created By -  Ankur Srivastava <br>
  Email - 1905377@kiit.ac.in
</h3>
