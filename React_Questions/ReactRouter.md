/*------------------------React Router--------------------------*/


1. What is React Router, and why is it used?

--> React Router is a library used for handling navigation between pages in a React application. It allows users to move between different views or pages without reloading the page.


2. How do you implement routing in a React application?

--> You implement routing using BrowserRouter to wrap your app, and Route to define different routes (URLs) and the components to show for each route.


3. What is the purpose of BrowserRouter and Route components in React Router?

--> BrowserRouter: Wraps the app to enable routing features.
Route: Defines a URL path and the component to display when that path is accessed.


4. What is the difference between Link and NavLink in React Router?

--> Link: Creates links for navigation.
NavLink: Similar to Link but also allows you to apply styles to the link when it's active (the current page).


5. How can you handle 404 pages in React Router?

--> You can use a Route with the path="*" to catch all undefined routes and show a 404 page.


