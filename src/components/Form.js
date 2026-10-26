
import React from "react";
import Card from "./Card";

function Form() {
  return (
    <Card>
      <h2>Form</h2>

      <form id="info-form">
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          placeholder="Enter your full name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />

        <label htmlFor="password_confirmation">
          Confirm Password
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          placeholder="Confirm your password"
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default Form;
