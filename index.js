var rec= require("./rectangle");
 function solveRec(l,b){
   console.log("Solving the rectangle with l ="+l+" and b ="+b);
   if(l<=0 || b<=0){
     console.log("The l and b is must be greater than 0");
   }else{
     console.log("The perimeter is "+rec.perimeter(l,b));
     console.log("The area is "+rec.area(l,b));
   }
 }
 solveRec(5, 4);
 solveRec(4, 1);
 solveRec(-1, 5);