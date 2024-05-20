
let inpEl=document.querySelector('input');
let btns=document.querySelectorAll('button');

for(let button of btns){
    button.addEventListener('click',function(event){
        let btnText=event.target.innerText;
        console.log(btnText);

        if(btnText=='C'){
            inpEl.value=" ";
        }

        else if(btnText=="="){
            try{
                inpEl.value= eval(inpEl.value)
            }
            catch{
                inpEl.value="Invalid";
            }
        }

        else{
            inpEl.value+=btnText;
        }
    })
}