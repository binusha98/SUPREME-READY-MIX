const router=require("express").Router();
let Project = require("../models/Project");

router.route("/add").post(( req,res ) =>{

    const company_name = req.body.company_name;
    const company_contact_no = Number(req.body.company_contact_no);
    const accept_date = Date (req.body.accept_date);
    const handover_date = Date (req.body.handover_date);
    const Project_amount= Number (req.body.Project_amount);
    const en_incharge=req.body.en_incharge;

    const newProject =new  Project ({

        company_name,
        company_contact_no,
        accept_date,
        handover_date,
        Project_amount,
        en_incharge
    })

    newProject.save().then(() =>{
        res.json("Project details added");
        

    }).catch ((err) =>{
        console.log (err);
    })
})
router.route("/").get((req,res)=>{
    Project.find().then((project) =>{
        res.jsont(project)
    }).catch((err) =>{
        console.log(err)
    })
})
//view
router.get('/pview',(req,res)=>{
    Project.find().exec((err,Project) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:true,
            exitingProject:Project
        });
    });
});     
         


//update
router.route("/update/:id").put(async (req,res) =>{
    let userId =req.params.id;
    const {company_name,accept_date,Project_amount} =req.body;
    
    const UpdateProject= {
        company_name,
        company_contact_no,
        accept_date,
        handover_date,
        Project_amount,
        en_incharge
    }

    const update = await Project.findByIdAndUpdate(userId,UpdateProject)
    .then((err) => {
        res.status(200).send({status:"Update User", user:update})

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error updating data", error:err.message});

    })
    

})

router.route("/delete/:id").delete(async(req,res) =>{
    let userId =req.params.id;

    await Project.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status:"User delete"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"error delete"});
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let userId=req.params.id;
    const user = await Project.findById(userId)
    .then(()=> {
        res.status(200).send({status:"User fetched",user:user})

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"erro with  get user",errror:err.message })
    })
})

module.exports=router;
