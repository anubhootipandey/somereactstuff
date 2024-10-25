/*------------------------Error Boundaries--------------------------*/


1. What are error boundaries in React?

--> Error boundaries are special components in React that catch JavaScript errors in child components during rendering and show a fallback UI instead of crashing the app.


2. How do error boundaries work, and when would you use them?

--> They catch errors during rendering, lifecycle methods, or constructors of child components. Use them to prevent crashes and display a fallback UI when something goes wrong.


3. Can you catch errors in event handlers with error boundaries?

--> No, error boundaries don’t catch errors in event handlers. You need to use try-catch in event handlers for error handling.

