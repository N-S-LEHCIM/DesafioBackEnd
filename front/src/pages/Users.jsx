import React, { useEffect } from "react";
import axios from "axios";

const Users = () => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    let result = await axios("http://localhost:8080/users");
    console.log(result);
  };
  return <div>HOLA DESDE USERS </div>;
};

export default Users;
