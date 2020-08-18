// Add your functions here
function map(sourceArr, theFunction){
    const newA = []
    for(let elem of sourceArr){
        newA.push(theFunction(elem))
    }
    return newA
};

function reduce(sourceArr, theFunction, initialValue = null ){
    if (initialValue){
    let accum = initialValue;
    for(let elem of sourceArr){
        accum = theFunction(elem, accum);
    }
    return accum

    } else {
        let accum = sourceArr[0];
        for(let i = 1; i<sourceArr.length; i++){
        accum = theFunction(sourceArr[i], accum);
         }
         return accum
    }
};





