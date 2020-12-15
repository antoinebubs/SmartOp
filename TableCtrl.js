// Imports"
const e = require('express');
var db = require('./dbconnection');

//implement
module.exports =
{

    getinfo: function (req, res) {


        db.query("SELECT * FROM bdd", function (err, result) {
            if (err) {
                return res.json(err);
            }
            else {
                return res.json(parseResult(result));
            }
        });
    },

    findname: function (req, res) {
        var name = req.body.name.toUpperCase();
        db.query("SELECT * FROM bdd WHERE surgeon =?", [name], function (err, result) {
            if (err) {
                return res.json(err);
            }
            else {

                return res.json(parseResult(result));
            }
        })
    }
}
function parseResult(arg) {
    var board = [];

    arg.forEach(element => {
        var ishere = false;

        for (var i = 0; i < board.length; i++) {
            if (board[i].name == element.surgeon) {
                ishere = true;
                board[i].interventionCount += 1;
                board[i].nurse.push(element.nurse1, element.nurse2);
                board[i].specialty.push(element.specialty);
                board[i].anesthsiste.push(element.anesthsiste);
                board[i].roomNumber.push(element.roomNumber);
                board[i].intervention.push(element.intervention);
            }
        }

        if (!ishere) {
            board.push({ name: element.surgeon, interventionCount: 1, nurse: [element.nurse1, element.nurse2], specialty: [element.specialty], anesthsiste: [element.anesthsiste], roomNumber: [element.roomNumber], intervention: [element.intervention]})
        }
    });

    for (var i = 0; i < board.length; i++) {

        board[i].nurse = favocur(board[i].nurse);
        board[i].specialty = favocur(board[i].specialty);
        board[i].anesthsiste = favocur(board[i].anesthsiste);
        board[i].roomNumber = favocur(board[i].roomNumber);
        board[i].intervention = favocur(board[i].intervention);
    }
    return board;
}

function favocur(arg) {
    var mf = 1;
    var m = 0;
    var item;

    for (var i = 0; i < arg.length; i++) {
        for (var j = i; j < arg.length; j++) {
            if (arg[i] == arg[j] && arg[i] != "") {
                m++;
            }

            if (mf <= m) {
                mf = m;
                item = arg[i];
            }
        }

        m = 0;
    }
    return item;

}
