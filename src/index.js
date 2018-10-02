// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, { 
        enumerable: false, 
        set: (value) => {property = value},  
        get: () => { return property}
    })
    return property;
};
const createProtoMagicObject = () => {
    let magicObj = function(){};
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};
let count = 0;
const incrementor = () => {
    count++;
    incrementor.valueOf = () => {return count}
    return incrementor;
};
const asyncIncrementor = ((sum = 1) => (() => sum++))();
const createIncrementer = function* () {
    let i = 0;
    while (i <= 2) {
        i++;
        yield i;
    }
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000)
    })
};
const getDeepPropertiesCount = (property) => {
    let arr = JSON.stringify(property);
    return arr.match(/\:/g).length;
};
const createSerializedObject = () => {
    return null
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a,b) => a.__proto__ - b.__proto__)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;