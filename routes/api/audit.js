const express = require('express')
const router = express.Router();
const mgdb = require("../../ults/mgdb");

router.get('/:newsname/:_id', (req, res, next) => {
    mgdb.auditNews({
        collectionName: req.params.newsname,
        _id: req.params._id,
        update: req.paramsList.update
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router