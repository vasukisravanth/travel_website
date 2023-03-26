const flightinfo=require('../models/flights');

const addflight=(req,res)=>{

     console.log('adding');
    let addf=new flightinfo({
         flightid: req.body.fid,
         airlineid: req.body.aid,
         From:req.body.bp,
         To:req.body.dp,
         Dtime:req.body.dtime,
         Atime:req.body.atime,
         duration:req.body.dur,
         availableseats:req.body.aseats,
         eprice:req.body.eprice,
         bprice:req.body.bprice,
     })
     addf.save();

}

module.exports=addflight;