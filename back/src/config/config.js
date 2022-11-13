import dotenv from "dotenv";
dotenv.config();

export default {
  app: {
    persistence: process.env.PERSISTENCE,
  },
  mongo: {
    /* Se no conecta en una db conecta a la db del pc */
    url: process.env.MONGO_URL || "mongodb://localhost:27017/baseFinal",
  },
};
