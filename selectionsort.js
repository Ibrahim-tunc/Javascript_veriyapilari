let arr = [35,25,28,19,12,20,23,29,31,11,8,15,21,3,9,5,6,27,16]



function selectionsort(arr){
    let arr1 = []
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){                       
            if(arr[i] > arr[j]){                
                temp = arr[i]
                arr[i] = arr[j]               
                arr[j] = temp
            }
        }        
    }
}

selectionsort(arr)

console.log(arr)

