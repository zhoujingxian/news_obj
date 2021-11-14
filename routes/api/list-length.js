const router = require('express').Router()
const mgdb = require("../../ults/mgdb")

router.get("/:newsname", (req, res, next) => {
    mgdb.listlength({
        collectionName: req.params.newsname,
        q: req.paramsList.q,
        _name: req.paramsList._name
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router