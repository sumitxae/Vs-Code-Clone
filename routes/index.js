var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir("../",{encoding:'utf-8'},(e,data)=>{  
      fs.readdir("./Files",{encoding:'utf-8',withFileTypes:false},(err,files)=>{
        res.render('index',{files,data});
      })
  })
});

module.exports = router;
