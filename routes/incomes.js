const router = require("express").Router();
let Income = require("../models/Income");






router.route('/iinsert').post((req,res) =>{

    let newIncome = new Income(req.body);

    newIncome.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Income saved Successfully"
        });
    });
});



  

//view
router.get('/iview',(req,res) =>{
    Income.find().exec((err,Income)=>{
        if(err){
            return res,status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingincomes : Income
        });
    });
});



router.route("/update/:incomeid").put(async (req,res) => {
   let incID = req.params.incomeid;
    const {Income_date, Income_Type, Income_Description, Income_Amount} = req.body;

    const updateIncome = {
        Income_date,
        Income_Type,
        Income_Description,
        Income_Amount
    }

    const update = await Income.findByIdAndUpdate(incID, updateIncome).then(() =>{
       return res.status(200).json({
     Success: "Updated Successfully"
});
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error while updating data"});
    })   

})



//delete
router.route("/idelete/:incomeid").delete(async (req, res) => {
    let incID = req.params.incomeid;
    
    await Income.findByIdAndDelete(incID).then(() =>{
        res.status(200).send({status: "Income deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error while deleting Income", error: err.message});
    })
})





//view specific item
router.get("/:incomeid",(req,res) =>{

    let incID = req.params.incomeid;

    Income.findById(incID,(err,Income) =>{
            if(err){
                return res.status(400).json({success:false, err});
            }

            return res.status(200).json({
                success:true,
                Income
            });

    });
    
});

module.exports = router;