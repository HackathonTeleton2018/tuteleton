/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:CargaController';
const debug = require('debug')(SOURCE);

const parseFile = require('../../system/parseFile')

module.exports = {
    index: (req, res, next) => {
        return res.render('admin/carga');
    },
    carga: (req, res, next) => {
        parseFile(req.file.originalname, req.file.buffer)
          .then(data => {
            res.send(data)
          })
    }
};
