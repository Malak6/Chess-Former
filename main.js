const l =require('./logic.js')
const s = require('./structure.js')
//creating other objects
//const s1 =require('./structure')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

var array =[
    ['_','_','_','_','_','_','_','_','*','_','_','_','_','_'] ,
    ['#','#','#','#','#','#','_','#','#','#','#','#','#','#'],
    ['_','_','_','_','_','_','_','_','_','_','_','_','_','_'] ,
    ['#','#','#','#','#','#','#','_','#','#','#','#','#','#'],
    ['_','_','_','_','_','_','_','+','_','_','_','_','_','_'] ,
];
s.printArr(array);
//do the loop
var count = 1;
      function myLoop () {           
         setTimeout(function () {  
        
          var go ;
          readline.question('Enter R to move right , L to move left or number of steps : ', dir => {
            if(dir === "l") { go="left"}
            else if(dir === "r") { go="right"}
            else{go=dir;}
            var result=l.userplay(array , go);
            array = result;
            s.printArr(result);
          });
        
      count++;                     
      if (count < 40) {            
         myLoop();             
              }                        
          }, 3000)
      }
      myLoop();
 


