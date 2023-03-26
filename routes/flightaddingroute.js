const express=require('express');

const router=express.Router();

const flightaddingcontroller=require('../controllers/addingflightcontroller');

router.post('/addingflights',(req,res)=>{
    flightaddingcontroller.addflight;
    console.log("data added")
   
})

module.exports=router;