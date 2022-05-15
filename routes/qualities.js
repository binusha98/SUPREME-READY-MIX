const router = require("express").Router();
const Qualities = require("../models/Qualities");

    router.post('/add',(req,res)=>{
        let newQualities = new Qualities(req.body);
        newQualities.save((err)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                    success:"Quality Details entered Successfully"
                 })
            })
          
        })

router.get('/qualities',(req,res)=>{
    Qualities.find().exec((err,qualities) =>{
      if(err){
          return res.status(400).json({
              error:err
          });
      }
      return res.status(200).json({
              success:true,
              existingQualities:qualities
           })
      })
    
  })

router.put('/update/:id',(req,res)=>{
    Qualities.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body

        },
        (err,post)=>{
            if(err){
                   return res.status(400).json({error:err});
                }
                return res.status(200).json({
                    success:"Quality Details Updated Successfully."
                });
        
            }
        );
});

router.delete('/delete/:id',(req,res)=>{
    Qualities.findByIdAndRemove(req.params.id).exec((err,deletedQualities) =>{
        if(err) return res.status(400).json({
                message:"Operation Unsuccessful",err
            });
        return res.json({
            message:"Details deleted Successfully",deletedQualities
               
        });
    });
      
});


router.get("/qualities/:id",(req,res)=>{
    let qualitiesID = req.params.id;
    Qualities.findById(qualitiesID,(err,qualities) =>{
        if(err){
            return res,status(400).json({success:false, err});

        }
          return res.status(200).json({
              success:true,
              qualities

                 

          });

    });


})


module.exports = router;