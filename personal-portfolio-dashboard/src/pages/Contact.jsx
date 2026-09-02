import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus(true);
  }

  return (
    <div>
      <p> Please fill this form to contact us.</p>
      {""}
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
        ></input>
        <br></br>
        <label>email:</label>{" "}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="text"
        ></input>
        <br></br>
        <label>message:</label>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          type="text"
        ></input>
        <br></br>
        <button type="submit"> Submit </button>
      </form>

      {status && (
        <div>
          <p>
            {" "}
            Hi {name}, We've recieved your message. Thanks for contacting.{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
