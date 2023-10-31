//the empty space : _ ;
//the block : # ;
//my stone : * ;
//the target : + ;
const Queue = require('queue-nodejs');
const { LinearFilter } = require('three');
const queue = new Queue();

//Methods : 

// 
    function checkMoves(dir , array){
        var index = getMyIndex(array);
        var i = index[0];
        var j = index[1];
        var width = array[0].length;

        if(dir ==="right"){
            if(j+1 <= width-1 && array[i][j+1] ==='_'){
                return true;
            }
            else{
                return false;
            }
        }
        else if(dir ==="left"){
            if(j-1 >= 0 && array[i][j-1] === '_'){
                return true;
            }
            else{
                return false;
            }
        }
         else {
            const int = parseInt(dir);
            if(j+int >= 0  && j+int <= array[0].length){
                return true;
            }
            else{
                return true;
            }
        }
    
    }

    function move(dir , arr){
        var index = getMyIndex(arr);
        var i=index[0];
        var j=index[1];

        if(dir ==="right"){
        arr[i][j+1] ='*';
        arr[i][j] ='_';

            if(arr[i+1][j+1] === '_'){
                arr[i+2][j+1] ='*';
                arr[i][j+1] ='_';
            }
        }

        else if(dir ==="left"){
            arr[i][j-1] ='*';
            arr[i][j] ='_';

            if(arr[i+1][j-1] === '_'){
                arr[i+2][j-1] ='*';
                arr[i][j-1] ='_';
            }
        }
        else {
            const int = parseInt(dir);
                arr[i][j+int]='*';
                arr[i][j]='_';
                if(arr[i+1][j+int] === '_'){
                    arr[i+2][j+int] ='*';
                    arr[i][j+int] ='_';
                }
            }

    return arr;
    }
    class obj {
        constructor(){
            this.arr=[
                ['_','_','_','_','_','_','_','_','_','*','_','_','_','_'] ,
                ['#','#','#','#','#','#','_','#','#','#','#','#','#','#'],
                ['_','_','_','_','_','_','_','_','_','_','_','_','_','_'] ,
                ['#','#','#','#','#','#','#','_','#','#','#','#','#','#'],
                ['_','_','_','_','_','_','_','+','_','_','_','_','_','_'] ,
            ];
        }
        get(){
           return this.arr;
        }

    }
    
    function getNextStates(gameArray , original ){
        const g = new Graph(20);
        var copy = original;
        var v = g.AdjList.get(copy);
        if(!v){ g.addVertex(copy);}
        else{ copy = v;}
            var num = getMyIndex(gameArray);
            var num1 = (num[1]);
                for(var c1 = (num1); c1 > 0 ; --c1){
                    var bool =checkMoves( (-1*c1) , gameArray);
                    if(bool===true){
                       var result =  move((-1*c1) , new obj(gameArray).get());
                       g.addVertex([...new Set(result)]);
                       g.addEdge(copy , result);
                       gameArray=new obj(gameArray).get();
                    }
                }
                if(num1 ===0) var n=0;
                else  var n=1;
                for(var c2 =num1 ; c2 <( gameArray[0].length- 1) ; ++c2){
                    var bool =checkMoves((+1*n) , original);
                    if(bool===true){
                        var result =  move((+1*n), new obj(original).get());
                        g.addVertex([...new Set(result)]);
                        g.addEdge(copy , result);
                        gameArray=new obj(original).get();
                        ++n;
                     }
                     
                } 
              g.printGraph();
        }   

        var xgoal , ygoal;
        function isFinal(arr){
            var myindex=getMyIndex(arr);
            var goalIndex = getGoalIndex(arr);
            // xgoal=goalIndex[0];
            // ygoal=goalIndex[1];
            xgoal=4;
            ygoal=7;
            if(myindex[0] === xgoal && myindex[1] === ygoal){
                return true;
            }
            else{
                return false;
            }
        }
        function printArr(array){
            var length = array.length;
            var width = array[0].length;
            for(var i =0 ; i<length ;++i){
                for(var j =0 ; j<width ;++j){
                    process.stdout.write(array[i][j] + '|');
                }
               console.log("");
            }
            console.log("\n_______________________________________");}
        function getMyIndex(array){
            var length = array.length;
            var width = array[0].length;
            for(var i =0 ; i<length ;++i){
                for(var j =0 ; j<width ;++j){
                    if(array[i][j] === "*"){
                        var result =[i , j];
                        return result;
                    }
                }
                    }
                    if(i === length){
                        return false ;
                            }
                }
                var a=[
                ['_','_','_','_','_','_','_','_','_','*','_','_','_','_'] ,
                ['#','#','#','#','#','#','_','#','#','#','#','#','#','#'],
                ['_','_','_','_','_','_','_','_','_','_','_','_','_','_'] ,
                ['#','#','#','#','#','#','#','_','#','#','#','#','#','#'],
                ['_','_','_','_','_','_','_','+','_','_','_','_','_','_'] ,
                ]
    
    function getGoalIndex(array){
        var length = array.length;
        var width = array[0].length;
        for(var i =0 ; i<length ;++i){
            for(var j =0 ; j<width ;++j){
                if(array[i][j] ==='+'){
                    var result =[i , j];
                    return result;
                }
            }
            if(i===4){
                return -1 ;
            }
        }
    }
        
        
module.exports.move = move
module.exports.checkMoves=checkMoves
module.exports.printArr=printArr
module.exports.isFinal = isFinal
module.exports.getNextStates=getNextStates