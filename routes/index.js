// const { default: axios } = require('axios');
const { response } = require('express');
var express = require('express');
var router = express.Router();
const axios=require('axios');
const url ='https://dummyjson.com/products' 

/* GET products. */


router.get('/', async (req, res, next) => {
  try {
    let response = await axios.get('https://dummyjson.com/products');

    res.render('index', {
      pposts: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
});

router.get('/products', async (req, res, next) => {
  try {
    let response = await axios.get('https://dummyjson.com/products');

    res.render('index', {
      pposts: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
});


router.get('/products/search', async (req, res, next) => {
  try {
    const query = req.query.q;
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );

    res.render('search', {
      pposts: response.data.products,
    });
  } catch (err) {
    console.log(err);
    res.send('opps no data')
  }
});





router.get('/products/:id', async (req, res, next) => {
  try {
    const proid = req.params.id;
    let response = await axios.get(
      `https://dummyjson.com/products/${proid}`
    );

    res.render('single_product', {
      single_product: response.data,
    });
  } catch (err) {
    console.log(err);
    res.send('opps ther is no data')
  }
});




module.exports = router;
 