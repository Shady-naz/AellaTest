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
        let keyInd = flag.indexOf('=');
        let value = "";
        for (let i = keyInd+1; i < flag.length; i++) {
             value += flag[i] 
        }
            let valInd = value.indexOf('.')
            if (valInd > 0) {
                let k = "";
                let v = "";
                for (let j = 0; j < valInd; j++) {
                 k += value[j]
                }
                for (let k = valInd+1; k < value.length; k++) {
                 v += value[k]
                }
                let fileContents = fs.createReadStream(filePath);
                fileContents.on('data', (chunk)=> {
                let data = yaml.load(chunk)
                console.log(data)
                console.log(data[k][v])
                })
            } else {
                let fileContents = fs.createReadStream(filePath);
                fileContents.on('data', (chunk)=> {
                let data = yaml.load(chunk)
                console.log(data)
                console.log(value)
                console.log(data[value])
                })
            }
    } else {
        let fileContents = fs.createReadStream(filePath);
        fileContents.on('data', (chunk)=> {
        let data = yaml.load(chunk)
        // process.stdout(data)
        console.log(data)
    });
}
    
} catch (e) {
    console.log(e);
}