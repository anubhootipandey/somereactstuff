/*------------------------React Hooks--------------------------*/


1. What are React hooks, and why were they introduced?

-->React hooks are special functions that let you use features like state and lifecycle methods in functional components. They were introduced to make functional components more powerful, eliminating the need for class components to manage state and side effects. Hooks simplify code and make it more reusable.


2. What is the useState hook, and how is it used?

-->The useState hook lets you add state to functional components. It returns two values: the current state and a function to update that state. 

Example:
const [count, setCount] = useState(0);
Here, count is the state, and setCount is used to change the value of count.


3. What is the useEffect hook, and how does it differ from lifecycle methods in class components?

--> The useEffect hook lets you perform side effects (like data fetching or DOM updates) in functional components. It combines the functionality of lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount from class components. You use useEffect to run code after the component renders or when certain data changes.


4. How do you handle side effects in functional components using hooks?

--> You handle side effects using the useEffect hook. You can run the side effect (like fetching data or setting up subscriptions) after the component renders. You can also clean up the effect (like removing a subscription) when the component unmounts, by returning a cleanup function inside useEffect.


5. What is the useContext hook, and how does it simplify state management?

--> The useContext hook lets you easily access data from a context (a way to pass data across many components without using props). Instead of "drilling" props down through multiple components, useContext provides a simpler way to share state globally across your app.


