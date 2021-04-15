function evenNumber(array){
    let arr = [];
    //console.log(array.length);
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          //console.log('number',array[i]);
        arr.push(array[i]);
      }
      
    }
    return arr;
}

let arr = [2,5,6,21,25, 66];
let result = evenNumber(arr);
console.log(result);