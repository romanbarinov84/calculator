
let a ='';
let b ='';
let sign ='';
let finish =false;


const digit =['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/','%'] ;

const out = document.querySelector('.calc-screen p');

function clearall () {
    a = '';
    b ='';
    sign = '';
    finish = false ;
    out.textContent = 0 ;

}
document .querySelector ('.ac').onclick = clearall;
document .querySelector ('.buttons').onclick =(event) =>{
    if(!event.target.classList.contains('btn'))return;
    if(event.target.classList.contains ('ac'))return;
    out.textContent = '';
    const key = event.target.textContent;

    if (digit.includes(key)){
        if(b===''&& sign===''){
            a+=key;
            console.table(a,b,sign);
            out.textContent=a;
        }
         else if (a!==''&& b !==''&& finish) {
            b = key;
            finish = false;
            out.textContent = b;

        }
        else {
            b+=key;
            out.textContent=b;
        }
        console.table(a,b,sign);
        return;
}
        //if press + - / *
        if(action.includes(key)){
            sign=key;
            out.textContent=sign;
            console.log(a,b,sign);
            return;
        }
        
        //press =
        if(key === '=') {
            if(b=== '') b = a;
            switch(sign){
                case'+':
                a=(+a)+(+b);
                break;
                case "%":
                    a=a/100*b;
                    break;

                case "-":
                    a = a-b;
                    break;

                case "x":
                    a=a*b;
                    break;

                case "/" :
                    if(b ==='0'){
                        out.textContent = 'error';
                        a='';
                        b='';
                        sign='';
                        return;
                    }
                    a = a/b ;
                    break;
            }
            finish= true;
            out.textContent = a;
            console.log(a,b,sign);

        }
    
    }