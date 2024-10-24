/*------------------------State and Props--------------------------*/

1. What is state in React, and how is it different from props?

--> State is like a special memory for a component. It holds data that can change over time (e.g., user input, a counter, etc.).
Props are data passed from one component to another (usually from parent to child) and are read-only. The key difference is that state is managed within a component and can change, while props are passed into a component and don’t change.


2. How do you manage the state in a functional component?

--> You manage state in a functional component using the useState hook. It lets you add and update state. 

For example:
const [count, setCount] = useState(0);
Here, count is the state variable, and setCount is the function used to update it.


3. What is the purpose of setState() in React?

--> In React, setState() is used to update the state of a component. When state is updated with setState(), React re-renders the component to reflect the new data. It’s only used in class components.


4. How do you pass props from a parent component to a child component?

--> You pass props by adding them as attributes to the child component when you call it. 

For example:

<ChildComponent name="John" />
In the child component, you access props.name to use the data:

const ChildComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};


5. Can you explain controlled and uncontrolled components in React?

--> Controlled components: The component’s state controls the value of the input field. You manage the input using React’s state and update the state with each change. Example: An input field where the value is linked to state.

Uncontrolled components: The DOM itself controls the input’s value. You don’t use React’s state to manage the value; instead, you access it using a ref when needed.


