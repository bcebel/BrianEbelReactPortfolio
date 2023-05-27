import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <p>
        <form>
          Name
          <input
            type="text"
            oninvalid="alert('Must contain 6 or more characters');"
            pattern=".{6,}"
          ></input>
          <input type="text" required></input>
          Email
          <input type="text" required></input>
          Message
          <input type="text" required></input>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem,
          quis molestie urna. Aliquam semper ultrices varius.
          <input type="submit"></input>
        </form>
      </p>
    </div>
  );
}
