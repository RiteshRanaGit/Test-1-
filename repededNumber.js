function repetednumber(array){
    let arr = [];
    var value;
    //console.log(array.length);
    for (let i = 0; i < array.length; i++){
        //console.log('array[i]', array[i])
      if(arr.length === 0){
          arr.push(array[i]);
          //console.log('if push', array[i]);
      }
      else {
         for( let j = 0 ; j<arr.length; j++){
             
             if(arr[j] === array[i]){
                
                 return arr[j];
             }

         }
         arr.push(array[i]);
      }
      
    }
    console.log('value', value)
    return value;
}

let arr1 = [2,3,4,5,4, 6];
let result = repetednumber(arr1);
console.log(result);