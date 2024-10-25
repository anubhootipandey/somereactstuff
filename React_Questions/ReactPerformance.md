/*------------------------React Performance--------------------------*/


1. What techniques can be used to improve performance in a React application?

--> Techniques include using React.memo, useMemo, useCallback, lazy loading, code-splitting, and avoiding unnecessary re-renders.


2. How does React’s reconciliation algorithm work?

--> React’s reconciliation algorithm (also called the Virtual DOM) efficiently updates the UI by comparing the current and previous DOM and only updating the parts that changed, rather than re-rendering the whole page.


3. How can you lazy load components in React?

--> Use React.lazy to load components only when needed, reducing the initial load time of the app.


4. What is code-splitting in React, and how is it achieved?

--> Code-splitting allows you to split your app into smaller chunks that load as needed. This is done using React.lazy and Suspense, which helps reduce the initial loading time by only loading the parts of the app when they are required.

