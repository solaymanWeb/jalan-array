let arr = [ 1, 2, 3, 4, 5, 6 ];
let N = arr.length;
let d=2; //number of times shifted the array

function printArray(){
    let p =1;
    while( p <= d){
        let last = arr[0];
        for(let i=0; i<N-1; i++){
            arr[i] = arr[i+1];
        }
        arr[N-1]= last;
        p++
    }
    for(let i = 0; i < N; i++){
        console.log(arr[i])
    }
}
// Function calling
printArray();
