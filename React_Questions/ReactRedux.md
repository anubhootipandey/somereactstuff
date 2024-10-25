/*------------------------React Redux (State Management)--------------------------*/


1. What is Redux, and why is it used in React applications?

--> Redux is a state management tool used in React apps to manage and share data across components more easily. It helps keep state in one central place, making large apps easier to handle.


2. What are the core concepts of Redux?

--> The core concepts are:

Actions: Describe what happened (events).
Reducers: Handle how the state changes based on actions.
Store: The central place that holds all the state.


3. How do you connect React with Redux using react-redux?

--> Use the Provider component to pass the store to your app, and use useSelector to read state and useDispatch to send actions.


4. What are actions, reducers, and the store in Redux?

--> Actions: Objects that describe events (e.g., a button was clicked).
Reducers: Functions that update state based on actions.
Store: The container holding the entire app’s state.


5. What is the difference between Redux and the React Context API?

--> Both can share data across components, but Redux is more powerful for complex apps with many interactions, while Context API is simpler and better for small applications.

