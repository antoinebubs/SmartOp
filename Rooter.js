// Imports
var express = require('express');
const { get } = require('http');
var TableCtrl = require('./TableCtrl');
//Router
exports.router = (function() {
    var Rooter = express.Router();

    Rooter.route('/getinfo').get(TableCtrl.getinfo);
    Rooter.route('/findname').get(TableCtrl.findname);
    return Rooter
})();