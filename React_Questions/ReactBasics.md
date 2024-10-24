/*------------------------React Basics---------------------------*/

1. What is React, and how does it differ from other JavaScript frameworks?

--> React is a JavaScript library used for building user interfaces, particularly for single-page applications. It helps create interactive and dynamic web pages. Unlike other JavaScript frameworks like Angular or Vue, React focuses only on the view layer (the part users see and interact with). It's often combined with other tools to handle things like state management or routing.


2. What are the main features of React?

--> Component-based: You can break down the UI into reusable components.
JSX: A syntax that looks like HTML but works inside JavaScript.
Virtual DOM: React uses a lightweight copy of the real DOM to improve performance by updating only the changed parts of the page.
One-way data flow: Data flows from parent to child components, making the app more predictable.
Hooks: They allow you to manage state and side effects in functional components.


3. What is JSX, and why is it used in React?

--> JSX is a syntax extension that looks like HTML but is written inside JavaScript. It allows developers to write UI code more easily and intuitively. Instead of using JavaScript functions to create elements, JSX allows us to write what looks like HTML, which React then converts to JavaScript.


4. Can browsers understand JSX directly? How does it get rendered?

--> No, browsers can’t understand JSX directly. JSX needs to be transformed into regular JavaScript using tools like Babel before it can run in the browser. React uses this transformed JavaScript to create elements and render them on the page.


5. What are components in React?

--> Components are the building blocks of a React application. They are reusable, self-contained pieces of UI that can manage their own content, logic, and styling. There are two types of components: functional components (written as functions) and class components (written as ES6 classes).

