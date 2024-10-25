/*------------------------Memoization and Optimization--------------------------*/


1. What is React.memo, and how does it help in optimizing React applications?

--> React.memo is a higher-order component that helps optimize performance by only re-rendering a component when its props change, preventing unnecessary renders.


2. What is the difference between React.memo and useMemo?

--> React.memo: Optimizes entire components by preventing re-renders.
useMemo: Memoizes the result of a calculation so it doesn’t get recalculated on every render.


3. How do you prevent unnecessary re-renders in React?

--> You can prevent unnecessary re-renders using React.memo, useMemo, useCallback, and managing props/state efficiently.


4. What is the purpose of the useCallback hook, and how does it help optimize performance?

--> useCallback memoizes a function, preventing it from being re-created on every render unless its dependencies change. This helps prevent unnecessary re-renders of child components that rely on that function.

