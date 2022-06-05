const express = require("express");
const mongoose = require('mongoose');

var dinfo = [];
var sinfo = [];
var binfo = [];
var pinfo = [];
var setinfo = [];

mongoose.connect("mongodb://localhost:27017/DeliciousCafe");
const app = express();

var info2 = [];
app.set('view engine', 'ejs');
app.use(express.static("public"));


//DB Schema Starts......

const drinkSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  raw: String,
  price: String
});

const Drink = mongoose.model("Drink", drinkSchema);

const snackSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  raw: String,
  price: String
});

const Snack = mongoose.model("Snack", snackSchema);

const burgerSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  raw: String,
  price: String
});

const Burger = mongoose.model("Burger", burgerSchema);

const pizzaSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  raw: String,
  price: String
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

const setMenuSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  raw: String,
  price: String
});

const SetMenu = mongoose.model("SetMenu", setMenuSchema);

//DB Schema Ends......

//DB Input Starts......

// Drinks Input Starts...
const softDrinkes = new Drink({
  _id: 01,
  name: "Soft Drinkes",
  raw: "250ml",
  price: "BDT 30/-"
});
const cloudyLemon = new Drink({
  _id: 02,
  name: "Cloudy Lemon",
  raw: "Lemon, Mint, Sugar, Soda, Ice",
  price: "BDT. 220/-"
});
const blueOcean = new Drink({
  _id: 03,
  name: "Blue Ocean",
  raw: "Pineapple Juice, Coconut Cream, Soda, Ice",
  price: "BDT. 300/-"
});
const thePerfectMilkshake = new Drink({
  _id: 04,
  name: "The Perfect Milkshake",
  raw: "Venilla Ice cream, Red Cherry, Milk, Whipping Cream Top, Crushed Ice",
  price: "BDT. 300/-"
});
const chocolateMilkshake = new Drink({
  _id: 05,
  name: "Chocolate Milkshake",
  raw: "Milk, Chocolate Syrup, Whipping Cream Top, Crushed Ice",
  price: "BDT 320/-"
});
const cappuccino = new Drink({
  _id: 06,
  name: "Cappuccino",
  raw: "Whole Milk, Espresso Shots",
  price: "BDT 220/-"
});
// Drink.insertMany([softDrinkes, cloudyLemon, blueOcean, thePerfectMilkshake, chocolateMilkshake, cappuccino]);
// Drinks Input Ends...

// Snacks Input Starts...
const potatoWedges = new Snack({
  _id: 01,
  name: "Potato Wedges",
  raw: "Cheese, Olive Oil, Potatoes, Garlic Powder ",
  price: "BDT. 110/-"
});
const frenchFries = new Snack({
  _id: 02,
  name: "French Fries",
  raw: "Potatoes, Oil, Sea Salt",
  price: "BDT. 100/-"
});
const cheeseFrenchFries = new Snack({
  _id: 03,
  name: "Cheese French Fries",
  raw: "Cheese, Potatoes, Oil, Sea Salt",
  price: "BDT. 150/-"
});
const friedWonthon = new Snack({
  _id: 04,
  name: "Fried Wonthon",
  raw: "Shrimp, Chicken, Soy Sauce, Wonthon Wrappers, Garlic-Ginger Paste",
  price: "BDT. 180/-"
});
const chickenStrip = new Snack({
  _id: 05,
  name: "Chicken Strip",
  raw: "Chicken Breasts, Butter, Olive Oil, Garlic Paste",
  price: "BDT. 220/-"
});
const chickenPopcorn = new Snack({
  _id: 06,
  name: "Chicken Popcorn",
  raw: "Boneless Chicken Breasts, Lemon Juice, Egges, Butter, Garlic Paste",
  price: "BDT. 220/-"
});
// Snack.insertMany([potatoWedges, frenchFries, cheeseFrenchFries, friedWonthon, chickenStrip, chickenPopcorn]);
// Snacks Input Ends...

// Burgers Input Starts...
const chickenSandwich = new Burger({
  _id: 01,
  name: "Chicken Sandwich",
  raw: "Chicken, White Sauce, Lettuce",
  price: "BDT. 100/-"
});
const clubSandwich = new Burger({
  _id: 02,
  name: "Club Sandwich",
  raw: "Chicken, Egges, White Sauce, Lettuce",
  price: "BDT. 150/-"
});
const grilledChickenCheese = new Burger({
  _id: 03,
  name: "Grilled Chicken Cheese",
  raw: "Grilled Chicken, Cheese White Sauce, Lettuce",
  price: "BDT. 260/-"
});
const chickenBurger = new Burger({
  _id: 04,
  name: "Chicken Burger",
  raw: "Chicken, Onion, Tomato, Burger Sauce, Lettuce",
  price: "BDT. 180/-"
});
const chickenGarlicBurger = new Burger({
  _id: 05,
  name: "Chicken Garlic Burger",
  raw: "Chicken, Garlic, Onion, Tomato, Lettuce",
  price: "BDT. 220/-"
});
const beefBurger = new Burger({
  _id: 06,
  name: "Beef Burger",
  raw: "Beef, Onion, Tomato, Burger Sauce, Lettuce",
  price: "BDT. 220/-"
});
const bbqChickenBurger = new Burger({
  _id: 07,
  name: "BBQ Chicken Burger",
  raw: "BBQ Chicken, Onion, Tomato, Lettuce",
  price: "BDT. 260/-"
});
const bbqBeefBurger = new Burger({
  _id: 08,
  name: "BBQ Beef Burger",
  raw: "BBQ Beef, Onion, Tomato, Burger Sauce, Lettuce",
  price: "BDT. 300/-"
});
const americanBurger = new Burger({
  _id: 09,
  name: "American Burger",
  raw: "Beef, Onion, Tomato, Burger Sauce, Lettuce",
  price: "BDT. 280/-"
});
// Burger.insertMany([chickenSandwich, clubSandwich, grilledChickenCheese, chickenBurger, chickenGarlicBurger, beefBurger, bbqChickenBurger, bbqBeefBurger, americanBurger]);
//Burgers Input Ends...

