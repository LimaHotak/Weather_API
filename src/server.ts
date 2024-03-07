import express from "express";
 
//creating express APP
const app = express();

//the port that server will listen on
const PORT = 3000;

app.use(express.json());

//start the express server
app.listen(PORT, () => {
  console.log('server is listening om port ${PORT}');
});