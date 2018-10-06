/* jshint node: true */
'use strict';

const SOURCE = 'tuteleton:controllers:ErrorController';
const debug = require('debug')(SOURCE);

class ErrorController {
    constructor(req, res, params) {
        this.req = req;
        this.res = res;
        this.params = params;
    }

    serverError() {
        let source = this.params.source || "app";
        debug(`Unhandled error ${this.params.err}`);
        return this.res.status(500).json({
            error: {
                message: 'Unknown error',
                source: source,
                details: this.params.err.stack
            }
        });
    }
}

module.exports = ErrorController;