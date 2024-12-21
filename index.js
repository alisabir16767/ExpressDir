const express=require("express");
const app= express();
let port =8080;
app.listen(port,()=>{
   console.log(`app is listening on port ${port}`);
});
// app.use((req,res)=>{
   // console.log(req);
   // res.send({
   //    name:"apple",
   //    color:"red"
   // });
   // let code="<h1>Fruits</h1> <ul> <li>apple</li> <li>orrange</li></ul>"
   // res.send(code);
// });

   app.get("/",(req,res)=>{
      res.send("Hello i am root.");
   })
   app.get("/:username/:id",(req,res)=>{
      console.log(req.params);
      res.send("Hello , i am root.");
   });
   app.get("/search",(req,res)=>{ 
      let {q}=req.query;

      res.send(`<h1> search results for query:${q}</h1>`);
      if(!q){
         res.send(`<h1>Nothing searched.</h1>`);
      }
   });
 



   