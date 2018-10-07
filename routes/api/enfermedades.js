/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:routes:api:enfermedades';
const debug = require('debug')(SOURCE);
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const DatosController = require('../../controllers/api/DatosController');

const routes = {
    "/": {
        GET: {
            middleware: [
                DatosController.index
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