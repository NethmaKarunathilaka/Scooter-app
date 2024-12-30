Scooter-App

Overview

This is a React Native mobile application for an e-scooter rental service. The app was developed using Expo and includes features such as user authentication, navigation, and scooter selection tracking. Below are the key details of the project.

Features

1. User Authentication

Registration Page: Allows new users to register with form validations.

Login Page: Enables existing users to log in with form validations.

Implementation: Used React hooks (useState, useEffect) to manage form state and validations.

2. Navigation

Library: Expo Navigation was used for seamless navigation between pages.

Flow:

After login, users are redirected to the home page.

The username is passed to the home page and displayed in the top bar.

3. Home Page

Item List:

Fetches data from a public API to display scooter details in a card view.

Each card includes an image, status tag, title, and description.

Floating Action Button (FAB):

Located at the bottom of the screen.

Shows the count of selected scooters using the Context API.

4. State Management

Context API:

Used to manage the count of selected scooters globally.

Updates dynamically as users interact with the app.