const { isUtf8 } = require('buffer');
var express = require('express');
var router = express.Router();
const fs = require('fs');

let rootName = "Vs_Code";

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir("./Files",{withFileTypes:true},(err,files)=>{
    res.render('index',{files,rootName});
  })
});

router.get('/createfile', function(req, res) {
  fs.writeFile(`./Files/${req.query.inputname}`,"",(err)=>{
    if (err) throw err;
    res.redirect("/");
  })
});

router.get('/createfolder', function(req, res) {
  fs.mkdir(`./Files/${req.query.inputname}`,(err)=>{
    if (err) throw err;
    res.redirect("/");
  });
});

router.get('/openfile/:filename', function(req, res, next) {
  fs.readdir("./Files",{withFileTypes:true},(err,files)=>{
    fs.readFile(`./Files/${req.params.filename}`,{encoding:'utf-8'},(err,data)=>{
      res.render("openfile",{files,filename:req.params.filename,data,rootName})
    })
  })
});

router.get('/openfile/:filename', function(req, res, next) {
  fs.readdir("./Files",{withFileTypes:true},(err,files)=>{
    res.render('openfile',{files,rootName,filename: req.params.filename});
  })
});

router.post('/save/:filename',(req,res)=>{
  
})

module.exports = router;