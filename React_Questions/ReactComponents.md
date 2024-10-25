/*------------------------React Components--------------------------*/


1. What is the difference between functional and class components in React?

--> Functional components are written as JavaScript functions. They are simple, mainly used to display UI, and can use hooks (like useState and useEffect) to manage state and side effects.
Class components are written using ES6 classes. They use this.state to manage state and this.setState() to update it. They have lifecycle methods like componentDidMount() for handling side effects, but are now used less since functional components with hooks became more popular.


2. What is a pure component in React?

--> A pure component is a type of component that only re-renders if its props or state change. It automatically checks if the input (props) has changed, and if not, it prevents unnecessary re-rendering, which improves performance.


3. How do you pass data between components in React?

--> To pass data between components, you use props. You pass props from a parent component to a child component like this:

<ChildComponent name="John" />
In the child component, you can access the name prop and display or use it.


4. What are props, and how are they used in React components?

--> Props are short for "properties" and are used to pass data from one component to another, typically from parent to child. They are like function arguments and help to make components reusable. In a child component, props are read-only, meaning you cannot modify them directly.


5. What is the children prop in React?

--> The children prop allows you to pass content between the opening and closing tags of a component. 

For example:

<ParentComponent>
  <p>This is a child element.</p>
</ParentComponent>
In the ParentComponent, you can access children to display the passed content. It’s useful for wrapping or nesting content inside components.

