# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

testing Notes for the project
<!-- Fake API https://reqres.in/ -->
1)Sign up with the following credential (https://reqres.in/api/register)
email:eve.holt@reqres.in,
password:pistol
firstName,lastname,phoneNumber are optional for this api

2)After signup you are naviagted the signin page ,u can sign in by following credentials.
email:eve.holt@reqres.in,
password:pistol
and we are storing the login true key value pair in local storage at the time of login

3)then use navigated to the Home page .their u will find the patientList,appointment,and logout buttons

4)on Clickin of patient list you will naviagte to the route "/patient-details".
their u will find the patient data list ,u can edit the data u can delet the row data and u can add new data by clicking the add new patient button and u can search the data by names and u can sort the data

5)and on clicking on the appointment button u will naviagte to the route "/book-appointment"

6)for to book appointment u can fill the form 

7)on clicking on the logout button .user will log out and localstorage will be cleared

8)without logged in user can not access the other routes,because i have provided protectec routs



