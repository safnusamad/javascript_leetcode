/* q1: liner search algorithm for finding a target number
function searchval(arr,target){
	for(let x=0;x<arr.length;x++)
	{
		if(target==arr[x]){
			return x+1;
		}
	}return -1;
}
 
let arr=[15,56,23,89,32,5,4];
let target=89
let a=searchval(arr,target);
 */



function large3(arr){
	let v1;
	let v2;
	let v3;
	v1=v2=v3=Number.MIN_SAFE_INTEGER

	if(arr.length<3){
		return -1;
	}
	else{
		for(let x=0;x<arr.length;x++){
			if(arr[x]>v1){
				v3=v2;
				v2=v1;
				v1=arr[x]
			}
			else if(arr[x]>v2){
				v3=v2;
				v2=arr[x]
			}
			else if (arr[x]>v3){
				v3=arr[x]
			}
			
		}
	}
	return v1,v2,v3;
}
let arr=[15,56,23,89,32,5,4];
large3(arr)



