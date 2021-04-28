function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2);
}

function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x);
}

function reduceToTotal(sourceArray, startingPoint = 0){
    return sourceArray.reduce(function(accumulator, currentValue){ return accumulator + currentValue },startingPoint);
}
function reduceToAllTrue(sourceArray){

    const reducer = function(accumulator, currentValue){
        if(Boolean(accumulator)===true && Boolean(currentValue)===true)
          return true;
        else {
          return false;
        }
    }
    return sourceArray.reduce(reducer);
}
function reduceToAnyTrue(sourceArray){

    const reducer = function(accumulator, currentValue){
        if(Boolean(accumulator)===true || Boolean(currentValue)===true)
          return true;
        else {
          return false;
        }
    }
    return sourceArray.reduce(reducer);
}
