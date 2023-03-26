const mongoose=require("mongoose");

const flightSchema=new mongoose.Schema({
  flightid:String,
  airlineid:String,
  From:String,
  To:String,
  Dtime:String,
  Atime:String,
  duaration:String,
  availableseats:String,
  eprice:String,
  bprice:String



});

const flight=new mongoose.model("flight",flightSchema);

module.exports=flight;