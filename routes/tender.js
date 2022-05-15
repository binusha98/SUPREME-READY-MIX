const router=require("express").Router();
let Tender = require("../models/Tender");

router.route("/add").post(( req,res ) =>{

    const T_company_name = req.body.T_company_name;
    const T_contact_no = Number(req.body.T_contact_no);
    const estimated_time = Number (req.body.estimated_time);
    const estimate_cost= Number (req.body.estimate_cost);
    
    const newTender =new Tender ({

        T_company_name,
        T_contact_no,
        estimated_time,
        estimate_cost
    }) 

    newTender.save().then(() =>{
        res.json("Tenders detaisl added");
        

    }).catch ((err) =>{
        console.log (err);
    })
})

router.route("/").get((req,res)=>{
    Tender.find().then((tenders) =>{
        res.jsont(tenders)
    }).catch((err) =>{
        console.log(err)
    })
})


//view
router.get('/pview',(req,res)=>{
    Tender.find().exec((err,Tender) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            exitingTender:Tender
        });
    });
}); 

router.route("/update/:id").put(async (req,res) =>{
    let userId =req.params.id;
    const {T_company_name,T_contact_no,estimated_time, estimate_cost} =req.body;
    
    const UpdateTender= {
        T_company_name,
        T_contact_no,
        estimated_time,
        estimate_cost
    }

    const update = await Tenders.findByIdAndUpdate(userId,UpdateTender)
    .then((err) => {
        res.status(200).send({status:"Update User", user:update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error updating data", error:err.message});

    })
    

})

router.route("/delete/:id").delete(async(req,res) =>{
    let userId =req.params.id;

    await Tender.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"User delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"error delete"});
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let userId=req.params.id;
    const user = await Tender.findById(userId)
    .then(()=> {
        res.status(200).send({status:"User fetched",user:user})

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"erro with  get user",errror:err.message })
    })
})

module.exports=router;
