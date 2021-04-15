function evenNumber(array){
    var count = 0;
		var max = 0;
		for(var i = 0; i < array.length; i++){
			if(array[i] == 0)
				count = 0;
			else
				count++;
			max = count > max ? count : max;
		}
		return max;
}

let arr = [1,0,0,1,1,1];
let result = evenNumber(arr);
console.log(result);