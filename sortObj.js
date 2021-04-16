var obj = {
    "4": "abc",
    "53": "def",
    "1": "ghi",
    "6": "jkl",
    "3": "mno",
}

var sortObj = [];

for( var id in obj){
    sortObj.push([id, obj[id]]);
}

var restult = sortObj.sort(function(a,b){
    return a[1] -b[1];
});

console.log(restult);