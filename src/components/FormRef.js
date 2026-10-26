
import React, { useRef } from "react";
import Card from "./Card";

function FormRef() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmationRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmation = confirmationRef.current.value;

    if (password !== confirmation) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Form submitted successfully!\nName: ${fullName}\nEmail: ${email}`);
  };

  return (
    <Card>
      <h2>Form using useRef</h2>

      <form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name</label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          ref={fullNameRef}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />

        <label htmlFor="password_confirmation">
          Confirm Password
        </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          ref={confirmationRef}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormRef;
