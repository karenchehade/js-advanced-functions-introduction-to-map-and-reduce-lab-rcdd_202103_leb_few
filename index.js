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
    const reducer = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(reducer, startingPoint)
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
