const router = require("express").Router();
let Expense = require("../models/Expense");






//insert
router.route('/einsert').post((req,res) =>{

    let newExpense = new Expense(req.body);

    newExpense.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Expense saved Successfully"
        });
    });
});




//view
router.get('/eview',(req,res) =>{
    Expense.find().exec((err,Expense)=>{
        if(err){
            return res,status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingexpenses : Expense
        });
    });
});



//update
router.route("/eupdate/:expenseid").put(async (req,res) => {
    let expID = req.params.expenseid;
    const {date, Description, Cost_Center, Remark, Amount } = req.body;
 
     const updateExpense = {
        date,
        Description,
        Cost_Center,
        Remark,
        Amount
        
     }
 
     const update = await Expense.findByIdAndUpdate(expID, updateExpense).then(() =>{
        return res.status(200).json({
      Success: "Updated Successfully"
 });
     }).catch((err) =>{
         console.log(err);
         res.status(500).send({status: "Error while updating data"});
     })   
 
 })
 


 //delete
router.route("/edelete/:expenseid").delete(async (req, res) => {
    let expID = req.params.expenseid;
    
    await Expense.findByIdAndDelete(expID).then(() =>{
        res.status(200).send({status: "Expense deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error while deleting Expense", error: err.message});
    })
})




//view specific item
router.get("/:expenseid",(req,res) =>{

    let expID = req.params.expenseid;

    Expense.findById(expID,(err,Expense) =>{
            if(err){
                return res.status(400).json({success:false, err});
            }

            return res.status(200).json({
                success:true,
                Expense
            });

    });
    
});

module.exports = router;
