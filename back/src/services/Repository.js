//!Capa intermedia entre SERVICIOS basico y el DAO
export default class Repository {
  constructor(dao, model) {
    this.dao = dao;
    this.model = model;
  }
  //!No se sabe de cual DAO es pero va llama el metodo que tiene...Mientras mantienen el mismo nombre
  get = async (params) => {
    return this.dao.get(params, this.model);
  };
  save = async (data) => {
    return this.dao.insert(data, this.model);
  };
}
