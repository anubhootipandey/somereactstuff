import React, { useEffect, useState } from "react";

const formItems = [
  {
    type: "text",
    label: "Name",
    name: "name",
  },
  {
    type: "number",
    label: "Age",
    name: "age",
  },
  {
    type: "checkbox",
    label: "Subscribe to Newsletter",
    name: "subscribe",
  },
];

const DynamicFormBuilder = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Successfully :", formData);
  };

  const handleDelete = () => {
    setFormData({});
    localStorage.removeItem('formData');
    console.log('Form Data Cleared');
  };


  return (
    <div className="flex justify-center mt-16">
      <form onSubmit={handleSubmit} className="p-5 shadow-lg bg-teal-100">
        <h1 className="text-4xl text-center font-bold text-teal-600 mb-6">
          Newsletter
        </h1>
        {formItems.map((item) => (
          <div key={item.name}>
            <label className="px-6 text-[18px] font-semibold text-teal-600">
              {item.label}
            </label>
            <input
              type={item.type}
              name={item.name}
              value={
                item.type !== "checkbox" ? formData[item.name] || "" : undefined
              }
              checked={
                item.type === "checkbox"
                  ? formData[item.name] || false
                  : undefined
              }
              onChange={handleChange}
              className="mb-3 text-[18px] border-b-2 border-teal-200 text-teal-700 bg-teal-100 outline-none hover:outline-none"
            />
          </div>
        ))}
        <button
          type="submit"
          className="my-4 mx-2 bg-teal-600 text-white font-semibold text-xl px-4 py-2"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="my-4 mx-2 bg-teal-800 text-white font-semibold text-xl px-4 py-2"
        >
          Clear Data
        </button>
      </form>

      <div className="ml-8 mt-16">
        <h2 className="text-2xl font-bold text-teal-600">Saved Data:</h2>
        <p>
          <strong>Name:</strong> {formData.name || "N/A"}
        </p>
        <p>
          <strong>Age:</strong> {formData.age || "N/A"}
        </p>
        <p>
          <strong>Subscribed:</strong> {formData.subscribe ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;
