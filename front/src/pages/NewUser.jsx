import React from "react";
import { useState } from "react";
import axios from "axios";

const NewUser = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleInputChange = (evt) => {
    console.log(evt.target.name);
    setInput((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(input);
    try {
      let result =await axios("http://localhost:8080/users", {
        method: "POST",
        data: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Registrar nuevo usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          name="first_name"
          value={input.first_name}
          onChange={(evt) => handleInputChange(evt)}
        />
        <label>Apellido</label>
        <input
          name="last_name"
          value={input.last_name}
          onChange={(evt) => handleInputChange(evt)}
        />
        <label>Email</label>
        <input
          name="email"
          value={input.email}
          onChange={(evt) => handleInputChange(evt)}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default NewUser;
