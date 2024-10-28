// Map => creates a new Array populated with the results of calling a provided function on every element in the calling array.

let arr = [1, 2, 3, 4, 5];
let sarr = arr.map((function(v,i) {
    return v * v;
}))

console.log(sarr); // [1, 4, 9, 16, 25]


//custom map function
Array.prototype.myMap = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        //here this refers to original array
        let val = this[i];
        let rv = callback(val, i, this);
        arr.push(rv);
    }
    return arr;
}

let mapArr = arr.myMap(function(v,i){
    return v * v;
})

console.log(mapArr); // [1, 4, 9, 16, 25]



//filter => creates a new array with all elements that pass the test implemented by the provided function.

let farr = [2,4,9,8,7,11,10,16];
let even = farr.filter((v,i) => {
    return v % 2 === 0;
})

console.log(even); // [2, 4, 8, 10, 16]


//custom filter function
Array.prototype.myFilter = function(cb) {
    let oarr = this;
    let res = [];

    for(let i = 0;i < oarr.length;i++){
        let v = oarr[i];
        let rbv = cb(v, i, oarr);
        if(rbv) {
            res.push(v);
        }
    }
    return res;
}

let ceven = farr.myFilter((v,i) => {
    return v % 2 === 0;
})

console.log(ceven); // [2, 4, 8, 10, 16]




//reduce => executes a reducer function on each element of the array, resulting in a single output value.

let rarr = [1,2,3,4,5];
let val = arr.reduce(function(pv,cv,ci){
    return pv + cv;
});

console.log(val); // 15

//custom reduce function
Array.prototype.myReduce = function(cb, iv) {
    let arr = this;
    let pv;
    if(iv == undefined) {
        pv = arr[0];
        for(let i = 1;i < arr.length;i++){
            let cv = arr[i];
            pv = cb(pv, cv, i, arr);
        }
    } else {
        pv = iv;
        for(let i = 0;i < arr.length;i++){
            let cv = arr[i];
            pv = cb(pv, cv, i, arr);
        }
    }
    return pv;
}

let fval = arr.myReduce(function(pv,cv,ci){
    return pv + cv;
});

console.log(fval); // 15

