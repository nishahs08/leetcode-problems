let givenString = '{}{[]}';

let stack=[];
let length=0;
for(let i=0;i<givenString.length;i++)
{
    if(givenString[i] === '{' ||  givenString[i] === '[' || givenString[i] === '('){
        stack.push(givenString[i]);
        console.log(stack)
    }else if(givenString[i] === '}' || givenString[i] === ']' || givenString[i] ===  ')' && givenString[i] === givenString[i-1]){
        console.log(stack,'---')
        stack.shift()
    }else{
        break;
        
    }
    
}

if(stack.length=== 0){
    console.log('valid')
}else{
    console.log('invalid sss')
}