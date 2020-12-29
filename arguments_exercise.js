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