var rect= require("./rectangle");
 function solveRec(l,b){
   console.log("Solving the rectangle with l ="+l+" and b ="+b);
   rect(l, b, (err, rectangle) =>{
    if(err){
          console.log("ERROR", err.message);
    }else{
      console.log("the area of the rectangle is "+rectangle.area());
      console.log("the perimeter of the rectangle is "+rectangle.perimeter());
    }
   });
   console.log("this statement is after the call to rect()");
 }
 solveRec(5, 4);
 solveRec(4, 1);
 solveRec(-1, 5);