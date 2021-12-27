let arr = [35,25,28,19,12,20,23,29,31,11,8,15,21,3,9,5,6,27,16]


function buble (arr){

    for(i=0; i<arr.length;i++){
        flag= true
        for(j=0; j<arr.length; j++){
            if(arr[j]> arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = false
            }
        }
        if(flag){
            break;
        }
    }
}

buble(arr)

console.log(arr)