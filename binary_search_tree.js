
function createTree(x)
{
    let node = 
    {
        left: null,
        right: null,
        data: x
    }

}

/* [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]

Binary Search Aşamaları aşağıdaki gibidir.

7 alınır root olarak daha sonra elemanlar şöyle eklenir

    7
  5  
1

    7
  5   8
1
  3

        7
    5       8  
1      6
  3  
            7
        5           8
    1       6         9
0       3
      2   4




*/
