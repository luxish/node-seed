"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});


// Logger middleware used to print minimal information about the requests.
const logger = async (req, res, next) => {
    await next();
    console.log(req.method + " " + req.url + " " + res.statusCode);
};
exports.default = logger;