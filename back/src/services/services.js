import MongoDao from "../model/MongoDao.js";
import UserService from "./users.js";
import config from "../config/config.js";

let dao;
switch (config.app.persistence) {
  case "MONGO":
    dao = new MongoDao(config.mongo);
    break;

  default:
    break;
}
export const userService = new UserService(dao);
//export const productService = new ProductService(dao);
