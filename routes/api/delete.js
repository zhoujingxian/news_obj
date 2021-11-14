const express = require("express");
const router = express.Router();
const mgdb = require("../../ults/mgdb");

router.delete("/:newsname/:_id", (req, res, next) => {
    mgdb.deleteRecord({
        collectionName: req.params.newsname,
        _id: req.params._id
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
})

module.exports = router;