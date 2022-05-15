const router = require("express").Router();
let customerInt = require("../models/customerInt"); 


//save

router.post("/addCus",(req,res)=>{
    
    let newCusInt = new customerInt(req.body);

    newCusInt.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: "New Interaction saved successfully"
        });
    });
});

//view

router.get('/viewCus',(req,res)=>{
    customerInt.find().exec((err,customerInt) =>{
        if(err){
             return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
             success:true,
             existingcustomersInt:customerInt
        });
    });
});


//update

router.put("/updateCus/:id", (req,res)=>{
    
    customerInt.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,customerInt)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete

router.delete("/deleteCus/:id" ,(req,res)=>{
    customerInt.findByIdAndDelete(req.params.id).exec((err,deletedCusInt) =>{
         
        if(err) return res.status(400).json({
            message:"Couldn't delete Interaction", err
        });
        
        return res.json({
            message:"Deleted Successfully",deletedCusInt
        });
    });
});


//specific cus Int

router.get("/viewCus/:id", (req,res)=>{
     
    let cusIntId = req.params.id;

    customerInt.findById(cusIntId,(err,customerInt) =>{
        if(err){
            return res.status.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            customerInt
        });
    });
});

module.exports = router;