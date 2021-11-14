const mongodb = require("mongodb")
const mongoCt = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const sql = "obj"
let open = ({
    dbName = sql,
    collectionName,
    url = "mongodb://127.0.0.1:27017"
}) => new Promise((resolve, reject) => {
    mongoCt.connect(url, (err, client) => {
        if (err) {
            reject(err)
        } else {
            const db = client.db(dbName);
            const collection = db.collection(collectionName);
            resolve({
                collection,
                client,
                ObjectId
            })
        }
    })
})

let findList = ({
    collectionName,
    _page,
    _limit,
    _sort,
    q,
    _name
}) => new Promise((resolve, reject) => {
    open({
        collectionName
    }).then(({
        collection,
        client
    }) => {
        const reg = q ? {
            [_name]: new RegExp(q, "g")
        } : {};
        collection.find(reg, {
            sort: {
                [_sort]: 1
            },
            skip: _page * _limit,
            limit: _limit - 0
        }).toArray((err, result) => {
            if (!err && result.length > 0) {
                resolve({
                    err: 0,
                    title: "读取数据成功",
                    data: result
                })
            } else {

                reject({
                    err: 1,
                    title: '数据读取失败'
                })
            }
            client.close();
        })
    }).catch((err, client) => {
        reject({
            err: 1,
            title: "兜库失败"
        })
    })
})

let findDetail = ({
    collectionName,
    _id
}) => new Promise((resolve, reject) => {
    open({
        collectionName
    }).then(({
        collection,
        client
    }) => {
        if (_id && _id.length === 24) {
            collection.find({
                _id: ObjectId(_id)
            }).toArray((err, result) => {
                !err && result.length === 0 ? reject({
                    err: 2,
                    title: "未查询到数据"
                }) : resolve({
                    err: 0,
                    title: "数据读取成功",
                    data: result
                })
                client.close();
            })
        } else {
            reject({
                err: 1,
                title: "id格式不正确"
            })
            client.close();
        }
    })
})

let deleteRecord = ({
    collectionName,
    _id
}) => new Promise((resolve, reject) => {
    open({
        collectionName
    }).then(({
        collection,
        client
    }) => {
        if (_id && _id.length === 24) {
            collection.deleteOne({
                _id: ObjectId(_id)
            }, (err, result) => {
                if (result.deletedCount) {
                    resolve({
                        err: 0,
                        title: "数据删除成功"
                    })
                } else {
                    reject({
                        err: 1,
                        title: "数据删除失败"
                    })

                }
                client.close();
            })

        } else {
            reject({
                err: 1,
                title: "id格式不正确"
            })
            client.close();
        }
    })
})

let auditNews = ({
    collectionName,
    _id,
    update
}) => new Promise((resolve, reject) => {
    open({
        collectionName
    }).then(({
        collection,
        client
    }) => {
        if (_id && _id.length === 24) {
            collection.updateOne({
                _id: ObjectId(_id)
            }, {
                $set: {
                    "audit": update
                }
            }, (err, result) => {
                if (result.modifiedCount) {
                    resolve({
                        err: 0,
                        title: "文章审核通过"
                    })
                } else {
                    reject({
                        err: 1,
                        title: "文章审核未通过"
                    })
                }
                client.close();
            })

        } else {
            reject({
                err: 1,
                title: "id格式不正确"
            })
            client.close();
        }
    })
})

let listlength = ({
    collectionName,
    q,
    _name
}) => new Promise((resolve, reject) => {
    open({
        collectionName
    }).then(({
        collection,
        client
    }) => {
        const reg = q ? {
            [_name]: new RegExp(q, "g")
        } : {};
        collection.find(reg, ).toArray((err, result) => {
            if (!err && result.length > 0) {
                resolve({
                    err: 0,
                    title: "读取数据成功",
                    data: result.length
                })
            } else {
                reject(err)
            }
            client.close();
        })
    }).catch((err, client) => {
        reject({
            err: 1,
            title: "兜库失败"
        })
    })
})


exports.open = open;
exports.findList = findList;
exports.findDetail = findDetail;
exports.deleteRecord = deleteRecord;
exports.auditNews = auditNews;
exports.listlength = listlength;