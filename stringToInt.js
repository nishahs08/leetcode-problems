let string=0;
let sign=1;

function stringToInt(str){
    for(let i=0;i<str.length;i++){
        console.log('***',string)
        if(str.charAt(i) === ' '){
            continue;
        }else if(str.charAt(i) === '-' ){
            sign=-1;

        }
        else if(str.charCodeAt(i)<47 && str.charCodeAt(i)>57) {
            return 'Not a number'
        }else{
            string=string*10+str.charAt(i)*1
        }
        }
        console.log(typeof(string),'------');

        return string* sign;
    

    }

console.log(stringToInt('68700'));

6*8