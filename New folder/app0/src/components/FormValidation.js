import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if(Object.keys(errors).length === 0){
        console.log({name, email, password});
        console.log("Form submitted successfully!");
    }

    setErrors(errors);
  };

  const validate = () => {
    let errors = {};
    if(!name) errors.name = "Name is required!";
    if(!email) errors.email = "Email is required!";
    return errors;
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
        <br />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
