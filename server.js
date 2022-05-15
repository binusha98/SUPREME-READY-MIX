const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

//application middleware
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

//import routes
const expenseRouter = require("./routes/expenses.js");
app.use("/Expense",expenseRouter);

const incomeRouter = require("./routes/incomes.js");
app.use("/Income",incomeRouter);

const customerRouter = require("./routes/Customers.js");
app.use("/customer",customerRouter);

const customerIntRouter = require("./routes/CustomersInt.js");
app.use("/customerInt",customerIntRouter);

const stockRouter = require("./routes/stocks.js");
app.use("/Stock",stockRouter);

const materialRouter = require("./routes/materials.js");
app.use("/Material",materialRouter);

const supplyRouter = require("./routes/supplies.js");
app.use("/supply",supplyRouter)

const qualityRouter = require("./routes/qualities.js");
app.use("/quality",qualityRouter)

const MachineRepairRouter = require("./routes/MachineRepairs.js");
app.use("/MachineRepair",MachineRepairRouter);

const VehicleRouter = require("./routes/Vehicles.js");
app.use("/Vehicle",VehicleRouter);

const projectRouter =require("./routes/project.js");
app.use("/project",projectRouter);

const tenderRouter=require("./routes/tender.js")
app.use("/tender",tenderRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port Number ${PORT}`);
})