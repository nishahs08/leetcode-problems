let str= 'PAYPALISHIRING';
let row=4;
let col=0;
let arr=[];
let index=0;
let tempArr=[];
for(let j=0;j<=str.length/4;j++){   
    for(i=0;i<row;i++){ 
        if(index<str.length){  
        tempArr.push(str.charAt(index));
        index++;
        console.log(i,j)
        }
    }
    arr.push(tempArr)
    tempArr=[];
    col++;
}