// Pizza Input Starts...
const pizzaMargarita = new Pizza({
  _id: 01,
  name: "Pizza Margarita",
  raw: "Vegetable, Cheese, Mushroom, Olive, Capsicum",
  price: "BDT. 420/-"
});
const fourSeasonPizza = new Pizza({
  _id: 02,
  name: "Four Season Pizza",
  raw: "Chicken, Cheese, Shrimp, Mashroom, Olive, Capsicum",
  price: "BDT. 620/-"
});
const chickenPizza = new Pizza({
  _id: 03,
  name: "Chicken Pizza",
  raw: "Chicken Salami, Cheese, Mushroom, Black Olive, Capsicum",
  price: "BDT. 620/-"
});
const italianoPizza = new Pizza({
  _id: 04,
  name: "Italiano Pizza",
  raw: "Extra Chess,Extra Chicken, Mushroom, Capsicum, Jalapeno",
  price: "BDT. 720/-"
});
const meatLoversPizza = new Pizza({
  _id: 05,
  name: "Meat Lovers Pizza",
  raw: "Chicken, Beef, Tomato, Mushroom, Olive, Capsicum",
  price: "BDT. 720/-"
});
const pizzaMexicano = new Pizza({
  _id: 06,
  name: "Pizza Mexicano",
  raw: "Beef, Mushroom, Cheese, Capsicum",
  price: "BDT. 720/-"
});
// Pizza.insertMany([pizzaMargarita, fourSeasonPizza, chickenPizza, italianoPizza, meatLoversPizza, pizzaMexicano]);
//Pizza Input Ends...

// Set Menu Input Starts...
const crispyChickenFriedRice = new SetMenu({
  _id: 01,
  name: "Crispy Chicken Fried Rice",
  raw: "Fried Rice, Fried Chicken,Vegetable, Drinkes",
  price: "BDT. 220/-"
});
const bbqChickenFriedRice = new SetMenu({
  _id: 02,
  name: "BBQ Chicken Fried Rice",
  raw: "Fried Rice, BBQ Chicken, Vegetable, Drinkes",
  price: "BDT. 220/-"
});
const steakRicePlatter = new SetMenu({
  _id: 03,
  name: "Steak Rice Platter",
  raw: "Fried Rice, Chicken Steak, BBQ Chicken Wings, Vegetable, Drinkes",
  price: "BDT. 300/-"
});
const riceBowl1 = new SetMenu({
  _id: 04,
  name: "Rice Bowl 1",
  raw: "Fried Rice, Crispy Chicken Chili, Drinks",
  price: "BDT. 150/-"
});
const riceBowl2 = new SetMenu({
  _id: 05,
  name: "Rice Bowl 2",
  raw: "Fried Rice, Sichuan Chicken, Drinks",
  price: "BDT. 150/-"
});
const riceBowl3 = new SetMenu({
  _id: 06,
  name: "Rice Bowl 3",
  raw: "Fried Rice, BBQ Chicken Ball, Drinks",
  price: "BDT. 150/-"
});
// SetMenu.insertMany([crispyChickenFriedRice, bbqChickenFriedRice, steakRicePlatter, riceBowl1, riceBowl2, riceBowl3]);
//Set Menu Input Ends...

//DB Input Ends......

//DB Handler Starts......

Drink.find({}, function(err, result) {
  dinfo = result;
});
Snack.find({}, function(err, result) {
  sinfo = result;
});
Burger.find({}, function(err, result) {
  binfo = result;
});
Pizza.find({}, function(err, result) {
  pinfo = result;
});
SetMenu.find({}, function(err, result) {
  setinfo = result;
});

//DB Handler Ends......

// App Handler Starts......

app.get("/", function(req, res) {
  res.render("index");
});
app.get("/index", function(req, res) {
  res.render("index");
});
app.get("/menu", function(req, res) {
  res.render("menu", {
    dinfo: dinfo,
    sinfo: sinfo,
    binfo: binfo,
    pinfo: pinfo,
    setinfo: setinfo
  });
});
app.get("/reservation", function(req, res) {
  res.render("reservation");
});
app.get("/contact", function(req, res) {
  res.render("contact");
});

// App Handler Ends......

//Node Server start confirmation msg
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
