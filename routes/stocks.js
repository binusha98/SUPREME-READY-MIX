const router = require("express").Router();
let Stock = require("../models/Stock");

router.route("/sadd").post((req,res)=>{

    const Stock_type = req.body.Stock_type;
    const size = Number(req.body.size);
    const date = (req.body.date);

    const newStock = new Stock({

        Stock_type,
        size,
        date
    })

    newStock.save().then(()=>{
        res.json("Stock Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//router.route("/sview").get((req,res)=>{

  //  Stock.find().then((stocks)=>{
      //  res.json(stocks)
  //  }).catch((err)=>{
      //  console.log(err)
   // })
//})

router.get('/sview',(req,res)=>{

    Stock.find().exec((err,Stock)=>{
        if(err){
            return res,status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingstocks : Stock
        });
     });
 });

router.route("/update/:stockid").put(async (req, res)=>{
    let stoId = req.params.stockid;
    const {Stock_type, size, date} = req.body;

    const updateStock = {
        Stock_type,
        size,
        date
    }

    const update = await Stock.findByIdAndUpdate(stoId, updateStock).then(()=>{
        res.status(200).send({status: "Stock updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});
    })
})
router.route("/delete/:stockid").delete(async (req,res) => {
    let stoId = req.params.stockid;

    await Stock.findByIdAndDelete(stoId).then(() => {
        res.status(200).send({status: "Stock deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete stock",error: err.message});
    })
})

//router.route("/get/:stockid").get(async(req,res) => {
    //let stoId = req.params.stockid;
    //const stock = await Stock.findById(stoId).then((Stock) => {
        //res.status(200).send({status: "Stock fetched", Stock})
    //}).catch(() => {
       // console.log(err.message);
        //res.status(500).send({status: "Error with get stock",error: err.message});
    //})
//})

//get a specific material
router.get("/:stockid",(req,res) =>{
    let stoId = req.params.stockid;
    Stock.findById(stoId,(err,Stock) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Stock
        })
    })
})
module.exports = router;