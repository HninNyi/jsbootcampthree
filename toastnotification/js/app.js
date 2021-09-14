//UI
const button =document.getElementById('button');
const toasts = document.getElementById('toasts');


const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]

//Event Listener
// button.addEventListener('click',()=>createnotification());
// button.addEventListener('click',()=>createnotification('Can\'t Access!!!'))
button.addEventListener('click',()=>createnotification('Can\'t Access!!!','danger'))

function createnotification(message,type){
    // console.log('hnin');

    const notify = document.createElement('div');

    // console.log(notify);
    notify.classList.add('toast');
    notify.classList.add(type ? type :'info');
    notify.innerText=message ? message: getrandommessaage();
    // console.log(notify);

    toasts.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
    
}

function getrandommessaage(){
    return messages[Math.floor(Math.random()*messages.length)];

}
// console.log(getrandommessaage());


// 5TN WDF 2008