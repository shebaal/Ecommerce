// const { default: axios } = require('axios');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const axios=require('axios');
const url ='https://dummyjson.com/products' 

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    res.render('index', { pposts: response.data});
  }).catch((err)=>{
    console.log("opps ther is no data")
  })
});




module.exports = router;
 