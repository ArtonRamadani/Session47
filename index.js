const express = require('express');
const app = express();

app.get("/health", (req, res) => {
  res.send("Server is healthy");
});

app.listen(5000,()=>{
    console.log("UP at 5000")
})

module.exports = app;