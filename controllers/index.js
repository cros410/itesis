'use strict'
const auth = require("../auth/auth");
const itesis = require("../model/itesis");
const config = require("../config/config.json");
const dblink = config.link;
const mongojs = require("mongojs");
var db = mongojs(dblink, ['itesis']);

function login(req, res) {
    let user = req.body;
    
    db.itesis.update({ _id: mongojs.ObjectId('588b8369734d1d20b6680265') },
        {
            $push: {
                alumnos: {
                    cod: "12345678",
                    pwd: "12345678"
                }
            }
        }, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })

    /*db.itesis.aggregate(
        { $unwind: '$usuarios' },
        { $match: { 'usuarios.cod': "20122284" } },
        { $group: { _id: '$_id', user: { $push: { cod: '$usuarios.cod', pwd: '$usuarios.pwd' } } } },
        function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                res.send(docs);
            }
        })
    /*


    /*if (user.user && user.pwd) {
        res.status(200).send({ token: auth.createToken(user), name: "Christian" });
    } else {
        res.status(200).send({ cod: 2, msg: "Completar datos" });
    }*/
}

module.exports = {
    login
}