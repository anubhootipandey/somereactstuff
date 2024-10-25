/*------------------------Prop Types--------------------------*/


1. What is the PropTypes library in React, and why is it useful?

--> PropTypes help you check the type of props passed to components, ensuring they receive the correct data.


2. How do you define and enforce prop types in React components?

--> You can import PropTypes and define the expected types for each prop in your component, like this:

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

