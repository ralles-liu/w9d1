function sum() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i]
    }
    return s;
}

// console.log(sum(1,2,3,4) === 10);

function sumAlt(...nums) {
    let s = 0;
    for (let i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s;

}

// console.log(sumAlt(1,2,3,4, 5) === 10);
console.log(sumAlt(1,2,3,4, 5) === 10);


Function.prototype.myBind = function (test) {
    let func = this;
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    return function binded() {
        let args2 = Array.from(arguments);
        return func.apply(test, ) // not sure what is supposed to be here
    }
}

Function.prototype.myBind2 = function (test1, ...bindArgs) {
    // bindArgs can take in any amount
    // it should be the same as the previous one

}


function curriedSum(numberOfArgs) {
    // the function needs to wait until the necessary arguments are given
    // the first element tells you how many elements to take in
    let arr = [];
    function _curriedSum(args) {
        arr.push(args);
        // if we've pushed neough thing sto the array then we;re good
        if (arr.length == numberOfArgs) {
            // this means we have enough arguments to actually start it
            let sum = 0;
            for (let i = 0; i < numberOfArgs; i++) {
                sum += arr[i];
            }
        }
        else {
            return _curriedSum; // i dont understand how this works why doesn't it retrun something
        }
        // doe sthis really work?
        return _curriedSum;
    }

}


Function.prototype.curry = function (numArgs) {
    // similar to what is previous question
    let arr = [];
    let func = this;
    // same exact question only you apply the function instead of just the summing
    function _curriedFn(arg) {
        arr.push(arg);
        if (arr.length == numArgs) {
            return func(...arr);
        }
    }
    return _curriedSum;
}