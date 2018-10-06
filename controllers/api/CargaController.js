/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:api:CargaController';
const debug = require('debug')(SOURCE);

module.exports = {
    index: (req, res, next) => {
        return res.render('admin/carga');
    },
    carga: (req, res, next) => {
        console.log(req.body);
        console.log(req.file);
        // File is on req.file
    }
};