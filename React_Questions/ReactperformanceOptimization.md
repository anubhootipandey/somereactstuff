/*------------------------React Performance Optimization--------------------------*/


1. How can you use the useMemo and useCallback hooks to optimize performance?

--> useMemo: Prevents recalculating expensive operations unless dependencies change.
useCallback: Prevents recreating functions unless dependencies change, reducing unnecessary re-renders.


2. What is component re-rendering, and how can you minimize it in React?

--> Component re-rendering happens when a component updates and renders again. Minimize it using React.memo, useMemo, useCallback, and managing state wisely.


3. How does the shouldComponentUpdate method help in optimizing performance?

--> It allows class components to decide whether they need to re-render. If it returns false, the component will not re-render, saving performance.

