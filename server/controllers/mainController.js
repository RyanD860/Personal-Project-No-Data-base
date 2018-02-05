const axios = require("axios");
const baseURL =
  "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation";
let makeup = [];
let haveList = [];
let wantList = [];
let id = 161;

axios.get(`baseURL`).then(res => {
  makeup = res.json(response.data);
});

const retrieveMakeup = (req, res, next) => {
  axios
    .get(`${baseURL}`)
    .then(response => {
      makeup = res.json(response.data);
    })
    .catch(console.log);
};
const retrieveHave = (req, res, next) => {
  axios
    .get(`${baseURL}`)
    .then(response => {
      makeup = res.json(haveList);
    })
    .catch(console.log);
};
const retrieveWant = (req, res, next) => {
  axios
    .get(`${baseURL}`)
    .then(response => {
      makeup = res.json(wantList);
    })
    .catch(console.log);
};

const postmakeupHave = (req, res, next) => {
  haveList.push(req.body);
};

const postmakeupWant = (req, res, next) => {
  wantList.push(req.body);
};

const addNewItem = (req, res, next) => {
  haveList.push({
    id: id,
    image_link: req.body.image_link,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price
  });
  id++;
};

const changePrice = (req, res, next) => {
  const updateID = req.params.id;
  let index = haveList.findIndex(item => item.id == updateID);

  haveList[index] = {
    image_link: haveList[index].image_link,
    name: haveList[index].name,
    category: haveList[index].category,
    price: req.body.price
  };

  makeup = res.json(haveList);
};

const removeMakeupFromWant = (req, res, next) => {
  console.log(wantList);
  wantList = wantList.filter(item => item.id != req.params.id);
  console.log(wantList);
  res.json(wantList);
};

module.exports = {
  retrieveMakeup: retrieveMakeup,
  retrieveHave: retrieveHave,
  retrieveWant: retrieveWant,
  postmakeupHave: postmakeupHave,
  addNewItem: addNewItem,
  postmakeupWant: postmakeupWant,
  changePrice: changePrice,
  removeMakeupFromWant: removeMakeupFromWant
};
