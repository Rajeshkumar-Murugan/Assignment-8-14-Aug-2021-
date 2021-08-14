let printfullname = function(City, State){
    console.log(this.firstname+ " "+this.lastname+ " "+City+ " " + State)
}

let name1 = {
    firstname: "Rajesh",
    lastname: "Kumar",
   }

let name2 = {
    firstname: "Dinesh",
    lastname: "Kumar",
    }

//Call metion =>Funtion borrowing
// Additional parameters are added individually
console.log("---------Call Method example------------")
printfullname.call(name1, "Chennai", "Tamil Nadu");


//apply method
// additional parameters are added together in a array
console.log("---------Apply Method example------------")
printfullname.apply(name2,["Mumbai", "Maharashtra"]);

//Bind method
//Copy of the fuction which can you used later
console.log("---------Bind Method example------------")
let mydetails = printfullname.bind(name1, "AHMEDABAD", "GUJARAT")
//console.log(mydetails)
mydetails();
