//UI
const checkbox = document.getElementById('toggle'),
        slider= document.getElementById('slider');

const basic = document.querySelector('.basic'),
      prof =document.querySelector('.prof'),
      master=document.querySelector('.master');

    //   Event Listener 
    slider.addEventListener('click',()=>{
        // console.log("Hnin");
        if(!checkbox.checked){
           basic.innerText =110;
           prof.innerText=230;
           master.innerText=350;
        }else{
            [basic.textContent,prof.textContent,master.textContent]=[9.99,19.99,29.99]
        }
    });