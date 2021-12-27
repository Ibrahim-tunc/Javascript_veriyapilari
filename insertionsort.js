let arr = [35,25,28,19,12,20,23,29,31,11,8,15,21,3,9,5,6,27,16]


/* İnsertion sort , ilk veriden başlar sıralayarak devam eder. 22 sayısını alır tek sayı olduğu için  
   sıralamaya 22|,27,16.. gerek yoktur daha sonra 27 sayısını alır 22 ile kıyaslar ve elinde 2 elemanı 
   dizi ve sıralanacak dizi vardır. 22,27|,16,2...ve 16,22,27  
*/ 

function insertion_sort(arr){
    // Diziyi baştan sona gezer.
    for(i=0; i<arr.length; i++){
        // dizinin ilk elemanından sonuncuya kadar seçtiği elemanı sıralanmış diziye sokar.
        for(j=i; j>=0; j--){
            if(arr[j] < arr[j-1]){
                temp = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = temp
            }
        }
    }
}

insertion_sort(arr)

console.log(arr)