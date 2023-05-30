import React from "react";
import "../../styles/form.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        <form>
          <p>Email</p>
          <input type="email" placeholder=" " required />
          <p class="error-message">Please enter a valid e-mail address</p>
          Name
          <input type="text" placeholder=" " minlength="2" required />
          <p class="error-message">Please enter a valid name</p>
          Message
          <input type="text" placeholder=" " minlength="10" required />
          <p class="error-message">10 Characters Minimum</p>
          <input type="submit"></input>
        </form>
      </p>
    </div>
  );
}
