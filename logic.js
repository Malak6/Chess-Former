const structure = require('./structure');


function userPlay(arr , dir){
    var bool =structure.checkMoves(dir , arr);
    
    if(bool === true){
        var array = structure.move(dir,arr);
        var boolfinal = structure.isFinal(arr);
            if(boolfinal === true){
                return [
                    ['*','*','*','*','*','*','*','*','*','*','*','*','*','*'] ,
                    ['*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
                    ['*','*','*','*','*','*','*','*','*','*','*','*','*','*'] ,
                    ['*','*','*','*','*','*','*','*','*','*','*','*','*','*'],
                    ['*','*','*','*','*','*','*','*','*','*','*','*','*','*'] ,
                ];;
                }
        return array;
    }
    else if(bool === false){
        return arr;
    }
    
   
}




module.exports.userplay =userPlay