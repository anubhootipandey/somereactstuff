/*------------------------Component Lifecycle (Class Components)--------------------------*/


1. What are the lifecycle methods in React class components?

--> Lifecycle methods are functions that let you run code at different stages of a component’s life:

componentDidMount: Runs after the component is first added to the DOM.
componentDidUpdate: Runs after the component updates (e.g., when props or state change).
componentWillUnmount: Runs before the component is removed from the DOM.


2. What is the difference between componentDidMount, componentDidUpdate, and componentWillUnmount?

--> componentDidMount: Called once, right after the component is rendered for the first time. Used for initial setup (e.g., fetching data).
componentDidUpdate: Called after each update (when props or state change). Used to react to changes.
componentWillUnmount: Called before the component is removed. Used for cleanup (e.g., removing event listeners or cancelling network requests).


3. How does React’s component lifecycle help in optimizing component rendering?

-->React’s lifecycle methods help in controlling when a component should update or render. By using methods like shouldComponentUpdate or PureComponent, React avoids unnecessary re-renders, which improves performance and makes the app faster.


