let numArray = [5,7,8,4];
let target = 9;
let sum;
let flag=[]
numArray.forEach((num,index)=>{ // for
    for(let i=index;i<numArray.length;i++){
       sum=0;
       sum=num+numArray[i];
       if(sum === target) {
           flag.push(index);
           flag.push(i);
       }
    }
   
})

console.log(flag);

//question break isnt working