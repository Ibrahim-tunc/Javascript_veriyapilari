

function merge_sort(arr){
    let x = 0              // count of left arr 
    let y = 0              // count of right arr
    let m = arr.length / 2 // medium length
    let R = []             // right arr
    let L = []             // left arr
    let result = []

    if(arr.length <= 1){
        return arr
    }

    // sol tarafı ayırıp diziye atar

    for(let i=0; i<m; i++){
        L[x] = arr[i]
        x++
    }

    // sağ tarafı ayırıp diziye atar
    
    for(let i=m; i<arr.length; i++){
        R[y] = arr[i]
        y++
    }

    L = merge_sort(L)       // Sol tarafı recursive olarak tek eleman olana kadar böler
    R = merge_sort(R)       // Sağ tarafı recursive olarak tek eleman olana kadar böler
    result = merge(L, R)    // Birleştirmeyi başlatır

    return result
}



function merge (L, R) {
    let result = []

    let x=0
    let y=0
    let k=0

    while(L.length>x && R.length>y)
    {
        if(L[x] <= R[y])
        {
            result[k] = L[x]
            x++
            k++
        }
        else
        {
            result[k] = R[y]
            y++
            k++
        }
    }

    if(L.length> x)
    {
        while(x < L.length)
        {
            result[k] = L[x]
            x++
            k++
        }
    }

    if(R.length> y)
    {
        while(y < R.length)
        {
            result[k] = R[y]
            y++
            k++
        }
    }
    return result
}



let arr = [35,25,28,19,23,26,15,16,35,25,28,19,23,26,15,16]

let rest = merge_sort(arr)

console.log(rest)



/* [16,21,11,8,12,22] dizi örneğinin sıralama aşamaları şöyle olur 
bölme işlemleri //
16,21,11  8,12,22

16,21  11    8,12  22

16  21  11    8  12  22


// birleştirme işlemleri.

16,21  11    8,12  22

11,16,21     8,12,22

8,11,12,16,21,22

>>>>>>>>>>> karmaşıklık derecesi Big O = n * Logn >>>>>>>>>>>>>>
 
*/


