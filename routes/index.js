var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir("../",(e,data)=>{  
      fs.readdir("./Files",{withFileTypes:true},(err,files)=>{
        res.render('index',{files,data});
      })
  })
});

module.exports = router;
