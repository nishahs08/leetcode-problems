let array= [-6,45,98,90];
[0,1,2,3]
let temp;
function Rotate(array,noOfTimes){
   
    while(noOfTimes!==0){
        let last=array[array.length-1];
        noOfTimes--;
        for(let i=array.length-1;i>=0;i--){
           temp = array[i];
           array[i]=array[i-1];
        }
        array[0]=last;
    }
    console.log(array)
}

Rotate([1,2,3,4,5,6,7,8],4)