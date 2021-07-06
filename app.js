//REVIEW 
//PROBLEM #1
function triangle() {
    for (let i = 1; i < 8; i++) {
        console.log('#'.repeat(i));
    }
}

//PROBLEM #2 
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i %3 == 0 && i % 5 ==0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
        
    }
}


//PROBLEM #3
function chessboard(bindingSize) {
    let char = '#';
    let space=' ';
    let board = "";
    for(let i = 0; i < bindingSize; i++) {
        for(let j = 0; j < bindingSize; j++) {
            if (j%2 == 0 && i%2==0 || j%2==1 && i%2==1) {   
                board += space;
            }
            else {
                board+= char;
            }
            
        }
        board += "\n";
    }
    console.log(board);
}

//PROBLEM #4
function min(x,y) {
    if (x < y) {
        return x;
    }
    else {
        return y;
    }
}

//PROBLEM #5
function isEven(num) {
    if (num== 0) {
        return true;
    }
    else if (num == 1 || num ==-1) {
        return false
    }
    else {
        return isEven(Math.abs(num-2));
    }
}

//PROBLEM #6

function countBs (string) {
    return countChar(string, "B");
}

function countChar(string, char) {
    let num= 0
    for (let i = 0; i < string.length; i++) {
        if(string[i]==char) {
            num++
        }
    }
    return num;
}

//PROBLEM #7

function range(start, end, step) {
    let array=[];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    }
    else if (start > end) {
        for (let i = start; i >= end; i+=step) {
            array.push(i);
        }
    }
    
    return array;
}

function sum(array) {
    let sum = 0;
    for (let k = 0; k < array.length; k++) {
        sum = sum + array[k];
        
    }
    return sum; 
}

//PROBLEM #8

function reverseArray(array) {
    let newArray=[]
    for (let i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArray(array) {
    let newArray=[];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
    for(let i = 0; i < array.length/2; i++) {
        let temp = array[i];
        array[i]=array.length-i
        array[array.length-i-1]=temp ;
    }
    return array;
}

let arrayValue=[1,2,3,4,5,6,7];
//console.log(reverseArrayInPlace(arrayValue));

//PROBLEM #9

function arrayToList(array) {

    let object= null;
    
    for (let i = array.length-1; i >= 0; i--) {
        object={value: array[i], rest: object};
    }
    return object;
}

//arrayToList([10, 20,30]);

function listToArray(list) {
    let array=[];
    
    for (let x = list; x; x=x.rest) {
        
        array.push(x.value);
    }
    return array;
}

//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend (element, list) {
    let obj = {};
    obj.value=element;
    obj.rest=list;
    return obj;
}


let x = arrayToList([10,20,30]);


//console.log(prepend(10, prepend(20, null)));

function nth(list, num) {
    if (list.rest==null) {
        return undefined;
    } 
    if (num==0) {
        return list.value;
    }
    else if (num==1) {
        let x = list.rest;
        return x.value;
    }
    else {      
        return nth(list.rest, num-1)
    }   
}

//console.log(nth(x, 3));


//PROBLEM #10

function deepEqual(object1,object2) {

    if((typeof object1 == "object" && object1 !== null) && (typeof object2 == "object" && object2 !== null )) {
        let keys=Object.keys(object1);
        let keys2=Object.keys(object2);
        
        if(keys.length == keys2.length) {
            for (let key of keys) {
                return deepEqual(object1[key], object2[key]);    
            }
        }
        else {
            return false; 
        }
    }
    else if(object1 == object2) {
        return true; 
    }
    else {
        return false;
    }
    
}

//let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//console.log(deepEqual(obj, {here: 1, object: 2}));





















