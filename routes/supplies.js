const router = require("express").Router();
const Supplies = require("../models/Supplies");

    router.post('/add',(req,res)=>{
        let newSupplies = new Supplies(req.body);
        newSupplies.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                    success:"Supplies and Suppliers Details entered Successfully"
                 })
            })
          
        })

router.get('/supplies',(req,res)=>{
  Supplies.find().exec((err,supplies) =>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
              success:true,
              existingSupplies:supplies
           })
      })
    
  })

router.put('/update/:id',(req,res)=>{
    Supplies.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body

        },
        (err,post)=>{
            if(err){
                   return res.status(400).json({error:err});
                }
                return res.status(200).json({
                    success:"Supplier and Supplies Details Updated Successfully."
                });
        
            }
        );
});

router.delete('/delete/:id',(req,res)=>{
    Supplies.findByIdAndRemove(req.params.id).exec((err,deletedSupplies) =>{
        if(err) return res.status(400).json({
                message:"Operation Unsuccessful",err
            });
        return res.json({
            message:"Details deleted Successfully",deletedSupplies
               
        });
    });
      
});


router.get("/supplies/:id",(req,res)=>{
    let suppliesID = req.params.id;
    Supplies.findById(suppliesID,(err,supplies) =>{
        if(err){
            return res,status(400).json({success:false, err});

        }
          return res.status(200).json({
              success:true,
              supplies

                 

          });

    });


})


module.exports = router;