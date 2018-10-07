/* jshint node: true */
"use strict";

const SOURCE = "tuteleton:controllers:api:CargaController";

const parseFile = require("../../system/parseFile");

const Consolidacion = require("../../models").Consolidacion;

module.exports = {
  index: (req, res, next) => {
    return res.render("admin/carga");
  },
  carga: (req, res, next) => {
    parseFile(req.file.originalname, req.file.buffer)
      .then(data => console.log(data[0]) || Consolidacion.agregarDonativos(data))
      .then(x => res.send(x))
      .catch(x => res.send(x))
  }
};
