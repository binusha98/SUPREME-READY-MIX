const router = require("express").Router();
let Material = require("../models/Material");

router.route("/madd").post((req,res)=>{

    const Material_name = req.body.Material_name;
    const Unit_price = Number(req.body.Unit_price);
    const Number_of_Units = Number(req.body.Number_of_Units);

    const newMaterial = new Material({

        Material_name,
        Unit_price,
        Number_of_Units
    })

    newMaterial.save().then(()=>{
        res.json("Material Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//router.route("/mview").get((req,res)=>{

  //  Material.find().then((materials)=>{
     //   res.json(materials)
  //  }).catch((err)=>{
       // console.log(err)
   //})
//})

router.get('/mview',(req,res)=>{

   Material.find().exec((err,Material)=>{
       if(err){
           return res,status(400).json({
               error:err
           });
       }
       return res.status(200).json({
           success:true,
           existingmaterials : Material
       });
    });
});

router.route("/update/:materialid").put(async (req, res)=>{
    let matId = req.params.materialid;
    const {Material_name, Unit_price, Number_of_Units} = req.body;

    const updateMaterial = {
        Material_name,
        Unit_price,
        Number_of_Units
    }

    const update = await Material.findByIdAndUpdate(matId, updateMaterial).then(()=>{
        //res.status(200).send({status: "Material updated"})
        res.status(200).json({
            success:"Updated Successfully"
        });
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updating data",error: err.message});
    })
})

//router.put('/Material/update/:id',(req,res) =>{
    //Material.findByIdAndUpdate(
       //req.params.id,
       //{
           //$set:req.body
       //},
       //(err,Material)=>{
           //if(err){
               //return res.status(400).json({error:err});
          // }

           //return res.status(200).json({
              // success:"Updated Successfully"
           //});
      // }
    //);
//});

router.route("/delete/:materialid").delete(async (req,res) => {
    let matId = req.params.materialid;

    await Material.findByIdAndDelete(matId).then(() => {
        //res.status(200).send({status: "Material deleted"});
        res.status(200).json({
            Success:"Deleted Successfully"
        });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete material",error: err.message});
    })
})

//router.delete('/Material/delete/:id',(eq,res) =>{
    //Material.findByIdAndRemove(req.params.id).exec((err,deletedMaterial) =>{

        //if(err) return res.status(400).json({
            //message:"Delete unsuccessful",err
        //});

        //return res.json({
            //message:"Delete successful",deletedMaterial
        //});
    //});
//});

//router.route("/get/:materialid").get(async(req,res) => {
    //let matId = req.params.materialid;
    //const material = await Material.findById(matId).then((Material)=>{
        //res.status(200).send({status: "Material fetched", Material})
    //}).catch((err) => {
        //console.log(err.message);
        //res.status(500).send({status: "Error with get material",error: err.message});
    //})
//})

//get a specific material
router.get("/:materialid",(req,res) =>{
    let matId = req.params.materialid;
    Material.findById(matId,(err,Material) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            Material
        })
    })
})

module.exports = router;