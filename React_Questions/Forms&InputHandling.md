/*------------------------Forms and Input Handling--------------------------*/


1. How do you handle form inputs in React?

--> Use controlled components where the form input's value is managed by React's state using useState and onChange events.


2. What is the difference between controlled and uncontrolled components in the context of forms?

--> Controlled components: The form input is controlled by React’s state.
Uncontrolled components: The form input is handled by the DOM itself, and you use refs to access the value.


3. How do you handle form submission in React?

--> Handle form submission using the onSubmit event and prevent the page from refreshing by calling event.preventDefault().


4. How do you validate form inputs in React?

--> You can validate inputs by checking the values in the form submission handler, and show error messages if the inputs don’t meet the conditions.


