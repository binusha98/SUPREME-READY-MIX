const router = require("express").Router();
let customer = require("../models/customer"); 


//save

router.post("/add",(req,res)=>{

     let newCus = new customer(req.body);

     newCus.save((err) =>{
         if(err){
             return res.status(400).json({
                 error:err
             });
         }
         return res.status(200).json({
             success: "Customer saved successfully"
         });
     });

});


//view

router.get('/view',(req,res) =>{
    customer.find().exec((err,customer) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingcustomers: customer
        });
    });
});

//update

router.put("/update/:id", (req,res)=>{
    
    customer.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body

        },
        (err,customer)=>{
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

router.delete("/delete/:id",(req,res)=>{
    customer.findByIdAndRemove(req.params.id).exec((err,deletedCustomer) =>{

        if(err) return res.status(400).json({
            message:"Couln't delete", err
        });

        return res.json({
            message:"Deleted Successfully",deletedCustomer
        });
    });
});


//specific customer

router.get("/view/:id" ,(req,res)=>{

    let cusId = req.params.id;

    customer.findById(cusId,(err,customer) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            customer
        });
    });

});

module.exports = router;