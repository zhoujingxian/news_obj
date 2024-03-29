const global = require("../config/global")
const {
    verify
} = require("./jwt")
module.exports = (req, res, next) => {
    console.log(req.url,"req.url")
    req.paramsList = {
        _page: req.query._page || req.body._page || req.headers._page || global._page,
        _limit: req.query._limit || req.body._limit || req.headers._limit || global._limit,
        _sort: req.query._sort || req.body._sort || req.headers._sort || global._sort,
        q: req.query.q || req.body.q || req.headers.q || global.q,
        _id: req.query._id || req.body._id || req.headers._id || null,
        _name: req.query._name || req.body._name || req.headers._name || global._name,
        update: req.query.update || req.body.update || req.headers.update || null
    }

    if (/login|reg|logout|index|follow|column|article|mydoc|banner|home|admin/.test(req.url)) {
        next()
    } else {
        const token = req.query.token || req.body.token || req.headers.token
        verify(token).then(decode => {
            req.decode = decode; 
            next();
        }).catch(err => {
            res.send({
                err: 1,
                title: "token已过期" + err
            })
        })
    } 
}