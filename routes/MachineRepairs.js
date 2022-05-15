const router = require("express").Router();
let MachineRepair = require("../models/MachineRepair");




//save Machine

router.post('/post/save',(req,res)=>{

    let newpost = new MachineRepair(req.body);

    newpost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Post saved succesfully"
        });

    });

});

//get postMessage

router.get('/MachineRepairs',(req,res) =>{
    MachineRepair.find().exec((err,MachineRepair) =>{
        if(err){
            return res.status(500).json({
                error:err
            });

        }

        return res.status(200).json ({
            success:true,
            existingMachineRepairs:MachineRepair


        });

    });
});

//update router

router.put('/post/update/:id',(req,res) =>{
    MachineRepair.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(500).json({error:err});

            }

            return res.status(200).json({
                success:"Updated Succesfull"
            });
        }
    );

});


//delect post

router.delete('/post/delect/:id',(req,res) =>{
    MachineRepair.findByIdAndRemove(req.params.id).exec((err,deletepost) =>{

        if(err)return res.status(500).json({
            message:"Delected massage unsuccesfull", err
        });

        return res.json({
            message:"delect succesfull", deletepost
        });
    });
});

//get specific post

//get specific post

router.get("/post/:id",(req,res) =>{
    let postID = req.params.id;
    
    MachineRepair.findById(postID,(err,post) =>{
        if(err){
            return res.status(500).json({success:false,err});

        }

        return res.status(200).json({
                success:true,
                post
            });

        
    });
});








module.exports = router;