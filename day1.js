let givenString = '{{{{}}}}';
let stack =[];
for(let i=0;i<givenString.length;i++){
    if(givenString[i] === '{'){
        stack.push('{');

    }else{
        stack.shift();
    }
}
if(stack.length === 0){
    console.log('Valid String')
}else{
    console.log('Invalid String')
}
