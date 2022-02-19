var express = require('express');
var router = express.Router();

const axios=require('axios');

// categories
router.get('/', function(req, res, next) {

  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    res.render('category', { pposts: response.data});
  }).catch((err)=>{
    console.log("opps ther is no data")
  })
});

module.exports = router;
