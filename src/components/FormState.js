
import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      alert("Passwords do not match!");
      return;
    }

    alert(
      `Form submitted successfully!\nName: ${formData.full_name}\nEmail: ${formData.email}`
    );
  };

  return (
    <Card>
      <h2>Form using useState</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="password_confirmation">
          Confirm Password
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
