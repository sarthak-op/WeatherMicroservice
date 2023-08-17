const aboutRouter = require("./routes/about");
const bodyParser = require("body-parser")
const weatherRouter = require("./routes/weather");
const express = require('express');
const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);


app.listen(PORT, HOST_NAME, ()=>{
    console.log(`Server running at ${HOST_NAME}:${PORT}`)
})