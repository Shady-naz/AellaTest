//===================
// Question 1
//====================

function triplets (arr, sum) {
    const newArr = [];
    const map = {}

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === sum) {
                    if (!map[arr[i]*arr[j]*arr[k]]) {
                        newArr.push([arr[i], arr[j], arr[k]])
                        newArr[newArr.length - 1].sort()
                        newArr.sort().reverse()
                        map[arr[i]*arr[j]*arr[k]] = true
                    }
                }
            }
        }
    }
        return newArr
}

//===================
// Question 2
//====================

const fs = require('fs');
const yaml = require('js-yaml');

const filePath = process.argv[2];
const flag = process.argv[3];
try {
    if (flag) {
        let keyInd = flag.indexOf('='),
            value = "",
            objKey = [],
            objVal = [],
            dotArr = [],
            resultArr = [];
        for (let i = keyInd+1; i < flag.length; i++) {
             value += flag[i] 
        }
        for (let x = 0; x < value.length; x++) {
            let char = value[x]
            if (char === '.')  
                dotArr.push(x)
        }
        if (dotArr.length > 0) {
            let k = "";
            let v = ""; 
            dotArr.forEach((dot,i) => {
                if (i > 0) {
                    k = k.slice(k.length)
                    v = v.slice(v.length)
                    for (let y = dotArr[i-1]+1; y < dot; y++) {
                        k += value[y]
                    }
                    for (let k = dot+1; k < value.length; k++) {
                        v += value[k]
                    }
                    if (v.includes('.')) {
                        let nextDotInd = v.indexOf('.')
                        v = v.slice(0, nextDotInd)
                    }
                } else {
                    for (let y = 0; y < dot; y++) {
                        k += value[y]
                    }
                    for (let k = dot+1; k < value.length; k++) {
                        v += value[k]
                    }
                        let vDotInd = v.indexOf('.')
                        if (vDotInd > -1)
                        v = v.slice(0, vDotInd)
                }
                objVal.push(v)
                objKey.push(k)
            })
            for (let a = 0; a < objKey.length; a++) {
                if ((!resultArr.includes(objKey[a]) && !resultArr.includes(objVal[a]))) {
                    resultArr.push(objKey[a])
                    resultArr.push(objVal[a])
                } else if (resultArr.includes(objKey[a]) && !resultArr.includes(objVal[a])) {
                    resultArr.push(objVal[a])
                }
            }
            let fileContents = fs.createReadStream(filePath);
            fileContents.on('data', (chunk)=> {
                let data = yaml.load(chunk)
                console.log(data)
                let newData = data[resultArr[0]];
                resultArr.forEach( (key, i) => {
                    if (i < resultArr.length-1) {
                        newData = newData[resultArr[i+1]]
                    }
                })
                console.log(newData)
            })
            } else {
                let fileContents = fs.createReadStream(filePath);
                fileContents.on('data', (chunk)=> {
                let data = yaml.load(chunk)
                console.log(data)
                console.log(data[value])
                })
            }
    } else {
        let fileContents = fs.createReadStream(filePath);
        fileContents.on('data', (chunk)=> {
        let data = yaml.load(chunk)
        console.log(data)
    });
}
} catch (e) {
    console.log(e);
}