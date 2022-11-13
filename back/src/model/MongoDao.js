import mongoose from "mongoose";
import User from "./Users.js";

export default class MongoDao {
  constructor(mongoConfis) {
    this.mongoose = mongoose
      .connect(mongoConfis.url, { useNewUrlParser: true })
      .catch((e) => {
        /* Muestra el error u sale de la app(el servidor sale) */
        console.log(e);
        process.exit();
      });
    const timestamp = {
      timestamp: { createdAt: "created_at", updatedAt: "update_at" },
    };
    const userSchema = mongoose.Schema(User.schema, timestamp);
    /* 
       const productsSchema = mongoose.Schema(Product.schema, timestamp);
       !Al invez de crear un dao completo para products solamente creo el modelo intancio aqui y paso al dao general 
    */
    this.models = {
      [User.model]: mongoose.model(User.model, userSchema),
      /* 
      [Product.model]: mongoose.model(Product.model, productsSchema)
      !Aqui es el dao general, y aqui product va tener todas las operaciones del dao
      */
    };
  }
  get = async (options, entity) => {
    //Dentro de los models que hay en el dao, exite la entity que ,e estan diciendo, si no levanto un nuevo error
    if (!this.models[entity]) throw new Error("Entity not found in models");
    let results = await this.models[entity].find(options);
    return results.map((result) => result.toObject());
  };
  insert = async (document, entity) => {
    if (!this.models[entity]) throw new Error("Entity not found in models");
    try {
      //!De los modelos acedo  la entidad, esa entidad la instancio apartir do objeto que me pasan
      let instance = new this.models[entity](document);
      let result = await instance.save();
      return result ? result.toObject() : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
}
