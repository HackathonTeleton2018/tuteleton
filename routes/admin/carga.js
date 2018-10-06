/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:routes:admin:carga';
const debug = require('debug')(SOURCE);
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const CargaController = require('../../controllers/api/CargaController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
});

var routes = {
    "/": {
        GET: {
            middleware: [
                CargaController.index
            ]
        },
        POST: {
            middleware: [
                upload.single('archivo'),
                CargaController.carga
            ]
        }
    }
};

_.forOwn(routes, function (methods, endpoint) {
    _.forOwn(methods, function (details, method) {
        method = method.toLowerCase();
        if (typeof router[method] == "function") {
            debug("Cargando endpoint %s#%s", endpoint, method);
            router[method](endpoint, details.middleware);
        }
    });
});

module.exports = router;