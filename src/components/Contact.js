import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    alert("Submitted successful.");
    e.preventDefault();
  }

  return (
    <div className=" flex box-sizzing-border-box container m-7 divide-x-4 divide-black divide-opacity-25">
      <div className="flex-1">
        <h2 className="text-xl font-semibold font-sans">Our location</h2>
        <p>874/322 C &#38; B road barisal</p>
      </div>
      {/* contact form */}
      <form onSubmit={handleSubmit} className="mx-4 flex-1 pl-6">
        <fieldset>
          <legend className="text-black text-xl font-bold font-font-head">
            Contact Us
          </legend>
          <legend className="font-font-head">Name:</legend>
          <input
            className="outline-none bg-gray-500 w-full rounded-lg "
            command
            type="text"
            name={name}
            value={name}
            onChange={handleNameChange}
          />
          <br />
          <legend className="font-font-head">Email:</legend>
          <input
            className="outline-none bg-gray-500 w-full rounded-lg"
            type="text"
            name={email}
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <legend className="font-font-head">Message:</legend>
          <textarea
            className="outline-none bg-gray-500 w-full h-2/4 rounded-lg "
            type="text"
            name={message}
            value={message}
            onChange={handleMessageChange}
          />
        </fieldset>
        <input
          className="text-grey-500 bg-pink-800 font-font-head p-3 my-2 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Contact;
