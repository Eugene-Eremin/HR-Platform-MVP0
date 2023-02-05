const ApiError = require('../error/api-error');
const uuid = require('uuid')
const path = require('path')


class testcontr2 {
    async test(req, res, next) {
        try {
            const { file } = req.files
            file.mv(path.resolve(__dirname, '..', 'static', 'name'))
            console.log(file)
            return res.json("ok")
        } catch (e) {
            return next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new testcontr2()