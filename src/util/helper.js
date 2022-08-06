var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

function printName(){
    console.log(date);
}

module.exports.abc = date
module.exports.printName = printName

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

function printName(){
    console.log(name);
}

module.exports.xyz = name
module.exports.printName = printName

let myData = {
    batchName: 'Plutonium-09',
    week: 7,
    day: 'Friday',
    topicName: 'NodeJs',
   }

   function printName(){
   console.log(myData);
   }

   module.exports.data = (myData)
   module.exports.printName = printName  