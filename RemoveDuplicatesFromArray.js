let array = [2,4,5,6,7,7,8,3,2,2,2,3,3,55,66];
 array = array.sort(function(a,b){
    return a-b
});
console.log(array);
RemoveDuplicate(array);

function RemoveDuplicate(array){
   array=array.filter((element,index)=>{
       if(element !== array[index-1]){
           return element
       }
   });
   console.log(array);
}