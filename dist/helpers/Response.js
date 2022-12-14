"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class payload {
    static success(res, data = null, message, status) {
        res.status(status).
            json(data ?
            {
                response: data.length,
                data: data,
                status: status,
                message: message
            } :
            {
                status: status,
                message: message
            });
    }
    static fail(res, err, status) {
        res.status(status).
            json({
            status,
            err
        });
    }
}
exports.default = payload;
