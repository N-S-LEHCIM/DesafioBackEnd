import mongoose from "mongoose";

let Schema = mongoose.Schema;

export default class User {
  /* 
  "static get", es una funcion que devulve algo que se puede aceder como una propriedad
  */
  static get model() {
    return "Users";
  }
  static get schema() {
    return {
      first_name: String,
      last_name: String,
      email: String,
    };
  }
}
