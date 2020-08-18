// Add your functions here
function map(sourceArr, theFunction){
    const newA = []
    for(let elem of sourceArr){
        newA.push(theFunction(elem))
    }
    return newA
};

function reduce(sourceArr, theFunction, initialValue = true ){
    if (initialValue){
    let accum = initialValue;
    for(let elem of sourceArr){
        accum = theFunction(elem, accum);
    }
    return accum

    } else {
        let accum = 0;
        for(let elem of sourceArr){
        accum = theFunction(elem, accum);
        return accum ;}
    }
};





