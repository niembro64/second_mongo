const express = require("express");
const app = express();
const port = 9000;

const res = require("express/lib/response");
app.get("/api/test", (req,res)=>{
    res.json({message: "hey it's eric"})
})

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes/sundae.route")(app);

app.listen(port, () => console.log(`running on port: ${port} yep`));
