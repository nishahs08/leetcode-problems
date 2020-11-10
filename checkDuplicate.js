function checkDuplicate(array){
    for(i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
       
            if(array[i] === array[j]){
                return false
            }
        }
    }
    return true;
}

console.log(checkDuplicate([2,3,4,5,6]))