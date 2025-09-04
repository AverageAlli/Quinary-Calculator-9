const express = require("express");
const app = express();
const calcRoutes = require("./routes/route");

app.use(express.json()); 
app.use("/api/calc", calcRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
