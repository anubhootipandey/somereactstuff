/*------------------------Portals--------------------------*/


1. What are React portals, and when would you use them?

--> React portals allow you to render components outside the main React app root. Use them for things like modals or tooltips where the component needs to appear above other elements.


2. How do you create a portal in React?

--> You use ReactDOM.createPortal to render a component into a different DOM node, like this:

ReactDOM.createPortal(<MyComponent />, document.getElementById('modal-root'));

